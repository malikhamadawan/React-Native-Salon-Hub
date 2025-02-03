/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  Platform,
} from 'react-native';

const AutoScrollFlatList = ({newData2}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % newData2.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [newData2]);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  }, [currentIndex]);

  const flatListRef = React.useRef();

  return (
    <FlatList
      ref={flatListRef}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={newData2}
      contentContainerStyle={{
        // marginHorizontal: 10,
        // paddingHorizontal: 3,
        marginTop: 15,
      }}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => (
        <TouchableOpacity
          style={{
            marginBottom: 10,
            marginHorizontal: 5,
            ...Platform.select({
              ios: {
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.5,
                shadowRadius: 8,
                shadowColor: 'black',
              },
              android: {
                elevation: 10,
              },
            }),
          }}>
          <ImageBackground
            source={item.image}
            imageStyle={{borderRadius: 15}}
            style={{
              height: 180,
              width: 350,
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: 83,
                height: 20,
                marginTop: 9,
                marginLeft: 9,
                borderRadius: 9,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#BBE4FB',
              }}>
              <Text
                style={{
                  fontSize: 11,
                  color: '#0D1230',
                }}>
                {item.time}
              </Text>
            </View>
            <View
              style={{
                marginTop: 20,
                marginLeft: 10,
              }}>
              <Text
                style={{
                  fontSize: 19,
                  color: '#FAFAFA',
                }}>
                Get Special Discount
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 50,
                  marginTop: 3,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#FAFAFA',
                  }}>
                  Up to
                </Text>
              </View>
              <View
                style={{
                  marginTop: 7,
                }}>
                <Text
                  style={{
                    fontSize: 28,
                    color: '#FAFAFA',
                  }}>
                  {item.discount}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: 70,
                height: 28,
                marginTop: 25,
                marginRight: 15,
                borderRadius: 5,
                alignItems: 'center',
                alignSelf: 'flex-end',
                justifyContent: 'center',
                backgroundColor: '#2158FF',
              }}>
              <Text
                style={{
                  fontSize: 13,
                  color: '#FAFAFA',
                }}>
                Claim
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </TouchableOpacity>
      )}
    />
  );
};

export {AutoScrollFlatList};
