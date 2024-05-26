import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomButton from '../../components/customButton';

const CheckOut = () => {
  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 60 : 30,
        flex: 1,
        paddingHorizontal: 10,
      }}>
      <View
      style={{
        justifyContent: 'center',
        width: '100%',
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems : 'center',
      }}>
      <Image
    source={require('../../assets/checkOutPic.png')}
    style={{
        height:310,
        width:310,
    }}
      />
      </View>
      <View
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: Platform.OS === 'ios' ? 0 : 25,
      }}>
      <Text
      style={{
        fontSize:30,
        color:'black',
        fontWeight:'700',
      }}>Order was placed </Text>
      </View>
      <View
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
       <Text
      style={{
        fontSize:30,
        color:'#2158FF',
        fontWeight:'700',
      }}>Successfully!</Text>
      </View>
      <View
      style={{
        flexDirection:'row',
        justifyContent: 'center',
        height:250,
        // backgroundColor:'red',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 0 : 20,
      }}>
      <Text
      style={{
        color:'black',
        fontSize:15,
      }}>Your Order ID :</Text>
      <Text
      style={{
        fontSize:18,
        fontWeight:'500',
        color:'black',
        marginLeft:5,
      }}># XDC178fu14Qtz31 </Text>
      </View>
      <CustomButton
        text={'Continue Shopping'}
        btnColor={'#2158FF'}
        justi={'center'}
        txtColor={'white'}
        marginTop={30}
      />
    </View>
  );
};

export default CheckOut;
