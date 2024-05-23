import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MainContainer from '../../components/mainContainer';
import {ProfileHeader} from '../../components/profileHeader';
import CustomButton from '../../components/customButton';

const Setting = () => {
  return (
    <MainContainer marginTop={'15%'}>
      <ProfileHeader />
      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Image
          source={require('../../assets/umair1.jpg')}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
          }}
        />
        <View
          style={{
            marginLeft: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: '#000',
            }}>
            Umair Malik
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '200',
            }}>
            talhabinumar004@gmail.com
          </Text>
        </View>
      </View> */}
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
        <Text style={{color: '#000000', fontWeight: '500', fontSize: 15}}>
          Logout
        </Text>
      </TouchableOpacity>
    </MainContainer>
  );
};

export default Setting;
