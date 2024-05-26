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
import CustomButton from '../../components/customButton';
import OrSeprator from '../../components/orSeprator';
import Header from '../../components/header';
import HeaderDown from '../../components/headerDown';
import {Input} from '../../components/input';

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
        <Input
          img={require('../../assets/icon1.png')}
          leftIcon={true}
          placeholder={'Name'}
        />
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
        <Input
          leftIcon={true}
          secureTextEntry={true}
          placeholder={'Confirm Password'}
          img={require('../../assets/icon3.png')}
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
        onPress={() => {}}
      />
      <HeaderDown
        value={'signup'}
        press={() => navigation.navigate('AuthStack', {screen: 'LogIn'})}
      />
    </View>
  );
};

export default SignUp;
