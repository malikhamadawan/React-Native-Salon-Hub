/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Platform,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Background from '../../components/imageBackground';
import Review from '../../components/review';
import Services from '../../components/services';
import Info from '../../components/info';
import CustomButton from '../../components/customButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  addService,
  removeService,
} from '../../components/redux/slices/selectedServicesSlice';
import PersistentBackgroundAnimation from '../../components/PersistentBackgroundAnimation/PersistentBackgroundAnimation';
import {ProfileHeader} from '../../components/profileHeader';
const Shop = ({navigation}) => {
  const [button, setButton] = useState('services');
  const dispatch = useDispatch();
  const selectedServices = useSelector(
    state => state.selectedServices?.selectedServices || [],
  );
  const totalPrice = useSelector(
    state => state.selectedServices?.totalPrice || 0,
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
            navigation.goBack();
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
                      width: 130,
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
                      width: 80,
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
                {/* <View style={styles.box}>
                  <View style={styles.circle} />
                  <View
                    style={{
                      // height: 40,
                      width: 100,
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
                      Today Booking
                    </Text>
                  </View>
                </View> */}
              </View>
            </View>
          </View>
        ) : button === 'info' ? (
          <View></View>
        ) : (
          <View
            style={{
              flex: 1,
            }}></View>
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
