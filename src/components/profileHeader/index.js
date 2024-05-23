import {View, Text, TouchableOpacity, Platform, Image} from 'react-native';
import React from 'react';

const ProfileHeader = () => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '60%',
        }}>
        <Image
          source={require('../../assets/umair1.jpg')}
          style={{
            height: 60,
            width: 60,
            marginTop: 5,
            borderRadius: 100,
            marginLeft: 10,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '600',
              color: 'black',
              marginLeft: 10,
            }}>
            Hi, Umair
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginLeft: 10,
            }}>
            <Image
              source={require('../../assets/mapIcon.png')}
              style={{
                height: 12,
                width: 12,
              }}
            />
            <Text
              style={{
                fontSize: 10,
                color: 'black',
                marginLeft: 3,
              }}>
              52WQ+2X5, New South Wales
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          height: 45,
          width: 45,
          backgroundColor: 'white',
          borderRadius: 12,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          elevation: 5,
          shadowOpacity: 10,
          shadowColor: (Platform.OS = 'ios' ? '#808080' : null),
          shadowOffset: {
            width: 4,
            height: 5,
          },
        }}>
        <Image source={require('../../assets/bellIcon1.png')} />
      </TouchableOpacity>
    </View>
  );
};

export {ProfileHeader};
