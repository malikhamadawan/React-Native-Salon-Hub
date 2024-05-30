import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const index = ({title, time, details, price, isSelected, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '100%',
        backgroundColor: isSelected ? '#2158FF' : '#fff',
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
              color: isSelected ? '#fff' : 'black',
              fontSize: 20,
              fontWeight: '500',
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: isSelected ? '#fff' : 'gray',
              fontWeight: '400',
            }}>
            {time}
          </Text>
          <Text
            style={{
              color: isSelected ? '#fff' : 'black',
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
              color: isSelected ? '#fff' : 'black',
              fontSize: 14,
              fontWeight: '500',
            }}>
            {price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default index;
