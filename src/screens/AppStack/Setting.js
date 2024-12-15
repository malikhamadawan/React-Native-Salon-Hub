import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ProfileHeader} from '../../components/profileHeader';
import CustomButton from '../../components/customButton';
import {CustomView} from '../../components/mainContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

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
    <CustomView marginTop={'15%'}>
      <ProfileHeader
        onPress={() =>
          navigation.navigate('AppStack', {screen: 'Notifications'})
        }
      />
      <View style={{width: '100%', marginTop: 40}}>
        <CustomButton
          onPress={() => navigation.navigate('AppStack', {screen: 'Profile'})}
          btnColor={'#fff'}
          text={'Profile'}
          txtColor={'#2158ff'}
          imgPath={require('../../assets/icon1.png')}
          showImage={true}
          width={'95%'}
          justi={'flex-start'}
          imgMarg={10}
        />
        <CustomButton
          btnColor={'#fff'}
          text={'Appointments'}
          txtColor={'#2158ff'}
          imgPath={require('../../assets/appoinment2.png')}
          showImage={true}
          width={'95%'}
          justi={'flex-start'}
          imgMarg={10}
        />
        <CustomButton
          btnColor={'#fff'}
          text={'Language Region'}
          txtColor={'#2158ff'}
          imgPath={require('../../assets/languageIcon.png')}
          showImage={true}
          width={'95%'}
          justi={'flex-start'}
          imgMarg={10}
        />
        <CustomButton
          btnColor={'#fff'}
          text={'Privacy and Security'}
          txtColor={'#2158ff'}
          imgPath={require('../../assets/securityIcon.png')}
          showImage={true}
          width={'95%'}
          justi={'flex-start'}
          imgMarg={10}
        />
        <CustomButton
          btnColor={'#fff'}
          text={'Feed Back and Support'}
          txtColor={'#2158ff'}
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
            tintColor: '#2158ff',
          }}
        />
        <Text style={{color: '#000000', fontWeight: '500', fontSize: 15}}>
          Logout
        </Text>
      </TouchableOpacity>
    </CustomView>
  );
};

export default Setting;
