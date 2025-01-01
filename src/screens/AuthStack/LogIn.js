import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import {Input} from '../../components/input';
import Header from '../../components/header';
import OrSeprator from '../../components/orSeprator';
import HeaderDown from '../../components/headerDown';
import CustomButton from '../../components/customButton';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoadingLottie} from '../../components/loadingLottie';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const LogIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Configure Google Sign-In
    GoogleSignin.configure({
      scopes: ['email', 'profile'],
      webClientId: 'your-web-client-id', // Replace with your actual web client ID
      offlineAccess: true,
    });

    // Check if user is already logged in
    const checkUserSession = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        navigation.navigate('AppStack', {screen: 'BottomTab'}); // Navigate to home if token exists
      }
    };

    checkUserSession();
  }, [navigation]);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );

      // Save user session to AsyncStorage
      await AsyncStorage.setItem('userToken', userCredential.user.uid);
      navigation.navigate('AppStack', {screen: 'BottomTab'}); // Navigate to home
    } catch (error) {
      Alert.alert('Error', 'Invalid username or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(
        userInfo.idToken,
      );
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );

      // Save user session to AsyncStorage
      await AsyncStorage.setItem('userToken', userCredential.user.uid);
      navigation.navigate('AppStack', {screen: 'BottomTab'}); // Navigate to home
    } catch (error) {
      Alert.alert('Error', 'Google sign-in failed. Please try again.');
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Header onboarding={'login'} />
      <View style={{marginTop: 20, width: '100%'}}>
        <Input
          leftIcon={true}
          placeholder={'Email'}
          img={require('../../assets/icon2.png')}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <Input
          leftIcon={true}
          secureTextEntry={true}
          placeholder={'Password'}
          img={require('../../assets/icon3.png')}
          onChangeText={text => setPassword(text)}
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
      <View style={{marginTop: 20, width: '100%', alignItems: 'center'}}>
        <CustomButton
          onPress={handleLogin}
          text={'Sign In'}
          txtColor={'#fff'}
          justi={'center'}
          btnColor={'#2158FF'}
        />
        <OrSeprator />
        <CustomButton
          onPress={signInWithGoogle}
          text={'Sign In with Google'}
          txtColor={'#2158FF'}
          btnColor={'#fff'}
          justi={'center'}
          showImage={true}
          imgPath={require('../../assets/googleIcon.png')}
          borderColor={'#2158FF'}
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
