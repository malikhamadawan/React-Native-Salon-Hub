/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';
import Input from '../../components/input';
import CustomButton from '../../components/customButton';
import OrSeprator from '../../components/orSeprator';
import MainContainer from '../../components/mainContainer';
import Header from '../../components/header';
import HeaderDown from '../../components/headerDown';

const SignUp = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
      <Header onboarding={'signup'} />
      <View
        style={{
          marginTop: '5%',
          // backgroundColor:'red',
          width: '100%',
        }}>
        <Input img={require('../../assets/icon1.png')} placeholder={'Name'} />
        <Input img={require('../../assets/icon2.png')} placeholder={'Email'} />
        <Input
          img={require('../../assets/icon3.png')}
          placeholder={'Password'}
          password={true}
        />
        <Input
          img={require('../../assets/icon3.png')}
          placeholder={'Confirm Password'}
          password={true}
        />
        <Text
          style={{
            fontSize: 11,
            color: 'black',
            marginHorizontal: '8%',
            marginTop: 5,
          }}>
          By signing up you agree to our
          <Text
            style={{
              color: '#2158FF',
            }}>
            {' '}
            Term of use and privacy{' '}
          </Text>
          notice
        </Text>
      </View>
      <CustomButton
        text={'Sign Up'}
        txtColor={'#fff'}
        justi={'center'}
        btnColor={'#2158ff'}
        onPress={() => navigation.navigate('AppStack', {screen: 'BottomTab'})}
      />
      <OrSeprator />
      <CustomButton
        text={'Sign Up with Google'}
        txtColor={'#2158ff'}
        borderColor={'#2158ff'}
        justi={'center'}
        showImage={true}
        imgPath={require('../../assets/googleIcon.png')}
        borderWidth={true}
        onPress={() => {
          console.log('hello');
        }}
      />
      <HeaderDown
        value={'signup'}
        press={() => navigation.navigate('AuthStack', {screen: 'LogIn'})}
      />
    </View>
  );
};

export default SignUp;
