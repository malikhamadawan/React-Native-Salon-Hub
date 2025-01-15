/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet, // Import Alert for showing registration success/failure messages
} from 'react-native';
import CustomButton from '../../components/customButton';
import OrSeprator from '../../components/orSeprator';
import Header from '../../components/header';
import HeaderDown from '../../components/headerDown';
import {Input} from '../../components/input';
import auth from '@react-native-firebase/auth';
import {useRoute} from '@react-navigation/native';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirm, setConfirm] = useState(null);
  const route = useRoute();
  const button = route.params.button || '';
  console.log('button', button);
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
      {button !== '' &&
        (button === 'User' ? (
          <View
            style={{
              marginTop: '5%',
              width: '100%',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Input
              img={require('../../assets/icon1.png')}
              leftIcon={true}
              placeholder={'Name'}
              value={username}
              marginBottom={15}
              tintcolor={'grey'}
              focusview={true}
              onChangeText={setUsername}
              secureTextEntry={false}
            />
            <Input
              leftIcon={true}
              placeholder={'Email'}
              img={require('../../assets/icon2.png')}
              value={email}
              marginBottom={15}
              focusview={true}
              tintcolor={'grey'}
              onChangeText={setEmail}
              secureTextEntry={false}
            />
            <Input
              leftIcon={true}
              placeholder={'Phone Number'}
              img={require('../../assets/phoneIcon1.png')}
              value={phoneNumber}
              tintcolor={'grey'}
              marginBottom={15}
              focusview={true}
              onChangeText={setPhoneNumber}
              secureTextEntry={false}
            />
            <Input
              leftIcon={true}
              secureTextEntry={true}
              placeholder={'Password'}
              img={require('../../assets/icon3.png')}
              value={password}
              focusview={true}
              tintcolor={'grey'}
              marginBottom={15}
              onChangeText={setPassword}
            />
            <Input
              leftIcon={true}
              secureTextEntry={true}
              placeholder={'Confirm Password'}
              marginBottom={15}
              focusview={true}
              tintcolor={'grey'}
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
        ) : (
          <View
            style={{
              marginTop: '5%',
              width: '100%',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Input
              img={require('../../assets/icon1.png')}
              leftIcon={true}
              placeholder={'Owner Name'}
              value={username}
              marginBottom={15}
              focusview={true}
              tintcolor={'grey'}
              onChangeText={setUsername}
              secureTextEntry={false}
            />
            <Input
              img={require('../../assets/shopIcon.png')}
              leftIcon={true}
              placeholder={'Shop Name'}
              tintcolor={'grey'}
              focusview={true}
              marginBottom={15}
              secureTextEntry={false}
            />
            <Input
              leftIcon={true}
              placeholder={'Email'}
              img={require('../../assets/icon2.png')}
              value={email}
              focusview={true}
              tintcolor={'grey'}
              marginBottom={15}
              onChangeText={setEmail}
              secureTextEntry={false}
            />
            <Input
              leftIcon={true}
              placeholder={'Phone Number'}
              img={require('../../assets/phoneIcon1.png')}
              value={phoneNumber}
              focusview={true}
              tintcolor={'grey'}
              marginBottom={15}
              onChangeText={setPhoneNumber}
              secureTextEntry={false}
            />
            <Input
              img={require('../../assets/addressIcon.png')}
              leftIcon={true}
              tintcolor={'grey'}
              focusview={true}
              placeholder={'Shop address'}
              marginBottom={15}
              secureTextEntry={false}
            />
            <Input
              leftIcon={true}
              secureTextEntry={true}
              placeholder={'Password'}
              tintcolor={'grey'}
              focusview={true}
              img={require('../../assets/icon3.png')}
              value={password}
              marginBottom={15}
              onChangeText={setPassword}
            />
            <Input
              leftIcon={true}
              secureTextEntry={true}
              placeholder={'Confirm Password'}
              marginBottom={15}
              focusview={true}
              tintcolor={'grey'}
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
        ))}

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
const styles = StyleSheet.create({
  clientText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
  opasity1: {
    width: '40%',
    // borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 5,
  },
});
export default SignUp;
