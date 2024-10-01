/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
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
import {
  GoogleOneTapSignIn,
  statusCodes,
  isErrorWithCode,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';

const LogIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email', 'profile'],
      webClientId:
        '221263845442-mverfrfkmhknbv1b4oe6bqhdt3ibdd4k.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

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

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      // Create a new credential with the token from Google
      const googleCredential = auth.GoogleAuthProvider.credential(
        userInfo.idToken,
      );

      // Sign in the user with the credential
      const user = await auth().signInWithCredential(googleCredential);

      console.log('User signed in with Google:', user);
      navigation.navigate('AppStack', {screen: 'BottomTab'});
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Google sign-in failed. Please try again.');
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
          onPress={signInWithGoogle}
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
