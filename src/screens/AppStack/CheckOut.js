import React from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import CustomButton from '../../components/customButton';

const CheckOut = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/checkOutPic.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Order was placed</Text>
        <Text style={styles.successText}>Successfully!</Text>
      </View>
      <View style={styles.orderIdContainer}>
        <Text style={styles.orderIdLabel}>Your Order ID :</Text>
        <Text style={styles.orderId}># XDC178fu14Qtz31</Text>
      </View>
      <CustomButton
        onPress={() => {
          navigation.navigate('AppStack', {
            screen: 'BottomTab',
            params: {
              screen: 'Home',
            },
          });
        }}
        text="Continue Shopping"
        btnColor="#2158FF"
        justi="center"
        txtColor="white"
        marginTop={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 60 : 30,
    flex: 1,
    paddingHorizontal: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    height: 310,
    width: 310,
  },
  textContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ? 0 : 25,
  },
  mainText: {
    fontSize: 30,
    color: 'black',
    fontWeight: '700',
  },
  successText: {
    fontSize: 30,
    color: '#2158FF',
    fontWeight: '700',
  },
  orderIdContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    marginTop: Platform.OS === 'ios' ? 0 : 20,
  },
  orderIdLabel: {
    color: 'black',
    fontSize: 15,
  },
  orderId: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginLeft: 5,
  },
});

export default CheckOut;
