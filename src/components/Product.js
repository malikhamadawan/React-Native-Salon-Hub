import {View, Text, StyleSheet, Button, Image} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, increment} from './redux/slices/cartSlice';

const Product = props => {
  const item = props.item;

  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch(addItem(item));
  };
  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        padding: 10,
      }}>
      <Text style={{fontSize: 20}}>{item.name}</Text>
      <Text style={{fontSize: 20}}>{item.price}</Text>
      <Text style={{fontSize: 20}}>{item.color}</Text>
      <Image style={{height: 100, width: 100}} source={item.Image} />
      <Button title="Add To Cart" onPress={() => handleAddToCart(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default Product;
