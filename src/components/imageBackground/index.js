import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const index = ({onPress, onPressReview, onPressServices, info}) => {
  return (
    <ImageBackground
      source={require('../../assets/mrCuts.jpeg')}
      style={{
        height: 270,
        width: '100%',
        opacity: 10,
      }}>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}>
        <View
          style={{
            marginTop: 46,
          }}>
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              source={require('../../assets/arrowicon2.png')}
              resizeMode={'contain'}
              style={{
                width: 24,
                height: 24,
                marginHorizontal: 20,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/profile2.jpeg')}
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
              }}
            />
            <Text
              style={{
                marginTop: 5,
                color: '#fff',
                fontSize: 20,
                fontWeight: '600',
              }}>
              Usman
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 19,
            height: 50,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={onPress}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: info === 'info' ? 5 : 0,
              borderBottomColor: info === 'info' ? '#2158FF' : 'transparent',
            }}>
            <Text
              style={{
                fontSize: 19,
                color: '#fff',
                fontWeight: '600',
              }}>
              INFO
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressServices}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: info === 'services' ? 5 : 0,
              borderBottomColor:
                info === 'services' ? '#2158FF' : 'transparent',
            }}>
            <Text
              style={{
                fontSize: 19,
                color: '#fff',
                fontWeight: '600',
              }}>
              SERVICES
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressReview}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: info === 'review' ? 5 : 0,
              borderBottomColor: info === 'review' ? '#2158FF' : 'transparent',
            }}>
            <Text
              style={{
                fontSize: 19,
                color: '#fff',
                fontWeight: '600',
              }}>
              REVIEWS
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default index;
