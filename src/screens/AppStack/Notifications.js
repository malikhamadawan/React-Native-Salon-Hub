/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from 'react-native';
import React from 'react';
import MainImageBackground from '../../components/MainImageBackground/MainImageBackground';
import PersistentBackgroundAnimation from '../../components/PersistentBackgroundAnimation/PersistentBackgroundAnimation';

const Notifications = ({navigation}) => {
  const notificat = [
    {
      id: 0,
      name: 'Jennie Whang',
      image: require('../../assets/Notifi1.png'),
      ago: '2 days ago',
      detail:
        'The place was clean,great serivce,stall are friendly.I will certainly recommend to my friends and visit again',
    },
    {
      id: 1,
      name: 'Nathalie',
      image: require('../../assets/Notifi2.png'),
      ago: '1 weeks ago',
      detail:
        'Very nice service from the specialist. I always going here for my treatment.',
    },
    {
      id: 2,
      name: 'Julia Martha',
      image: require('../../assets/Notifi3.png'),
      ago: '2 weeks ago',
      detail:
        'Aku cocok menggunakan produk night cream white secret dari wardah ini. Buat kulit wajahku terasa lem',
    },
    {
      id: 3,
      name: 'Wade Warren',
      image: require('../../assets/Notifi4.png'),
      ago: '2 weeks ago',
      detail:
        'They should know that the car runs really well and gets great gas mileage.',
    },
    {
      id: 4,
      name: 'Jenny Wilson',
      image: require('../../assets/Notifi5.png'),
      ago: ' weeks ago',
      detail:
        'Aku cobain produk ini masih jaman sekolah, karna gak tau apa produk yg bagus. Dan alhamdulillah ini ',
    },
    {
      id: 5,
      name: 'Julia Martha',
      image: require('../../assets/Notifi3.png'),
      ago: '2 weeks ago',
      detail:
        'Aku cocok menggunakan produk night cream white secret dari wardah ini. Buat kulit wajahku terasa lem',
    },
    {
      id: 6,
      name: 'Jennie Whang',
      image: require('../../assets/Notifi1.png'),
      ago: '2 days ago',
      detail:
        'The place was clean,great serivce,stall are friendly.I will certainly recommend to my friends and visit again',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
      }}>
      <PersistentBackgroundAnimation />
      <View
        style={{
          // justifyContent: 'center',
          alignItems: 'center',

          marginTop: Platform.OS === 'ios' ? 50 : 40,

          // alignContent: 'space-between',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            marginLeft: 15,
            backgroundColor: 'white',
            borderRadius: 12,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            elevation: 1,
            shadowOpacity: 2,
            shadowColor: 'black',
            shadowOffset: {
              width: 3,
              height: 3,
            },
          }}
          onPress={() =>
            navigation.navigate('AppStack', {screen: 'BottomTab'})
          }>
          <Image
            style={{
              width: 30,
              height: 30,
            }}
            source={require('../../assets/arrowicon2.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 23,
            color: 'black',
            fontWeight: '600',
            marginLeft: 20,
          }}>
          Notifications
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{
          paddingBottom: 20,
          alignItems: 'center',
          elevation: 1,
          shadowOpacity: 0.7,
          shadowColor: 'black',
          shadowOffset: {
            width: 3,
            height: 3,
          },
        }}
        style={{
          marginTop: 5,
        }}
        data={notificat}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: 120,
                width: '95%',
                marginTop: 10,
                backgroundColor: 'white',
                borderRadius: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // backgroundColor: 'orange',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    // justifyContent: 'space-around',
                    // backgroundColor: 'yellow',
                    width: '47%',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      height: 40,
                      width: 40,
                      marginTop: 5,
                      marginLeft: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 19,
                      color: 'black',
                      fontWeight: '600',
                      marginLeft: 10,
                    }}>
                    {item.name}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'gray',
                    marginRight: 10,
                  }}>
                  {item.ago}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontWeight: '400',
                  marginTop: 15,
                  paddingHorizontal: 10,
                }}>
                {item.detail}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Notifications;
