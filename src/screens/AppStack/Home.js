/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import ScheduleCard from '../../components/scheduleCard';
import Input from '../../components/input';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {ProfileHeader} from '../../components/profileHeader';
const Home = () => {
  const newData = [
    {
      image: require('../../assets/p1.png'),
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
  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: '10%',
        flexGrow: 1,
        paddingBottom: 80,
      }}>
      <ProfileHeader />
      <Input
        img={require('../../assets/searchIcon2.png')}
        img2={require('../../assets/icons5.png')}
        password={false}
        justifyContent={'space-between'}
      />
      <View
        style={{
          flex: 1,
          marginHorizontal: '3%',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 5,
          }}>
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
                  justifyContent: 'center',
                  width: 65,
                  height: 80,
                  alignItems: 'center',
                  // shadowColor: '#808080',
                  // shadowOpacity: 10,
                  // shadowOffset: {
                  //   width: 4,
                  //   height: 5,
                  // },
                }}>
                <Image
                  source={item.image}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 30,
                  }}
                />
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: '400',
                    marginVertical: 5,
                    color: 'black',
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            elevation: 5,
            // shadowColor: '#808080',
            // shadowOpacity: 10,
            // shadowOffset: {
            //   width: 4,
            //   height: 5,
            // },
          }}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: '300',
              color: '#0D1230',
            }}>
            #SpecialOffers
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{borderRadius: 15}}
            data={newData2}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  marginHorizontal: 10,
                  marginBottom: 10,
                  // shadowColor: '#808080',
                  // shadowOpacity: 10,
                  // shadowOffset: {
                  //   width: 4,
                  //   height: 5,
                  // },
                }}>
                <ImageBackground
                  source={item.image}
                  imageStyle={{borderRadius: 15}}
                  style={{
                    height: 180,
                    width: 320,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#BBE4FB',
                      height: 20,
                      width: 83,
                      borderRadius: 9,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 9,
                      marginLeft: 9,
                      // elevation: 10,
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
                        marginLeft: 10,
                        marginTop: 3,
                        width: 50,
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
                      backgroundColor: '#2158FF',
                      height: 28,
                      width: 70,
                      alignItems: 'center',
                      alignSelf: 'flex-end',
                      justifyContent: 'center',
                      marginRight: 15,
                      marginTop: 25,
                      borderRadius: 5,
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
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
            // shadowColor: '#808080',
            // shadowOpacity: 10,
            // shadowOffset: {
            //   width: 4,
            //   height: 5,
            // },
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
              height: 26,
              width: 26,
              backgroundColor: '#FFFFFF',
              borderRadius: 6,
              justifyContent: 'center',
              alignSelf: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/Icons6.png')}
              style={{
                height: 20,
                width: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <ScheduleCard
          title={'Nadeem Hair Saloon'}
          name={'Nadeem'}
          date={'Monday,26 May'}
          startTime={'09:00'}
          endTime={'10:00'}
          profileImage={require('../../assets/profile1.png')}
        />
        <View
          style={{
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // shadowColor: '#808080',
            // shadowOpacity: 10,
            // shadowOffset: {
            //   width: 4,
            //   height: 5,
            // },
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
                marginVertical: 10,
                elevation: 5,
              }}>
              <ImageBackground
                source={item.image}
                imageStyle={{borderRadius: 15}}
                style={{
                  height: 180,
                  // elevation: 5,
                  width: '100%',
                  // shadowColor: '#808080',
                  // shadowOpacity: 10,
                  // shadowOffset: {
                  //   width: 4,
                  //   height: 5,
                  // },
                }}>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 19,
                      color: 'white',
                      fontWeight: '700',
                      // elevation: 5,
                      // shadowOpacity: 10,
                      // shadowOffset: {
                      //   width: 4,
                      //   height: 5,
                      // },
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
                      backgroundColor:
                        item.status === 'Close' ? 'red' : 'green',
                      borderRadius: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
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
      </View>
    </ScrollView>
  );
};

export default Home;
