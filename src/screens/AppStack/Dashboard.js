/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import ScheduleCard from '../../components/scheduleCard/index';
import Review from '../../components/review';
import Background from '../../components/imageBackground';
import {useDispatch, useSelector} from 'react-redux';
import {
  addService,
  removeService,
} from '../../components/redux/slices/selectedServicesSlice';
import PersistentBackgroundAnimation from '../../components/PersistentBackgroundAnimation/PersistentBackgroundAnimation';
const Shop = ({navigation}) => {
  const [button, setButton] = useState('services');
  const dispatch = useDispatch();
  const selectedServices = useSelector(
    state => state.selectedServices?.selectedServices || [],
  );

  const review = [
    {
      id: 0,
      profileName: 'Sid Da Silva',
      profileSymbol: 'S',
      stars: require('../../assets/starIcon.png'),
      comment: 'Very good always a great cut',
    },
    {
      id: 1,
      profileName: 'Ash Kurd',
      profileSymbol: 'A',
      stars: require('../../assets/starIcon.png'),
      comment: 'Best Experience',
    },
    {
      id: 2,
      profileName: 'George Lovell',
      profileSymbol: 'G',
      stars: require('../../assets/starIcon.png'),
      comment: 'I like it very.',
    },
    {
      id: 3,
      profileName: 'Alessandro Anzaldi',
      profileSymbol: 'A',
      stars: require('../../assets/starIcon.png'),
      comment: 'Excellent service',
    },
    {
      id: 4,
      profileName: 'Patrick Quelhas',
      profileSymbol: 'P',
      stars: require('../../assets/starIcon.png'),
      comment: 'Best Haircut i will come again',
    },
    {
      id: 5,
      profileName: 'Michael Cardoso',
      profileSymbol: 'M',
      stars: require('../../assets/starIcon.png'),
      comment: 'Proffesional haircut',
    },
    {
      id: 6,
      profileName: 'Luca Fathollazadeh',
      profileSymbol: 'S',
      stars: require('../../assets/starIcon.png'),
      comment: 'Gorgeous,Brilliant services',
    },
  ];

  const data = [
    {
      id: 0,
      title: 'Nadeem Saloon',
      name: 'Nadeem',
      profileImage: require('../../assets/profile1.png'),
      date: 'Monday,26 May',
      startTime: '10:00',
      endTime: '10:30',
    },
    {
      id: 1,
      title: 'Mr Cutts',
      name: 'Usman',
      profileImage: require('../../assets/profile2.jpeg'),
      date: 'Tuesday,26 June',
      startTime: '09:00',
      endTime: '10:00',
    },
    {
      id: 2,
      title: 'DownTown Hair Saloon',
      name: 'Nouman Khalid',
      profileImage: require('../../assets/profile3.jpeg'),
      date: 'Saturday,16 Feb',
      startTime: '12:00',
      endTime: '13:00',
    },
    {
      id: 3,
      title: 'Master Cuts',
      name: 'Asad',
      profileImage: require('../../assets/profile4.jpeg'),
      date: 'Sunday,21 Nov',
      startTime: '20:00',
      endTime: '21:00',
    },
    {
      id: 4,
      title: 'Vicky Hair Saloon',
      name: 'Vicky',
      profileImage: require('../../assets/profile5.jpg'),
      date: 'Wednesday,19 March',
      startTime: '22:00',
      endTime: '23:00',
    },
  ];

  const handleSelect = item => {
    if (selectedServices.some(service => service.id === item.id)) {
      dispatch(removeService(item)); // Dispatch Redux action to remove the service
    } else {
      dispatch(addService(item)); // Dispatch Redux action to add the service
    }
  };

  return (
    <View style={{flex: 1}}>
      <PersistentBackgroundAnimation />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Background
          Text1={'DASHBOARD'}
          Text2={'APPOINTMENT'}
          Text3={'REVIEWS'}
          onPress={() => {
            setButton('services');
          }}
          onPressServices={() => {
            setButton('info');
          }}
          onPressReview={() => {
            setButton('review');
          }}
          info={button}
          onPressArrow={() => {
            navigation.navigate('AppStack', {
              screen: 'BottomTab',
              params: {
                screen: 'Home',
              },
            });
          }}
        />

        {button === 'services' ? (
          <View style={styles.container}>
            <View style={styles.row}>
              <View style={styles.column}>
                <View style={styles.box}>
                  <View style={styles.circle}>
                    <Text
                      style={{
                        fontSize: 40,
                        color: '#F14A00',
                      }}>
                      17
                    </Text>
                  </View>
                  <View
                    style={{
                      // height: 40,
                      width: 180,
                      backgroundColor: '#fff',
                      alignItems: 'center',
                      top: 8,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      Today Appointments
                    </Text>
                  </View>
                </View>
                <View style={styles.box}>
                  <View style={styles.circle}>
                    <Text
                      style={{
                        fontSize: 40,
                        color: '#F14A00',
                      }}>
                      253
                    </Text>
                  </View>
                  <View
                    style={{
                      // height: 40,
                      width: 180,
                      backgroundColor: '#fff',
                      alignItems: 'center',
                      top: 8,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      Upcoming Apointments
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.box}>
                  <View style={styles.circle}>
                    <Text
                      style={{
                        fontSize: 40,
                        color: '#F14A00',
                      }}>
                      1528
                    </Text>
                  </View>
                  <View
                    style={{
                      // height: 40,
                      width: 150,
                      backgroundColor: '#fff',
                      alignItems: 'center',
                      top: 8,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      Total Appointments
                    </Text>
                  </View>
                </View>
                <View style={styles.box}>
                  <View style={styles.circle}>
                    <Text
                      style={{
                        fontSize: 40,
                        color: '#F14A00',
                      }}>
                      16
                    </Text>
                  </View>
                  <View
                    style={{
                      // height: 40,
                      width: 120,
                      backgroundColor: '#fff',
                      alignItems: 'center',
                      top: 8,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      A/V Per Day
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ) : button === 'info' ? (
          <View style={{width: '100%', flex: 1, marginTop: 5}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: 'center',
              }}
              renderItem={({item}) => {
                return (
                  <ScheduleCard
                    name={item.name}
                    title={item.title}
                    date={item.date}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    profileImage={item.profileImage}
                    showBtn={true}
                    text1={'Accept'}
                  />
                );
              }}
              data={data}
            />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              width: '100%',
              marginTop: 5,
            }}>
            <FlatList
              contentContainerStyle={{
                flexGrow: 1,
              }}
              style={{
                flex: 1,
              }}
              data={review}
              renderItem={({item}) => {
                return (
                  <Review
                    stars={item.stars}
                    comment={item.comment}
                    profileName={item.profileName}
                    profileSymbol={item.profileSymbol}
                  />
                );
              }}
            />
          </View>
        )}
        <View
          style={{
            width: '100%',
            marginBottom: '8%',
          }}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    flex: 1,
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    width: '55%',
    backgroundColor: 'transparent',
  },
  box: {
    height: '38%',
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 76,
    borderWidth: 5,
    borderColor: '#C62300',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Shop;
