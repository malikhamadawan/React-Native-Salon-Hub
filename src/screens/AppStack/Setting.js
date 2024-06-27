import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ProfileHeader} from '../../components/profileHeader';
import CustomButton from '../../components/customButton';
import {CustomView} from '../../components/mainContainer';

const Setting = ({navigation}) => {
  return (
    <CustomView marginTop={'15%'}>
      <ProfileHeader />
      <View
        style={{
          width: '100%',
          marginTop: 40,
        }}>
        <CustomButton
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
        // onPress={handlePress}
        style={{
          // backgroundColor: 'yellow',
          width: '25%',
          justifyContent: 'center',
          alignContent: 'center',
          flexDirection: 'row',
          position: 'absolute',
          bottom: 30,
          right: 0,
        }}>
        <Image
          source={require('../../assets/logOut1.png')}
          style={{
            height: 20,
            width: 20,
            marginRight: 3,
            tintColor: '#2158ff',
          }}
        />
        <Text
          onPress={() => navigation.replace('AuthStack', {screen: 'LogIn'})}
          style={{color: '#000000', fontWeight: '500', fontSize: 15}}>
          Logout
        </Text>
      </TouchableOpacity>
    </CustomView>
  );
};

export default Setting;
