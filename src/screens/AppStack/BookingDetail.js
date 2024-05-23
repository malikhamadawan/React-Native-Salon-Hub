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
        marginTop: Platform.OS === 'ios' ? 60 : 20,
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
              }}>
              {/* <TouchableOpacity
                style={{
                  height: '100%',
                  width: '50%',
                  backgroundColor: '#F5F5F5',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginRight: 10,
                }}>
                <Image
                  source={require('../../assets/phoneIcon.png')}
                  style={{
                    height: 27,
                    width: 27,
                  }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                  }}>
                  Call
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: '100%',
                  width: '50%',
                  backgroundColor: '#F5F5F5',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../assets/whatsappIcon.png')}
                  style={{
                    height: 38,
                    width: 38,
                  }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                  }}>
                  Call
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          //   backgroundColor: 'red',
          width: '90%',
          height: 50,
          marginTop: 10,
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
          height: 60,
          // backgroundColor: 'blue',
          justifyContent: 'space-around',
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
          height: 50,
          //   marginTop:5,
          justifyContent: 'center',
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
        style={{flexGrow: 0.4,height:120,}}
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
          height: 50,
          marginTop: Platform.OS === 'ios' ? -10 : 10,
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
          marginTop: Platform.OS === 'ios' ? -10 : 0,
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
        style={{flexGrow: 1,height:140,}}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              width: '98%',
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
              <Image source={item.image} style={{height: 30, width: 30}} />
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
          height:120,
        }}>
        <CustomButton
          onPress={() => {
            navigation.navigate('AppStack', {screen: 'CardDetail'});
          }}
          style={{marginTop: Platform.OS === 'ios' ? 5 : 20,}}
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
