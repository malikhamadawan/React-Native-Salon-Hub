import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Input = ({
  img,
  img2,
  value,
  leftIcon,
  imgWidth,
  rightIcon,
  placeholder,
  onChangeText,
  imgBorderRadius,
  secureTextEntry,
  marginHorizontal,
}) => {
  const [show, setShow] = useState(secureTextEntry);
  return (
    <View
      style={[
        styles.mainContainer,
        {
          marginHorizontal: marginHorizontal,
        },
      ]}>
      {leftIcon && (
        <Image
          source={img}
          style={[
            styles.leftIconStyle,
            {
              width: imgWidth ? imgWidth : 20,
              borderRadius: imgBorderRadius,
            },
          ]}
        />
      )}
      <TextInput
        value={value}
        secureTextEntry={show}
        placeholder={placeholder}
        style={styles.inputStyle}
        onChangeText={onChangeText}
      />
      {show && (
        <TouchableOpacity
          onPress={() => {
            setShow(!show);
          }}>
          <Image
            source={require('../../assets/icon4.png')}
            style={styles.eyeIconStyle}
          />
        </TouchableOpacity>
      )}
      {rightIcon && <Image source={img2} style={styles.rightIconStyle} />}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '95%',
    borderRadius: 10,
    marginBottom: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  leftIconStyle: {
    height: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  inputStyle: {
    height: 40,
    padding: 0,
    width: '78%',
    marginLeft: 10,
  },
  eyeIconStyle: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  rightIconStyle: {
    width: 24,
    height: 24,
    marginLeft: 10,
    marginRight: 5,
  },
});

export {Input};
