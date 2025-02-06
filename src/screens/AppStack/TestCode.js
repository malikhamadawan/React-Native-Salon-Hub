import {View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Product from '../../components/Product';
import {useSelector} from 'react-redux';

const TestCode = () => {
  const products = [
    {
      id: '1',
      name: 'Samsung Mobile',
      color: 'white',
      price: '30000',
      Image: require('../../assets/smartPhone.png'),
    },
    {
      id: '2',
      name: 'Apple I Phone',
      color: 'black',
      price: '130000',
      Image: require('../../assets/smartPhone.png'),
    },
    {
      id: '3',
      name: 'Nokia Mobile',
      color: 'green',
      price: '20000',
      Image: require('../../assets/smartPhone.png'),
    },
  ];
  const cartItems = useSelector(state => state.cart.items);
  console.log('cartItems--------', cartItems);
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 60,
    // backgroundColor: 'yellow',
  },
  text: {
    fontSize: 20,
  },
});
export default TestCode;
