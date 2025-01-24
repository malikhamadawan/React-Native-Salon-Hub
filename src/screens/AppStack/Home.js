/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Platform,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  PanResponder,
  ImageBackgroundBase,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

/** component */
import {Input} from '../../components/input';
import LottieView from 'lottie-react-native';
import ScheduleCard from '../../components/scheduleCard';
import {ProfileHeader} from '../../components/profileHeader';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AutoScrollFlatList} from '../../components/AutoScrollFlatList/AutoScrollFlatList';

const Home = ({navigation}) => {
  const [user1, setUser1] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); //
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [width, setWidth] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [more, setMore] = useState(false);
  const [search, setSearch] = useState(false);
  const progress = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY()).current;
  const backgroundOpacity = useRef(new Animated.Value(1)).current; // Initialize opacity at 1

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 5, // Activate pan responder for vertical movement
      onPanResponderMove: (evt, gestureState) => {
        Animated.event([null, {dy: pan.y}], {useNativeDriver: false})(
          evt,
          gestureState,
        );

        // Adjust background opacity based on vertical drag
        const opacityValue = 1 - Math.min(gestureState.dy / 300, 1);
        backgroundOpacity.setValue(opacityValue);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          // Threshold for downward swipe
          setIsModalVisible(false);
          setSelectedImage(null);
          setSelectedImageIndex(null); // Reset index when modal is closed
          progress.setValue(0); // Reset progress

          // Ensure background fades out completely
          Animated.timing(backgroundOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start();
        } else {
          // Reset position and background opacity if not swiped far enough
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();

          Animated.timing(backgroundOpacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    pan.setValue({x: 0, y: 0}); // Reset pan position when modal opens
  });

  useEffect(() => {
    const checkUserSession = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        const currentUser = await auth().currentUser;
        setUser1(currentUser);
      } else {
        navigation.navigate('AuthStack', {screen: 'LogIn'}); // Redirect to login if not authenticated
      }
    };
    checkUserSession();
  }, [navigation]);

  if (!user1) {
    return null; // Show loading or placeholder until user state is fetched
  }
  const newData = [
    {
      image: require('../../assets/Tesst.jpg'),
      title: 'Hair Cut',
    },
    {
      image: require('../../assets/story1.jpeg'),
      title: 'Much',
    },
    {
      image: require('../../assets/story2.jpeg'),
      title: 'Coloring',
    },
    {
      image: require('../../assets/story3.jpeg'),
      title: 'Beard',
    },
    {
      image: require('../../assets/story4.jpg'),
      title: 'Spa',
    },
    {
      image: require('../../assets/story5.jpeg'),
      title: 'Makeup',
    },
    {
      image: require('../../assets/story1.jpeg'),
      title: 'Styling',
    },
    {
      image: require('../../assets/story1.jpeg'),
      title: 'Nails',
    },
  ];
  const openModal = image => {
    const imageIndex = newData.findIndex(item => item.image === image);
    setSelectedImage(image);
    setSelectedImageIndex(imageIndex); // Store the index of the selected image
    setIsModalVisible(true);

    // Reset progress bar
    progress.setValue(0);

    // Start progress bar animation (10 seconds)
    Animated.timing(progress, {
      toValue: 1,
      duration: 10000, // 10 seconds
      useNativeDriver: false, // Needed for width animations
    }).start(() => {
      // Close modal when progress completes
      setIsModalVisible(false);
      setSelectedImage(null);
      setSelectedImageIndex(null);
    });

    // Set background opacity to full
    Animated.timing(backgroundOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(backgroundOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsModalVisible(false);
      setSelectedImage(null);
      setSelectedImageIndex(null); // Reset index when modal is closed
      progress.setValue(0); // Reset progress bar
    });
  };

  const showNextImage = () => {
    console.log('Starting to show next image...');
    if (
      selectedImageIndex !== null &&
      selectedImageIndex < newData.length - 1
    ) {
      console.log('Image index:', selectedImageIndex);
      progress.setValue(0);
      setIsModalVisible(true);
      setSelectedImage(newData[selectedImageIndex + 1].image);
      setSelectedImageIndex(selectedImageIndex + 1);

      // Reset progress bar

      // Restart animation
      Animated.timing(progress, {
        toValue: 1,
        duration: 10000, // 10 seconds
        useNativeDriver: false, // Needed for width animations
      }).start();
    }
    //
  };

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const showPreviousImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      progress.setValue(0);
      setIsModalVisible(true);
      setSelectedImage(newData[selectedImageIndex - 1].image);
      setSelectedImageIndex(selectedImageIndex - 1);
      Animated.timing(progress, {
        toValue: 1,
        duration: 10000, // 10 seconds
        useNativeDriver: false, // Needed for width animations
      }).start();
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked); // Toggle the like state
    console.log('Liked state:', !isLiked); // Log the new state
  };
  const newData2 = [
    {
      image: require('../../assets/images2.jpeg'),
      time: 'Limited time',
      discount: '40%',
    },
    {
      image: require('../../assets/images6.jpeg'),
      time: 'Unlimited time',
      discount: '30%',
    },
    {
      image: require('../../assets/backGround3.png'),
      time: 'Limited time',
      discount: '15%',
    },
    {
      image: require('../../assets/images5.jpeg'),
      time: 'Limited time',
      discount: '20%',
    },
  ];
  const newData3 = [
    {
      Id: 0,
      image: require('../../assets/vickyhairsalon.jpg'),
      shop: 'Vicky’s hair saloon',
      location: 'Block P Phase 2 Johar Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 1,
      image: require('../../assets/downTown.jpeg'),
      shop: 'Downtown hair saloon',
      location: '871-R1, Johar Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 2,
      image: require('../../assets/barberCompany.jpeg'),
      shop: 'The Barber Company | TBC',
      location: 'Wapda, 391, D3, town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Close',
    },
    {
      id: 3,
      image: require('../../assets/masterCuts.jpeg'),
      shop: 'Master Cuts',
      location: 'Kashmir Block Allama Iqbal Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 4,
      image: require('../../assets/HaiderSalon.jpeg'),
      shop: 'Haider Salon',
      location: 'Township Block 3 Twp Sector C 1 Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Close',
    },
    {
      id: 5,
      image: require('../../assets/mrCuts.jpeg'),
      shop: 'Mr Cut Hair Saloon',
      location: 'Block F Pia Housing Scheme, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      Id: 0,
      image: require('../../assets/vickyhairsalon.jpg'),
      shop: 'Vicky’s hair saloon',
      location: 'Block P Phase 2 Johar Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 1,
      image: require('../../assets/downTown.jpeg'),
      shop: 'Downtown hair saloon',
      location: '871-R1, Johar Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 2,
      image: require('../../assets/barberCompany.jpeg'),
      shop: 'The Barber Company | TBC',
      location: 'Wapda, 391, D3, town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Close',
    },
    {
      id: 3,
      image: require('../../assets/masterCuts.jpeg'),
      shop: 'Master Cuts',
      location: 'Kashmir Block Allama Iqbal Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 4,
      image: require('../../assets/HaiderSalon.jpeg'),
      shop: 'Haider Salon',
      location: 'Township Block 3 Twp Sector C 1 Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Close',
    },
    {
      id: 5,
      image: require('../../assets/mrCuts.jpeg'),
      shop: 'Mr Cut Hair Saloon',
      location: 'Block F Pia Housing Scheme, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
  ];
  const filteredData3 = newData3.filter(
    item =>
      item.shop.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const user = auth().currentUser;
  console.log(user);

  const onLayout = e => {
    const {width} = e.nativeEvent.layout;
    setWidth(width);
  };
  const onResponderRelease = e => {
    const touchX = e.nativeEvent.locationX;

    if (width && touchX > width / 2) {
      showNextImage(); // Right side clicked
    } else {
      showPreviousImage(); // Left side clicked
    }
  };

  const handleMorePress = () => {
    setMore(!more);
  };

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/mainBackground1122.png')}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: 10,
        }}>
        <ProfileHeader
          onPress={() =>
            navigation.navigate('AppStack', {screen: 'Notifications'})
          }
        />
        <Input
          leftIcon={true}
          marginBottom={15}
          rightIcon={true}
          focusview={true}
          img2={require('../../assets/icons5.png')}
          placeholder={'Search “Salon, Specialist...”'}
          img={require('../../assets/searchIcon2.png')}
          value={searchQuery}
          onChangeText={text => {
            if (text !== '') {
              setSearch(true);
            } else {
              setSearch(false);
            }
            setSearchQuery(text);
          }}
        />
        {!search && (
          <>
            <View style={{flexDirection: 'row', width: '100%'}}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={newData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={{
                      width: 65,
                      height: 80,
                      alignItems: 'center',
                      justifyContent: 'center',
                      ...Platform.select({
                        ios: {
                          shadowOffset: {width: 2, height: 4}, // Shadow offset outside
                          shadowOpacity: 0.5, // Slightly transparent shadow
                          shadowRadius: 8, // Blurred shadow effect
                          shadowColor: 'black',
                        },
                        android: {
                          elevation: 10, // Shadow with elevation on Android, giving it an "outside" effect
                        },
                      }),
                    }}
                    onPress={() => openModal(item.image)}>
                    <Image
                      source={item.image}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 10,
                        color: 'black',
                        fontWeight: '400',
                        marginVertical: 5,
                        textAlign: 'center',
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View
              style={{
                elevation: 5,
                marginTop: 20,
                marginHorizontal: 5,
              }}>
              <Text
                style={{
                  fontSize: 23,
                  color: '#0D1230',
                  fontWeight: '600',
                  marginLeft: 5,
                }}>
                #SpecialOffers
              </Text>
            </View>
            {/* <View
              style={{
                width: '100%',
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}> */}
            <AutoScrollFlatList newData2={newData2} />
            {/* </View> */}
            <View
              style={{
                width: '95%',
                marginTop: 10,
                marginHorizontal: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 23,
                  color: '#0D1230',
                  fontWeight: '600',
                  marginLeft: 5,
                }}>
                Upcoming Schedule
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('BottomTab', {screen: 'Schedule'})
                }
                style={{
                  width: 26,
                  height: 26,
                  elevation: 6,
                  borderRadius: 6,
                  alignSelf: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FFFFFF',
                }}>
                <Image
                  source={require('../../assets/Icons6.png')}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '97%',
                alignSelf: 'center',
                ...Platform.select({
                  ios: {
                    shadowOffset: {width: 0, height: 2}, // Shadow offset outside
                    shadowOpacity: 0.5, // Slightly transparent shadow
                    shadowRadius: 8, // Blurred shadow effect
                    shadowColor: 'black',
                  },
                  android: {
                    elevation: 10, // Shadow with elevation on Android, giving it an "outside" effect
                  },
                }),
              }}>
              <ScheduleCard
                name={'Nadeem'}
                endTime={'10:00'}
                startTime={'09:00'}
                date={'Monday,26 May'}
                title={'Nadeem Hair Saloon'}
                profileImage={require('../../assets/profile1.png')}
              />
            </View>

            <View
              style={{
                marginTop: 5,
                width: '95%',
                height: 40,
                marginHorizontal: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 26,
                  color: '#0D1230',
                  fontWeight: '600',
                  marginLeft: 5,
                }}>
                Popular Shops near you
              </Text>
              {!more ? (
                <Text
                  onPress={handleMorePress}
                  style={{
                    fontSize: 11,
                    color: '#2158FF',
                  }}>
                  show more
                </Text>
              ) : (
                <Text
                  onPress={handleMorePress}
                  style={{
                    fontSize: 11,
                    color: '#2158FF',
                  }}>
                  show less
                </Text>
              )}
            </View>
          </>
        )}
        <View
          style={{
            borderRadius: 15,
          }}>
          {filteredData3
            .filter((_, index) => more || index < 2) // Show all items if `more` is true, otherwise limit to the first 3
            .map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  elevation: 5,
                  marginTop: 10,
                  marginVertical: 1,
                  marginHorizontal: 3,
                  ...Platform.select({
                    ios: {
                      shadowOffset: {width: 0, height: 2}, // Shadow offset outside
                      shadowOpacity: 0.5, // Slightly transparent shadow
                      shadowRadius: 8, // Blurred shadow effect
                      shadowColor: 'black',
                    },
                    android: {
                      elevation: 10, // Shadow with elevation on Android, giving it an "outside" effect
                    },
                  }),
                }}>
                <ImageBackground
                  source={item.image}
                  imageStyle={{borderRadius: 15}}
                  style={{
                    height: 180,
                    width: '98%',
                    marginLeft: '2%',
                  }}>
                  <View
                    style={{
                      left: 10,
                      bottom: 10,
                      position: 'absolute',
                    }}>
                    <Text
                      style={{
                        fontSize: 19,
                        color: 'white',
                        fontWeight: '700',
                      }}>
                      {item.shop}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#FAFAFA',
                      }}>
                      {item.location}
                    </Text>
                    <View
                      style={{
                        width: 50,
                        height: 20,
                        borderRadius: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor:
                          item.status === 'Close' ? 'red' : 'green',
                      }}>
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#fff',
                        }}>
                        {item.status}
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
        </View>
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={closeModal}>
          <TouchableWithoutFeedback onPress={closeModal}>
            <Animated.View
              style={{
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                opacity: backgroundOpacity, // Bind to animated value
              }}>
              <View style={styles.modalContent}>
                <Animated.View
                  {...panResponder.panHandlers}
                  style={[
                    styles.modalContent,
                    {
                      transform: pan.getTranslateTransform(),
                    },
                  ]}>
                  <Animated.View
                    style={[styles.progressLine, {width: progressWidth}]}
                  />

                  {selectedImage && (
                    <TouchableWithoutFeedback style={{flex: 1}}>
                      <View style={styles.imageContainer}>
                        {/* Progress Line */}
                        <View
                          style={{
                            position: 'absolute',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: Platform.OS === 'ios' ? 70 : 40,
                            width: '100%',
                            height: Platform.OS === 'ios' ? '6%' : '3%',
                            zIndex: 999,
                          }}>
                          <TouchableOpacity
                            style={styles.closeButton}
                            onPress={closeModal}>
                            <Image
                              source={require('../../assets/leftIcon22.png')}
                              style={styles.closeIcon}
                            />
                          </TouchableOpacity>
                          <Image
                            source={selectedImage}
                            style={{
                              height: 50,
                              width: 50,
                              borderRadius: 50,
                              marginLeft: 10,
                              borderWidth: 1,
                              borderColor: '#fff',
                            }}
                          />
                          <View
                            style={{
                              flexDirection: 'column',
                              paddingLeft: 15,
                            }}>
                            <Text
                              style={{
                                color: '#fff',
                                fontSize: 20,
                                fontWeight: '600',
                              }}>
                              Umair
                            </Text>
                            <View
                              style={{
                                flexDirection: 'row',
                              }}>
                              <Text
                                style={{
                                  color: '#fff',
                                  fontSize: 10,
                                }}>
                                Today,
                              </Text>
                              <Text
                                style={{
                                  color: '#fff',
                                  fontSize: 10,
                                }}>
                                12:13AM
                              </Text>
                            </View>
                          </View>
                        </View>
                        {/* Image */}
                        <View
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                          }}>
                          <ImageBackground
                            source={selectedImage}
                            style={styles.imageBackground}
                            resizeMode="contain"
                            onStartShouldSetResponder={() => true}
                            onLayout={onLayout}
                            onResponderRelease={onResponderRelease}>
                            {/* Like Button */}
                            <View
                              style={{
                                width: '100%',
                                position: 'absolute',
                                bottom: 10,
                              }}>
                              <View
                                style={{
                                  marginBottom: 20,
                                  height: 80,
                                  alignItems: 'center',
                                  justifyContent: 'space-around',
                                  flexDirection: 'row',
                                  width: '100%',
                                  top: Platform.OS === 'ios' ? '1%' : '6%',
                                }}>
                                <View
                                  style={{
                                    height: 60,
                                    flexDirection: 'row',
                                    width: '80%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}>
                                  <Input
                                    marginBottom={0}
                                    img2={require('../../assets/iconsend.png')}
                                    rightIcon={true}
                                    placeholder={'Comments........'}
                                    marginLeftImg2={25}
                                  />
                                </View>
                                <TouchableOpacity
                                  style={styles.likeButton}
                                  onPress={handleLike}>
                                  <Image
                                    source={
                                      isLiked
                                        ? require('../../assets//redHeart.png')
                                        : require('../../assets/HeartIcon.png')
                                    }
                                    style={[styles.likeIcon]}
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                          </ImageBackground>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  )}
                </Animated.View>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  closeButton: {
    marginLeft: 20,
    marginTop: 10,
  },
  closeIcon: {
    width: 24,
    height: 24,
    tintColor: '#2158FF',
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
  },
  progressLine: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 55 : 10,
    left: 0,
    height: 4,
    backgroundColor: '#2158FF',
    zIndex: 20,
  },
  imageBackground: {
    flex: 1,
  },
  likeButton: {
    width: '11%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    elevation: 5,
  },
  likeIcon: {
    width: 40,
    height: 40,
    marginTop: 5,
    marginLeft: 1,
  },
  animation1: {
    flex: 1,
    width: 300,
    height: 300,
  },
});

export default Home;
