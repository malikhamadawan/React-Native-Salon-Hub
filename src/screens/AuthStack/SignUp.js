import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  StatusBar,
  Alert, // Import Alert for showing registration success/failure messages
} from 'react-native';
import CustomButton from '../../components/customButton';
import OrSeprator from '../../components/orSeprator';
import Header from '../../components/header';
import HeaderDown from '../../components/headerDown';
import {Input} from '../../components/input';
import auth from '@react-native-firebase/auth';
import axios from 'axios';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirm, setConfirm] = useState(null);

  const handleSignUp = async () => {
    try {
      const signUp = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (!signUp?.isAnonymous) {
        updateUserProfile();
        signInWithPhoneNumberr();
      }
      console.log('signUp', signUp);
    } catch (error) {
      console.log('error', error);
    }
  };
  const updateUserProfile = async () => {
    const user = auth().currentUser;
    if (user) {
      await user.updateProfile({
        displayName: username,
        phoneNumber: phoneNumber,
        email: email,
      });
      console.log('User profile updated:', user);
    }
  };

  // Call this function after confirming the OTP
  updateUserProfile();

  const signInWithPhoneNumberr = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      navigation.navigate('NumberVerification', {confirm: confirmation});
      setConfirm(confirmation);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
      <Header onboarding={'signup'} />
      <View style={{marginTop: '5%', width: '100%'}}>
        <Input
          img={require('../../assets/icon1.png')}
          leftIcon={true}
          placeholder={'Name'}
          value={username}
          onChangeText={setUsername}
        />
        <Input
          leftIcon={true}
          placeholder={'Email'}
          img={require('../../assets/icon2.png')}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          leftIcon={true}
          placeholder={'Phone Number'}
          img={require('../../assets/phoneIcon1.png')}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Input
          leftIcon={true}
          secureTextEntry={true}
          placeholder={'Password'}
          img={require('../../assets/icon3.png')}
          value={password}
          onChangeText={setPassword}
        />
        <Input
          leftIcon={true}
          secureTextEntry={true}
          placeholder={'Confirm Password'}
          img={require('../../assets/icon3.png')}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Text
          style={{
            fontSize: 11,
            color: 'black',
            marginHorizontal: '8%',
            marginTop: 5,
          }}>
          By signing up you agree to our
          <Text style={{color: '#2158FF'}}> Term of use and privacy </Text>
          notice
        </Text>
      </View>
      <CustomButton
        text={'Sign Up'}
        txtColor={'#fff'}
        justi={'center'}
        btnColor={'#2158FF'}
        onPress={handleSignUp} // Call handleSignUp function when Sign Up button is pressed
      />
      <OrSeprator />
      <CustomButton
        text={'Sign Up with Google'}
        txtColor={'#2158FF'}
        borderColor={'#2158FF'}
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
