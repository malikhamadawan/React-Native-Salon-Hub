import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomButton from '../../components/customButton';
import {useNavigation} from '@react-navigation/native';

const index = ({
  showBtn = false,
  title,
  name,
  profileImage,
  date,
  endTime,
  startTime,
  onPress,
  id,
}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: showBtn ? 200 : 180,
        width: '98%',
        backgroundColor: '#fff',
        marginTop: 15,
        borderRadius: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        // shadowColor: '#808080',
        // shadowOpacity: 10,
        // shadowOffset: {
        //   width: 4,
        //   height: 5,
        // },
        // backgroundColor: 'blue',
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
          borderRadius: 12,
        }}>
        <View
          style={{
            height: '45%',
            width: '75%',
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <Image
            source={profileImage}
            style={{
              height: 80,
              width: 80,
              borderRadius: 80,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 19,
                fontWeight: '600',
                color: '#0D1230',
                marginTop: 7,
                marginLeft: 7,
              }}>
              {title}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#0D1230',
                marginLeft: 7,
                marginTop: 7,
              }}>
              {name}
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '300',
                color: '#737687',
                marginLeft: 7,
              }}>
              Barber
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            backgroundColor: '#BBE4FB',
            borderRadius: 7,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
            marginRight:10,          }}>
          <Image
            source={require('../../assets/phoneIcon1.png')}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          height: '25%',
          width: '95%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignSelf: 'center',
          alignItems: 'center',
          // marginTop: 7,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            width: '50%',
          }}>
          <Image
            source={require('../../assets/calendarIcon.png')}
            style={{
              height: 24,
              width: 24,
              marginLeft: 15,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              color: '#363A53',
              marginLeft: 10,
            }}>
            {date}
          </Text>
        </View>
        <Image
          source={require('../../assets/Icons7.png')}
          style={{
            height: 24,
            width: 2,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            width: '50%',
          }}>
          <Image
            source={require('../../assets/clockIcon.png')}
            style={{
              height: 24,
              width: 24,
              marginLeft: 25,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              color: '#363A53',
              marginLeft: 10,
            }}>
            {startTime} - {endTime}
          </Text>
        </View>
      </View>
      <View>
        {showBtn && (
          <Image
            source={require('../../assets/divider1.png')}
            style={{
              width: '100%',
            }}
          />
        )}

        {showBtn && (
          <View
            style={{
              // backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <CustomButton
              btnColor={'#fff'}
              borderWidth={1}
              borderColor={'#737687'}
              width={130}
              text={'Cancel'}
              justi={'center'}
              fontWeight={'500'}
              txtColor={'#737687'}
              btnHeight={35}
            />
            <CustomButton
              onPress={() => {
                navigation.navigate('AppStack', {screen: 'Shop'});
              }}
              imgPath={require('../../assets/editIcon.png')}
              btnColor={'#2158FF'}
              width={130}
              text={'Edit'}
              justi={'center'}
              fontWeight={'500'}
              txtColor={'#fff'}
              btnHeight={35}
              showImage={true}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default index;
