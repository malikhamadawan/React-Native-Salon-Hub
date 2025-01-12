/* eslint-disable react-native/no-inline-styles */
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
  marginLeftImg2,
  height,
  marginBottom,
  onBlur,
  onFocus,
}) => {
  const [show, setShow] = useState(secureTextEntry);
  return (
    <View
      style={[
        styles.mainContainer,
        {
          marginHorizontal: marginHorizontal,
          marginBottom: marginBottom,
        },
      ]}>
      {leftIcon && (
        <Image
          source={img}
          style={[
            styles.leftIconStyle,
            {
              width: imgWidth ? imgWidth : 18,
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
        onBlur={onBlur}
        onFocus={onFocus}
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
      {rightIcon && (
        <TouchableOpacity>
          <Image
            source={img2}
            tintColor={'#2158FF'}
            style={[
              styles.rightIconStyle,
              {marginLeft: marginLeftImg2 ? marginLeftImg2 : 15},
            ]}
          />
        </TouchableOpacity>
      )}
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

    marginRight: 5,
  },
});

export {Input};
