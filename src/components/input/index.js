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
  tintcolor,
  marginBottom,
  onBlur,
  onFocus,
}) => {
  const [show, setShow] = useState(false);
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
          tintColor={tintcolor}
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
        secureTextEntry={secureTextEntry && !show ? true : false}
        placeholder={placeholder}
        style={styles.inputStyle}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {secureTextEntry &&
        (show ? (
          <TouchableOpacity
            onPress={() => {
              setShow(!show);
            }}>
            <Image
              source={require('../../assets/icon4.png')}
              style={styles.eyeIconStyle}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setShow(!show);
            }}>
            <Image
              tintColor={'grey'}
              source={require('../../assets/eyeclose2.png')}
              style={[styles.eyeIconStyle, {width: 34, height: 34}]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
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
    height: 16,
    marginLeft: 10,
  },
  rightIconStyle: {
    width: 24,
    height: 24,

    marginRight: 5,
  },
});

export {Input};
