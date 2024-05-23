import {View, Text, Image} from 'react-native';
import React from 'react';

const index = ({profileSymbol, profileName, stars, comment}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 10,
        width: '95%',
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
          // backgroundColor:'yellow',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            // backgroundColor:'pink',
          }}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              backgroundColor: 'white',
              borderWidth: 3,
              borderColor: '#2158FF',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: 'black',
              }}>
              {profileSymbol}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: '500',
              marginLeft: 10,
            }}>
            {profileName}
          </Text>
        </View>
        <Image
          source={stars}
          style={{
            height: 20,
            width: 20,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            fontWeight: '300',
          }}>
          {comment}
        </Text>
      </View>
    </View>
  );
};

export default index;
