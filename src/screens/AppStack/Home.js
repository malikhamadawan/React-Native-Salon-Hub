/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
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
} from 'react-native';

/** component */
import {Input} from '../../components/input';
import ScheduleCard from '../../components/scheduleCard';
import {ProfileHeader} from '../../components/profileHeader';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const [user1, setUser1] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
      image: require('../../assets/p2.png'),
      title: 'Coloring',
    },
    {
      image: require('../../assets/p3.png'),
      title: 'Spa',
    },
    {
      image: require('../../assets/p4.png'),
      title: 'Makeup',
    },
    {
      image: require('../../assets/p5.png'),
      title: 'Styling',
    },
    {
      image: require('../../assets/p6.png'),
      title: 'Nails',
    },
  ];

  const openModal = image => {
    setSelectedImage(image);
    setIsModalVisible(true);

    setTimeout(() => {
      setIsModalVisible(false);
      setSelectedImage(null);
    }, 3000);
    // Optionally, clear the timeout if the modal is hidden before 30 seconds
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
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

  const user = auth().currentUser;
  console.log(user);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      <ProfileHeader
        onPress={() =>
          navigation.navigate('AppStack', {screen: 'Notifications'})
        }
      />
      <Input
        leftIcon={true}
        rightIcon={true}
        img2={require('../../assets/icons5.png')}
        placeholder={'Search “Salon, Specialist...”'}
        img={require('../../assets/searchIcon2.png')}
      />
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
          }}
          horizontal={true}
          data={newData}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                width: 65,
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => openModal(item.image)} // Open modal with the selected image
            >
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: 'black',
                  fontWeight: '400',
                  marginVertical: 5,
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
          }}>
          #SpecialOffers
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{borderRadius: 15}}
          data={newData2}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                marginBottom: 10,
                marginHorizontal: 5,
              }}>
              <ImageBackground
                source={item.image}
                imageStyle={{borderRadius: 15}}
                style={{
                  height: 180,
                  width: 333,
                }}>
                <View
                  style={{
                    width: 83,
                    height: 20,
                    marginTop: 9,
                    marginLeft: 9,
                    borderRadius: 9,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#BBE4FB',
                  }}>
                  <Text
                    style={{
                      fontSize: 11,
                      color: '#0D1230',
                    }}>
                    {item.time}
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 20,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 19,
                      color: '#FAFAFA',
                    }}>
                    Get Special Discount
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: 50,
                      marginTop: 3,
                      marginLeft: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#FAFAFA',
                      }}>
                      Up to
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 7,
                    }}>
                    <Text
                      style={{
                        fontSize: 28,
                        color: '#FAFAFA',
                      }}>
                      {item.discount}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    width: 70,
                    height: 28,
                    marginTop: 25,
                    marginRight: 15,
                    borderRadius: 5,
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    justifyContent: 'center',
                    backgroundColor: '#2158FF',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#FAFAFA',
                    }}>
                    Claim
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      </View>
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
          }}>
          Upcoming Schedule
        </Text>
        <TouchableOpacity
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
      <ScheduleCard
        name={'Nadeem'}
        endTime={'10:00'}
        startTime={'09:00'}
        date={'Monday,26 May'}
        title={'Nadeem Hair Saloon'}
        profileImage={require('../../assets/profile1.png')}
      />
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
          }}>
          Popular Shops near you
        </Text>
        <Text
          style={{
            fontSize: 11,
            color: '#2158FF',
          }}>
          More
        </Text>
      </View>
      <View style={{borderRadius: 15}}>
        {newData3.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              elevation: 5,
              marginTop: 10,
              marginVertical: 3,
              marginHorizontal: 3,
            }}>
            <ImageBackground
              source={item.image}
              imageStyle={{borderRadius: 15}}
              style={{
                height: 180,
                width: '100%',
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
                    backgroundColor: item.status === 'Close' ? 'red' : 'green',
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
        animationType="a"
        onRequestClose={closeModal}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}>
          <View
            style={{
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              height: '92%',
            }}>
            <TouchableOpacity
              style={{
                marginTop: Platform.OS === 'ios' ? 30 : 15,
                marginLeft: 20,
                marginBottom: '10%',
              }}
              onPress={closeModal}>
              <Image
                source={require('../../assets/arrowicon2.png')}
                style={{
                  width: 24,
                  height: 24,
                  marginRight: '92%',
                }}
              />
            </TouchableOpacity>
            {selectedImage && (
              <ImageBackground
                source={selectedImage}
                style={{
                  width: '100%',
                  height: '95%',
                }}
                resizeMode="contain"></ImageBackground>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Home;
