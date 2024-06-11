/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {Input} from '../../components/input';
import Header from '../../components/header';
import OrSeprator from '../../components/orSeprator';
import HeaderDown from '../../components/headerDown';
import CustomButton from '../../components/customButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const LogIn = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Send a POST request to the login endpoint with username and password
      const response = await axios.post('http://192.168.157.203:3000/login', {
        username,
        password,
      });
      console.log('response: ', response);

      // If the request is successful, extract the token from the response data
      const token = response.data.token;

      // Store the token securely using AsyncStorage
      await AsyncStorage.setItem('token', token);

      // Redirect the user to the authenticated screen
      navigation.navigate('AppStack', {screen: 'BottomTab'});
    } catch (error) {
      // If an error occurs during the login process, handle it here
      // Display an alert indicating invalid username or password
      Alert.alert('Error', 'Invalid username or password. Please try again.');
      // Log the error for debugging purposes
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
            setUsername(text);
          }}
          value={username}
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
    </View>
  );
};

export default LogIn;
