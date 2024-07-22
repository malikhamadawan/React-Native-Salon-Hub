import {
  View,
  Text,
  Platform,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useRef} from 'react';
import CustomButton from '../../components/customButton';

const NumberVerification = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(null); // New state to track focus
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    const numericText = text.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    newOtp[index] = numericText;
    setOtp(newOtp);

    // Move focus to the next input only if it's a valid numeric character
    if (numericText && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 80 : 90,
        flex: 1,
        marginHorizontal: 10,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('AuthStack', {screen: 'SignUp'})}>
        <Image
          source={require('../../assets/arrowicon2.png')}
          style={{
            height: 32,
            width: 32,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30%',
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 25,
            color: 'black',
          }}>
          OTP Verification
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          height: '6%',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor:'red',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
          }}>
          Enter OTP sent to your Phone Number
          <Text
            style={{
              fontSize: 17,
              color: '#2158ff',
            }}>
            {' '}
            (+923044949459)
          </Text>
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '15%',
        }}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={[
              styles.inputStyle,
              {borderColor: focusedIndex === index ? 'gray' : '#ccc'}, // Conditional border color
            ]}
            value={value}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            maxLength={1}
            keyboardType="numeric"
            ref={ref => (inputRefs.current[index] = ref)}
            onFocus={() => setFocusedIndex(index)} // Set focused index
            onBlur={() => setFocusedIndex(null)} // Clear focused index
          />
        ))}
      </View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 12,
            color: '#2158ff',
          }}>
          Resend OTP
        </Text>
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '70%',
        }}>
        <CustomButton
          onPress={() => navigation.navigate('AppStack', {screen: 'Home'})}
          btnColor={'#2158ff'}
          width={150}
          borderColor={'transparent'}
          borderWidth={true}
          justi={'center'}
          text={'Submit'}
          btnHeight={42}
          txtColor={'white'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    padding: 0,
    width: '10%',
    marginLeft: 10,
    backgroundColor: 'white',
    borderRadius: 7,
    textAlign: 'center',
    borderWidth: 2, // Ensure the border width is set
  },
});

export default NumberVerification;
