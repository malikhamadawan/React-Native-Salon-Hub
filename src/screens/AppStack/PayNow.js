import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomButton from '../../components/customButton';
import {ProfileCard} from '../../components/profileCard';

const PayNow = ({navigation}) => {
  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 56 : 35,
        flex: 1,
        paddingHorizontal: 10,
      }}>
      <ProfileCard
        showButton={false}
        text1={'Mr Cuts Hair\nSaloon\n'}
        text2={'Block F,PIA Housing Scheme,Lahore'}
        profileImg1={require('../../assets/mrCuts.jpeg')}
      />
      <View
        style={{
          width: '90%',
          height: 50,
          marginTop: 10,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 23,
            color: 'black',
            fontWeight: '600',
            color: 'black',
          }}>
          Schedule
        </Text>
      </View>
      <View
        style={{
          width: '95%',
          height: 60,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 5,
        }}>
        <View
          style={{
            height: 40,
            width: 150,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/calenderIcon2.png')}
            style={{
              height: 30,
              width: 30,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: '500',
            }}>
            18, March
          </Text>
        </View>
        <View
          style={{
            height: 40,
            width: 150,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/clockIcon2.png')}
            style={{
              height: 30,
              width: 30,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: '500',
            }}>
            14:00
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          height: 50,
          marginTop: Platform.OS === 'ios' ? 10 : 15,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 23,
            color: 'black',
            fontWeight: '600',
            color: 'black',
          }}>
          Payment Method
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          height: 180,
        }}>
        <Image
          source={require('../../assets/visaCard.png')}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          height: 400,
        }}>
        <CustomButton
          btnColor={'white'}
          width={150}
          borderColor={'black'}
          borderWidth={true}
          justi={'center'}
          text={'Cancel'}
          btnHeight={42}
        />
        <CustomButton
          onPress={() => {
            navigation.navigate('AppStack', {screen: 'CheckOut'});
          }}
          btnColor={'#2158FF'}
          width={150}
          text={'Check Out'}
          justi={'center'}
          txtColor={'white'}
          btnHeight={42}
        />
      </View>
    </View>
  );
};

export default PayNow;
