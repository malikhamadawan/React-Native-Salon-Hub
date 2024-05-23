import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const index = ({title, time, details, price}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: '#fff',
          marginTop: 10,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: '500',
              }}>
              {title}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'gray',
                fontWeight: '400',
              }}>
              {time}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 13,
              }}>
              {details}
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                fontWeight: '500',
              }}>
              {price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default index;
