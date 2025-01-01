/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Platform, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileHeader = ({onPress}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userInfo');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
        }
      } catch (error) {
        // Handle errors here
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  console.log('User', user?.username);
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        marginTop: Platform.OS === 'ios' ? '12%' : '8%',
        marginBottom: 12,
        // backgroundColor: 'red',
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
            // marginLeft: 5,
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
            Hi, {user?.username ? user?.username : 'Umair'}
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
              tintColor={'#2158FF'}
              source={
                user?.image
                  ? {uri: user?.image}
                  : require('../../assets/mapIcon.png')
              }
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
        onPress={onPress}
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
          // shadowColor: (Platform.OS = 'ios' ? '#808080' : null),
          shadowOffset: {
            width: 4,
            height: 5,
          },
        }}>
        <Image
          tintColor={'#2158FF'}
          source={require('../../assets/bellIcon1.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export {ProfileHeader};
