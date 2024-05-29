/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {Input} from '../../components/input';
import Header from '../../components/header';
import OrSeprator from '../../components/orSeprator';
import HeaderDown from '../../components/headerDown';
import CustomButton from '../../components/customButton';

const LogIn = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <Header onboarding={'login'} />
      <View
        style={{
          marginTop: 20,
          width: '100%',
          // backgroundColor:'red'
        }}>
        <Input
          leftIcon={true}
          placeholder={'Email'}
          img={require('../../assets/icon2.png')}
        />
        <Input
          leftIcon={true}
          secureTextEntry={true}
          placeholder={'Password'}
          img={require('../../assets/icon3.png')}
        />
      </View>
      <Text
        style={{
          fontSize: 11,
          color: '#2158FF',
          alignSelf: 'flex-end',
          marginRight: 19,
        }}>
        Forgot password?
      </Text>
      <View
        style={{
          marginTop: 20,
          width: '100%',
          alignItems: 'center',
        }}>
        <CustomButton
          onPress={() => navigation.navigate('AppStack', {screen: 'BottomTab'})}
          text={'Sign In'}
          txtColor={'#fff'}
          justi={'center'}
          btnColor={'#2158ff'}
        />
        <OrSeprator />
        <CustomButton
          text={'Sign In with Google'}
          txtColor={'#2158ff'}
          btnColor={'#fff'}
          justi={'center'}
          showImage={true}
          imgPath={require('../../assets/googleIcon.png')}
          borderColor={'#2158ff'}
          borderWidth={true}
        />
      </View>
      <HeaderDown
        value={'login'}
        press={() => navigation.navigate('AuthStack', {screen: 'SignUp'})}
      />
    </View>
  );
};

export default LogIn;
