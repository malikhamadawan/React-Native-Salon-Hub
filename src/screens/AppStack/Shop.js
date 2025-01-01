/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import ImageBackground from '../../components/imageBackground';
import Review from '../../components/review';
import Services from '../../components/services';
import Info from '../../components/info';
import CustomButton from '../../components/customButton';
const Shop = ({navigation}) => {
  const [button, setButton] = useState('services');
  const [selectedItems, setSelectedItems] = useState([]);

  const data = [
    {
      id: 0,
      title: "Men's Haircut",
      price: '500 Rs',
      details: 'All prices include taxes\nSkin fade add 150 Rs',
      time: '30 minutes',
    },
    {
      id: 1,
      title: 'Youth Cut',
      price: '400 Rs',
      details: 'Between 13 to 17 years of age\nSkin fade add 150 Rs',
      time: '30 minutes',
    },
    {
      id: 2,
      title: 'Children Cut',
      price: '350 Rs',
      details: '12 years and younger',
      time: '20 minutes',
    },
    {
      id: 3,
      title: "Senior's Cut",
      price: '400 Rs',
      details: '65 years and older',
      time: '30 minutes',
    },
    {
      id: 4,
      title: 'Buzz Cut',
      price: '400 Rs',
      details: 'Skin fade add 150 Rs',
      time: '20 minutes',
    },
    {
      id: 5,
      title: 'Buzz Cut & Beard Trim',
      price: '700 Rs',
      details: 'All prices include taxes\nSkin fade add 150 Rs',
      time: '35 minutes',
    },
    {
      id: 6,
      title: 'Haircut & Beard Trim',
      price: '1000 Rs',
      details: 'All prices include taxes\nSkin fade add 150 Rs',
      time: '45 minutes',
    },
  ];
  const newData = [
    {id: 0, openTime: '10:00 AM', closeTime: '12:00 AM', day: 'Monday'},
    {id: 1, openTime: '10:00 AM', closeTime: '12:00 AM', day: 'Tuesday'},
    {id: 2, openTime: '10:00 AM', closeTime: '12:00 AM', day: 'Wednesday'},
    {id: 3, openTime: '10:00 AM', closeTime: '12:00 AM', day: 'Thursday'},
    {id: 4, openTime: '10:00 AM', closeTime: '12:00 AM', day: 'Friday'},
    {id: 5, openTime: '10:00 AM', closeTime: '12:00 AM', day: 'Saturday'},
    {id: 6, openTime: '10:00 AM', closeTime: '12:00 AM', day: 'Sunday'},
  ];
  const review = [
    {
      id: 0,
      profileName: 'Sid Da Silva',
      profileSymbol: 'S',
      stars: require('../../assets/starIcon.png'),
      comment: 'Very good always a great cut',
    },
    {
      id: 1,
      profileName: 'Ash Kurd',
      profileSymbol: 'A',
      stars: require('../../assets/starIcon.png'),
      comment: 'Best Experience',
    },
    {
      id: 2,
      profileName: 'George Lovell',
      profileSymbol: 'G',
      stars: require('../../assets/starIcon.png'),
      comment: 'I like it very.',
    },
    {
      id: 3,
      profileName: 'Alessandro Anzaldi',
      profileSymbol: 'A',
      stars: require('../../assets/starIcon.png'),
      comment: 'Excellent service',
    },
    {
      id: 4,
      profileName: 'Patrick Quelhas',
      profileSymbol: 'P',
      stars: require('../../assets/starIcon.png'),
      comment: 'Best Haircut i will come again',
    },
    {
      id: 5,
      profileName: 'Michael Cardoso',
      profileSymbol: 'M',
      stars: require('../../assets/starIcon.png'),
      comment: 'Proffesional haircut',
    },
    {
      id: 6,
      profileName: 'Luca Fathollazadeh',
      profileSymbol: 'S',
      stars: require('../../assets/starIcon.png'),
      comment: 'Gorgeous,Brilliant services',
    },
  ];

  const handleSelect = item => {
    const itemId = item.id;
    setSelectedItems(prevSelectedItems => {
      if (prevSelectedItems.some(selectedItem => selectedItem.id === itemId)) {
        // If the item is already selected, remove it from the selectedItems array
        return prevSelectedItems.filter(
          selectedItem => selectedItem.id !== itemId,
        );
      } else {
        // If the item is not selected, add it to the selectedItems array
        return [...prevSelectedItems, item];
      }
    });
  };

  console.log('selected', selectedItems);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <ImageBackground
        onPress={() => {
          setButton('services');
        }}
        onPressServices={() => {
          setButton('info');
        }}
        onPressReview={() => {
          setButton('review');
        }}
        info={button}
        onPressArrow={() => {
          navigation.goBack();
        }}
      />

      {button === 'services' ? (
        <View
          style={{
            width: '95%',
            flex: 1,
            borderRadius: 10,
            marginTop: 5,
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => {
              const isSelected = selectedItems.some(
                selectedItem => selectedItem.id === item.id,
              );
              return (
                <Services
                  onPress={() => handleSelect(item)}
                  time={item.time}
                  price={item.price}
                  title={item.title}
                  details={item.details}
                  isSelected={isSelected}
                />
              );
            }}
          />
        </View>
      ) : button === 'info' ? (
        <View
          style={{
            width: '95%',
            borderRadius: 10,
            backgroundColor: '#fff',
            marginTop: 5,
            height: '56%',
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <View
            style={{
              marginTop: 5,
            }}>
            <Text
              style={{
                fontSize: 22,
                color: 'black',
                fontWeight: '700',
              }}>
              ADDRESS & HOURS
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: 'black',
              }}>
              Mr Cutts
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '300',
                color: 'black',
              }}>
              Block F,PIA Housing Scheme,{'\n'}Lahore,Punjab
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              marginTop: 10,
            }}>
            <FlatList
              data={newData}
              renderItem={({item}) => {
                return (
                  <Info
                    day={item.day}
                    openTime={item.openTime}
                    closeTime={item.closeTime}
                  />
                );
              }}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: '700',
                }}>
                REVIEWS
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: '700',
                }}>
                ADD REVIEW
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
            }}
            style={{
              flex: 1,
            }}
            data={review}
            renderItem={({item}) => {
              return (
                <Review
                  stars={item.stars}
                  comment={item.comment}
                  profileName={item.profileName}
                  profileSymbol={item.profileSymbol}
                />
              );
            }}
          />
        </View>
      )}
      <View
        style={{
          width: '100%',
          marginBottom: '8%',
        }}>
        <CustomButton
          onPress={() => {
            navigation.navigate('AppStack', {screen: 'BookNow'});
          }}
          width={'95%'}
          btnColor={'#2158FF'}
          text={'Book Now'}
          txtColor={'white'}
          justi={'center'}
          fontSize={20}
          fontWeight={'500'}
        />
      </View>
    </View>
  );
};

export default Shop;
