/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Alert, KeyboardAvoidingView} from 'react-native';
import {Input} from '../../components/input';
import Header from '../../components/header';
import OrSeprator from '../../components/orSeprator';
import HeaderDown from '../../components/headerDown';
import CustomButton from '../../components/customButton';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {LoadingLottie} from '../../components/loadingLottie';

const LogIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const isUser = await auth().signInWithEmailAndPassword(email, password);
      console.log('isUser', isUser);
      navigation.navigate('AppStack', {screen: 'BottomTab'});
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Invalid username or password. Please try again.');
      console.error(error);
    }
  };
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
        }}>
        <Input
          leftIcon={true}
          placeholder={'Email'}
          img={require('../../assets/icon2.png')}
          onChangeText={text => {
            setEmail(text);
          }}
          value={email}
        />
        <Input
          leftIcon={true}
          secureTextEntry={true}
          placeholder={'Password'}
          img={require('../../assets/icon3.png')}
          onChangeText={text => {
            setPassword(text);
          }}
          value={password}
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
          onPress={handleLogin}
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
      {loading && <LoadingLottie visible={loading} />}
    </View>
  );
};

export default LogIn;
