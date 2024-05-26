import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useState} from 'react';

const Input = ({
  img,
  placeholder,
  onPressPassword,
  password,
  img2,
  justifyContent,
  width,
  rightIcon,
  leftIcon,
  imgBorderRadius,
  imgWidth,
  secureTextEntry,
}) => {
  const [show, setShow] = useState(secureTextEntry);
  return (
    // <View
    //   style={{
    //     flexDirection: 'row',
    //     justifyContent: justifyContent ? justifyContent : 'flex-start',
    //     height: 40,
    //     width: width ? width : '90%',
    //     backgroundColor: 'white',
    //     alignSelf: 'center',
    //     borderRadius: 8,
    //     alignItems: 'center',
    //     marginVertical: '3%',
    //   }}>
    //   <Image
    //     source={img}
    //     style={{
    //       height: password === true ? 20 : 24,
    //       width: password === true ? 20 : imgWidth ? imgWidth : 24,
    //       marginLeft: 10,
    //       marginRight: 5,
    //       borderRadius: imgBorderRadius,
    //     }}
    //   />
    //   <TextInput
    //     style={{
    //       //   marginLeft: 10,
    //       width: password === true ? '77%' : width ? width : '85%',
    //       padding: 0,
    //     }}
    //     placeholder={placeholder}
    //   />
    //   {password === true && (
    //     <TouchableOpacity onPress={press}>
    //       <Image
    //         source={require('../../assets/icon4.png')}
    //         style={{
    //           height: 24,
    //           width: 24,
    //           marginLeft: 10,
    //         }}
    //       />
    //     </TouchableOpacity>
    //   )}
    //   <Image
    //     source={img2}
    //     style={{
    //       height: password === true ? 20 : 24,
    //       width: password === true ? 20 : 24,
    //       marginLeft: 10,
    //       marginRight: 5,
    //     }}
    //   />
    // </View>
    <View
      style={{
        backgroundColor: 'white',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {leftIcon && (
        <Image
          source={img}
          style={{
            height: 20,
            width: imgWidth ? imgWidth : 20,
            marginLeft: 5,
            marginRight: 5,
            borderRadius: imgBorderRadius,
          }}
        />
      )}
      <TextInput
        placeholder={placeholder}
        style={{
          height: 40,
          padding: 0,
          width: '76%',
          marginLeft: 10,
        }}
        secureTextEntry={show}
      />
      {show && (
        <TouchableOpacity
          onPress={() => {
            setShow(!show);
          }}>
          <Image
            source={require('../../assets/icon4.png')}
            style={{
              height: 24,
              width: 24,
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
      )}
      {rightIcon && (
        <Image
          source={img2}
          style={{
            height: 24,
            width: 24,
            marginLeft: 10,
            marginRight: 5,
          }}
        />
      )}
    </View>
  );
};

export {Input};
