import {View, Text} from 'react-native';
import React from 'react';

const ShopDetail = ({navigation}) => {
  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 80 : 90,
        flex: 1,
        alignItems: 'center',
      }}>
      <Text>ShopDetail</Text>
    </View>
  );
};

export default ShopDetail;
