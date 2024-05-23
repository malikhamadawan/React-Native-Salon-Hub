import {View, Text, Image} from 'react-native';
import Input from '../../components/input';
import React from 'react';

const CardDetail = () => {
  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 50 : 50,
        flex: 1,
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          marginTop: 5,
          maxWidth: '100%',
          marginHorizontal: 10,
          backgroundColor: 'white',
          height: '20%',
          borderRadius: 15,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: '95%',
            width: '100%',
          }}>
          <Image
            source={require('../../assets/mrCuts.jpeg')}
            style={{
              height: '90%',
              width: '40%',
              borderRadius: 10,
              marginLeft: '3%',
              marginTop: '2%',
            }}
          />
          <View
            style={{
              width: '55%',
              marginTop: 5,
              paddingHorizontal: 15,
              paddingVertical: 20,
              //   backgroundColor:'red',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: 'black',
                textAlign: 'center',
                marginLeft: 20,
              }}>
              Mr Cuts Hair Saloon{'\n'}
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '300',
                  color: 'black',
                }}>
                Block F,PIA Housing Scheme,Lahore
              </Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '20%',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginRight: '5%',
              }}></View>
          </View>
        </View>
      </View>
      <View
        style={{
          // marginTop: 10,
          height: 70,
          // backgroundColor:'red',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            fontWeight: '400',
            color: 'black',
          }}>
          Card Holder Name
        </Text>
      </View>
      <Input />
      <View
        style={{
          height: 50,
          // backgroundColor: 'red',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            fontWeight: '400',
            color: 'black',
          }}>
          Card Number
        </Text>
      </View>
      <Input />
      <View
      style={{
        flexDirection:'row',
        justifyContent: 'center',

      }}>
        <Text
        style={{
            fontSize: 18,
            color: 'black',
            fontWeight: '400',
            color: 'black',
          }}>Expiry Date</Text>
          <Text
        style={{
            fontSize: 18,
            color: 'black',
            fontWeight: '400',
            color: 'black',
          }}>CVV</Text>
      </View>
    </View>
  );
};

export default CardDetail;
