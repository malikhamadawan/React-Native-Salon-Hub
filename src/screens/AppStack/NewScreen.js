import React, {useState} from 'react';
import {
  View,
  Text,
  Platform,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const NewScreen = ({navigation}) => {
  const data = [
    {
      id: 0,
      name: 'Umair',
      image: require('../../assets/profile2.jpeg'),
      detail: 'Handsome Boy',
      condition: true,
      route: () => {
        navigation.navigate('AuthStack');
      },
    },
    {
      id: 1,
      name: 'Hammad',
      image: require('../../assets/profile2.jpeg'),
      detail: 'Mature boy',
      condition: false,
    },
    {
      id: 2,
      name: 'Haseeb',
      image: require('../../assets/profile2.jpeg'),
      detail: 'Good Boy',
      condition: true,
    },
    {
      id: 3,
      name: 'Hashim',
      image: require('../../assets/profile2.jpeg'),
      detail: 'Good Boy but not Enough',
      condition: false,
    },
    {
      id: 4,
      name: 'Ahmed',
      image: require('../../assets/profile2.jpeg'),
      detail: 'Tall Boy',
      condition: true,
    },
  ];

  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 50 : 30,
        flex: 1,
        marginHorizontal: 5,
      }}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              height: 140,
              backgroundColor: 'white',
              marginVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={item.image}
                style={{
                  height: 100,
                  width: 100,
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: 'black',
                }}>
                {item.name}
              </Text>
              <TouchableOpacity
                onPress={item.route}
                style={{
                  height: 30,
                  width: 70,
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                  marginLeft: 20,
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'white',
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                color: 'black',
              }}>
              {item.detail}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default NewScreen;
