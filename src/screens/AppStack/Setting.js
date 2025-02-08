/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {ProfileHeader} from '../../components/profileHeader';
import CustomButton from '../../components/customButton';
import {CustomView} from '../../components/mainContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import MainImageBackground from '../../components/MainImageBackground/MainImageBackground';
import PersistentBackgroundAnimation from '../../components/PersistentBackgroundAnimation/PersistentBackgroundAnimation';

const Setting = ({navigation}) => {
  const logout = async () => {
    try {
      // Clear AsyncStorage to remove user session
      await AsyncStorage.removeItem('userToken');

      // Sign out from Firebase authentication
      await auth().signOut();

      // Reset the navigation stack and navigate to the Login screen
      navigation.reset({
        index: 0, // This makes Login the first screen in the stack
        routes: [{name: 'AuthStack'}], // Make sure 'AuthStack' is the correct name of your login screen
      });
    } catch (error) {
      console.error('Logout Error: ', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      {/* Persistent background animation */}
      <PersistentBackgroundAnimation />
      <CustomView marginTop={'15%'}>
        <ProfileHeader
          navigation={navigation}
          onPress={() =>
            navigation.navigate('AppStack', {screen: 'Notifications'})
          }
        />
        <View style={{width: '100%', marginTop: 40}}>
          <CustomButton
            onPress={() => navigation.navigate('AppStack', {screen: 'Profile'})}
            btnColor={'#fff'}
            text={'Profile'}
            txtColor={'#C62300'}
            imgPath={require('../../assets/icon1.png')}
            showImage={true}
            width={'95%'}
            justi={'flex-start'}
            imgMarg={10}
          />
          <CustomButton
            onPress={() =>
              navigation.navigate('AppStack', {screen: 'Appointments'})
            }
            btnColor={'#fff'}
            text={'Appointments'}
            txtColor={'#C62300'}
            imgPath={require('../../assets/calender.png')}
            showImage={true}
            width={'95%'}
            justi={'flex-start'}
            imgMarg={10}
          />
          <CustomButton
            btnColor={'#fff'}
            text={'Language Region'}
            txtColor={'#C62300'}
            imgPath={require('../../assets/languageIcon.png')}
            showImage={true}
            width={'95%'}
            justi={'flex-start'}
            imgMarg={10}
          />
          <CustomButton
            btnColor={'#fff'}
            text={'Privacy and Security'}
            txtColor={'#C62300'}
            imgPath={require('../../assets/securityIcon.png')}
            showImage={true}
            width={'95%'}
            justi={'flex-start'}
            imgMarg={10}
          />
          <CustomButton
            btnColor={'#fff'}
            text={'Feed Back and Support'}
            txtColor={'#C62300'}
            imgPath={require('../../assets/feedbackIcon.png')}
            showImage={true}
            width={'95%'}
            justi={'flex-start'}
            imgMarg={10}
          />
        </View>

        <TouchableOpacity
          style={{
            width: '25%',
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 30,
            right: 0,
          }}
          onPress={logout} // Call logout without passing the navigation prop explicitly
        >
          <Image
            source={require('../../assets/logOut1.png')}
            style={{
              height: 20,
              width: 20,
              marginRight: 3,
              tintColor: '#C62300',
            }}
          />
          <Text style={{color: '#000000', fontWeight: '500', fontSize: 15}}>
            Logout
          </Text>
        </TouchableOpacity>
      </CustomView>
    </View>
  );
};

export default Setting;
