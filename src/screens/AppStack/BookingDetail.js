import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import CustomButton from '../../components/customButton';
import {ProfileCard} from '../../components/profileCard';

const BookingDetail = ({navigation}) => {
  const cost = [
    {id: 1, title: 'Hourly Price', price: '200 Rs'},
    {id: 2, title: 'hair cutt', price: ' 800 Rs'},
  ];
  const paymentMethod = [
    {id: 1, title: 'Cash', image: require('../../assets/cashIcon.png')},
    {id: 2, title: 'Card', image: require('../../assets/cardIcon.png')},
  ];
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handlePaymentMethodSelect = item => {
    setSelectedPaymentMethod(
      item.id === selectedPaymentMethod ? null : item.id,
    );
  };

  return (
    <ScrollView
      style={{
        marginTop: Platform.OS === 'ios' ? 50 : 35,
        flex: 1,
        paddingHorizontal: 10,
      }}
      nestedScrollEnabled={true}>
      <ProfileCard
        showButton={false}
        text1={'Mr Cuts Hair\nSaloon\n'}
        text2={'Block F,PIA Housing Scheme,Lahore'}
        profileImg1={require('../../assets/mrCuts.jpeg')}
      />
      <View
        style={{
          //   backgroundColor: 'red',
          width: '90%',
          height: 50,
          marginTop: 5,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 23,
            color: 'black',
            fontWeight: '600',
            color: 'black',
          }}>
          Schedule
        </Text>
      </View>
      <View
        style={{
          width: '90%',
          height: 50,
          // backgroundColor: 'blue',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            height: 40,
            width: 150,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/calenderIcon2.png')}
            style={{
              height: 30,
              width: 30,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: '500',
            }}>
            18, March
          </Text>
        </View>
        <View
          style={{
            height: 40,
            width: 150,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/clockIcon2.png')}
            style={{
              height: 30,
              width: 30,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: '500',
            }}>
            14:00
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          height: 45,
          //   marginTop:5,
          justifyContent: 'center',
          // backgroundColor:'red',
        }}>
        <Text
          style={{
            fontSize: 23,
            color: 'black',
            fontWeight: '600',
            color: 'black',
          }}>
          Cost
        </Text>
      </View>
      <FlatList
        scrollEnabled={false}
        style={{flexGrow: 0.4, height: 120}}
        data={cost}
        renderItem={({item}) => {
          return (
            <View
              style={{
                // backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  paddingLeft: 20,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  paddingHorizontal: 20,
                }}>
                {item.price}
              </Text>
            </View>
          );
        }}
        ListFooterComponent={
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                }}>
                Sub Total Price
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                }}>
                1000 Rs
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                }}>
                Discount Price
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                }}>
                100 Rs
              </Text>
            </View>
          </>
        }
      />
      <View
        style={{
          height: 45,
          marginTop: Platform.OS === 'ios' ? -10 : 5,
          width: '90%',
          justifyContent: 'center',
          // backgroundColor:'blue',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/divionLine.png')}
          style={{
            width: '80%',
            height: 1,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '75%',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            fontWeight: '700',
          }}>
          Total Price
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            fontWeight: '700',
          }}>
          900 Rs
        </Text>
      </View>
      <View
        style={{
          height: 60,
          marginTop: Platform.OS === 'ios' ? -10 : -10,
          width: '90%',
          justifyContent: 'center',
          // backgroundColor:'blue',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/divionLine.png')}
          style={{
            width: '80%',
            height: 1,
          }}
        />
      </View>
      <View
        style={{
          width: '90%',
          height: 30,
          //   marginTop:10,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 23,
            color: 'black',
            fontWeight: '600',
            color: 'black',
          }}>
          Payment Method
        </Text>
      </View>
      <FlatList
        data={paymentMethod}
        scrollEnabled={false}
        style={{flexGrow: 1, height: 140}}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              width: '100%',
              height: 50,
              backgroundColor: 'white',
              borderRadius: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}
            onPress={() => handlePaymentMethodSelect(item)}>
            <View
              style={{
                width: '85%',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
              }}>
              <Image source={item.image} style={{height: 30, width: 30,marginLeft:5}} />
              <Text
                style={{fontSize: 18, color: 'black', paddingHorizontal: 10}}>
                {item.title}
              </Text>
            </View>
            <View
              style={{
                width: '15%',
              }}>
              {selectedPaymentMethod === item.id && (
                <Image
                  source={require('../../assets/checkBoxIcon.png')}
                  style={{height: 30, width: 30}}
                />
              )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <View
        style={{
          // marginTop: 10,
          height: 120,
        }}>
        <CustomButton
          onPress={() => {
            navigation.navigate('AppStack', {screen: 'CardDetail'});
          }}
          style={{marginTop: Platform.OS === 'ios' ? 5 : 0}}
          width={159}
          text={'Book Now'}
          btnColor={selectedPaymentMethod ? '#2158FF' : '#BBE4FB'}
          justi={'center'}
          txtColor={'white'}
        />
      </View>
    </ScrollView>
  );
};

export default BookingDetail;
