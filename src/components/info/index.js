import {View, Text, Image} from 'react-native';
import React from 'react';

const index = ({day, openTime, closeTime}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          width: '46%',
          borderRightWidth: 0.7,
          borderRightColor: 'gray',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/calender.png')}
          resizeMode={'contain'}
          style={{
            height: 22,
            width: 22,
            marginRight: 10,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            fontWeight: '500',
          }}>
          {day}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/clock.png')}
          resizeMode={'contain'}
          style={{
            height: 30,
            width: 30,
            tintColor: '#2158FF',
          }}
        />
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            fontWeight: '400',
            marginLeft: 5,
          }}>
          {openTime}
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: '400',
            }}>
            -
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: '400',
            }}>
            {closeTime}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default index;
