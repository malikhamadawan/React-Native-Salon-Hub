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

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Perform validation checks here before registering the user
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    // Perform registration logic here (e.g., call an API)
    // After successful registration, navigate to the desired screen
    // Example:
    navigation.navigate('AppStack', {screen: 'BottomTab'});
    // You can also show a success message if needed
    Alert.alert('Success', 'Registration successful!');
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
        btnColor={'#2158ff'}
        onPress={handleSignUp} // Call handleSignUp function when Sign Up button is pressed
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
