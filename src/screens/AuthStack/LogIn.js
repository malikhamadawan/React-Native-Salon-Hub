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
import MainContainer from '../../components/mainContainer';
import Input from '../../components/input';
import CustomButton from '../../components/customButton';
import OrSeprator from '../../components/orSeprator';
import Header from '../../components/header';
import HeaderDown from '../../components/headerDown';

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
        <Input img={require('../../assets/icon2.png')} placeholder={'Email'} />
        <Input
          img={require('../../assets/icon3.png')}
          placeholder={'Password'}
          password={true}
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
          // backgroundColor: 'red',
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
