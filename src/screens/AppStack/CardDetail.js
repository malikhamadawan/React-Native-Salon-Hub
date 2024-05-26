import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import {Input} from '../../components/input';
import CustomButton from '../../components/customButton';
import { ProfileCard } from '../../components/profileCard';

const CardDetail = ({navigation}) => {
  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 50 : 40,
        flex: 1,
        paddingHorizontal: 10,
      }}>
      {/* <View
        style={{
          marginTop: 5,
          maxWidth: '100%',
          // marginHorizontal: 5,
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
          </View>
        </View>
      </View> */}
      <ProfileCard
        showButton={false}
        text1={'Mr Cuts Hair    Saloon\n'}
        text2={'Block F,PIA Housing Scheme,Lahore'}
        profileImg1={require('../../assets/mrCuts.jpeg')}
      />
      <View
        style={{
          height: 40,
          // backgroundColor:'red',
          justifyContent: 'center',
          marginTop: Platform.OS === 'ios' ? 42 : 62,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: '400',
          }}>
          Card Holder Name
        </Text>
      </View>
      <Input width={'100%'} placeholder={'Enter holder name'} />
      <View
        style={{
          height: 40,
          // backgroundColor:'red',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: '400',
          }}>
          Card Number
        </Text>
      </View>
      <Input
        width={'100%'}
        img={require('../../assets/paymentmethodicon.png')}
        imgBorderRadius={6}
        imgWidth={40}
        leftIcon={true}
        placeholder={'Enter card number'}
        
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // backgroundColor: 'red',
          marginTop: 20,
        }}>
        <View
          style={{
            width: '50%',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: '400',
              color: 'black',
              // marginLeft:5,
            }}>
            Expiry Date
          </Text>
        </View>
        <View
          style={{
            width: '50%',
            marginLeft: 13,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: '400',
              color: 'black',
            }}>
            CVV
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // backgroundColor: 'red',
          marginTop: 10,
        }}>
        <View
          style={{
            width: '50%',
          }}>
          <Input width={'100%'} placeholder={'Expiry Date'} />
        </View>
        <View
          style={{
            width: '46%',
          }}>
          <Input width={'100%'} placeholder={'Cvv'} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          // backgroundColor:'red',
          justifyContent: 'center',
          height: 400,
        }}>
        <CustomButton
          btnColor={'white'}
          width={150}
          borderColor={'black'}
          borderWidth={true}
          justi={'center'}
          text={'Back'}
          btnHeight={42}
        />
        <CustomButton
          onPress={() => {
            navigation.navigate('AppStack', {screen: 'PayNow'});
          }}
          btnColor={'#2158FF'}
          width={150}
          text={'Pay Now'}
          justi={'center'}
          txtColor={'white'}
          btnHeight={42}
        />
      </View>
    </View>
  );
};

export default CardDetail;
