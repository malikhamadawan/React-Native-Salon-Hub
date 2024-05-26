import {
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import CustomButton from '../../components/customButton';
import {ProfileCard} from '../../components/profileCard';

const BookNow = ({navigation}) => {
  const [internalDate, setInternalDate] = useState(new Date());
  const [allDatesInMonth, setAllDatesInMonth] = useState([]);
  const [allTimesInMonth, setAllTimesInMonth] = useState([]);

  function getHalfHourTimeSlots() {
    const timeFormat = 'HH:mm';
    const currentTime = moment('00:00', timeFormat);
    const endTime = moment('23:59', timeFormat);
    const timeSlots = [];

    while (currentTime.isSameOrBefore(endTime)) {
      timeSlots.push(currentTime.format(timeFormat));
      currentTime.add(30, 'minutes');
    }

    return timeSlots;
  }
  const timeSlots = getHalfHourTimeSlots();

  useEffect(() => {
    const currentMonth = internalDate.getMonth();
    const currentYear = internalDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const datesArray = Array.from(
      {length: daysInMonth},
      (_, index) => new Date(currentYear, currentMonth, index + 1),
    );

    const currentDate = new Date();
    if (currentDate >= internalDate) {
      datesArray.unshift(currentDate);
    }

    const filteredDates = datesArray.filter(date => date >= new Date());
    setAllDatesInMonth(filteredDates);
  }, [internalDate]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState([]);
  const toggleTimeSelection = time => {
    setSelectedTime(prevSelectedTimes => {
      if (prevSelectedTimes?.includes(time)) {
        return prevSelectedTimes?.filter(selectedTime => selectedTime !== time);
      } else {
        return [...prevSelectedTimes, time];
      }
    });
  };

  const toggleDateSelection = time => {
    setSelectedDate(prevSelectedTime => {
      if (prevSelectedTime === time) {
        return null;
      } else {
        return time;
      }
    });
  };
  const handleBooking = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    navigation.navigate('AppStack', {screen: 'BookingDetail'});
  };

  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 50 : 50,
        flex: 1,
        alignItems: 'center',
        paddingHorizontal:5,
      }}>
      <ProfileCard
        showButton={true}
        text1={'Usman\n'}
        text2={'Barber'}
        profileImg1={require('../../assets/profile2.jpeg')}
      />
      <View
        style={{
          // backgroundColor: 'red',
          height: '4%',
          width: '95%',
          marginVertical: '6%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 20,
          paddingLeft: 10,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: '500',
            marginLeft: 5,
          }}>
          Customers
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: '500',
            marginRight: 15,
          }}>
          Experience
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: '500',
            marginRight: 10,
          }}>
          Ratings
        </Text>
      </View>
      <View
        style={{
          height: '8%',
          width: '95%',
          // backgroundColor: 'black',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '30%',
            height: '90%',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#2158FF',
            }}>
            150+
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '30%',
            height: '90%',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#2158FF',
            }}>
            3 years
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '30%',
            height: '90%',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/starIcon.png')}
            style={{
              height: 18,
              width: 18,
              marginRight: 5,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#2158FF',
            }}>
            4.7
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '95%',
          marginVertical: '5%',
        }}>
        <Text
          style={{
            fontSize: 23,
            color: 'black',
            fontWeight: '600',
          }}>
          Schedule
        </Text>
      </View>
      <View
        style={{
          // backgroundColor: 'black',
          height: '10%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={allDatesInMonth}
          horizontal={true}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.toString()}
              onPress={() => {
                toggleDateSelection(item);
              }}
              style={{
                height: '90%',
                width: 78,
                backgroundColor: selectedDate === item ? '#2158FF' : '#BBE4FB',
                borderRadius: 15,
                marginHorizontal: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 19,
                  color: 'black',
                }}>
                {
                  item
                    .toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: 'long',
                    })
                    .split(' ')[1]
                }
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: 'black',
                }}>
                {
                  item
                    .toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: 'long',
                    })
                    .split(' ')[0]
                }
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{
          width: '95%',
          // backgroundColor: 'orange',
          height: 30,
          marginVertical: 20,
        }}>
        <Text
          style={{
            fontSize: 23,
            color: 'black',
            fontWeight: '600',
          }}>
          Time
        </Text>
      </View>
      <View
        style={{
          height: 80,
          width: '100%',
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={timeSlots}
          horizontal={true}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.toString()}
              onPress={() => {
                toggleTimeSelection(item);
              }}
              style={{
                height: '90%',
                width: 78,
                backgroundColor: selectedTime?.includes(item)
                  ? '#2158FF'
                  : '#BBE4FB',
                borderRadius: 15,
                marginHorizontal: 7,
                justifyContent: 'center',
                alignItems: 'center',
                // width: '50%',
              }}>
              <Text
                style={{
                  fontSize: 17,
                  color: 'black',
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          // backgroundColor:'black',
          marginVertical: '15%',
          justifyContent: 'space-evenly',
          width: '95%',
        }}>
        <CustomButton
          width={159}
          text={'Back'}
          btnColor={'white'}
          justi={'center'}
          txtColor={'black'}
        />
        <CustomButton
          onPress={handleBooking}
          disabled={selectedDate === null || selectedTime?.length === 0}
          width={159}
          text={'Next'}
          btnColor={
            selectedDate === null || selectedTime?.length === 0
              ? '#BBE4FB'
              : '#2158FF'
          }
          justi={'center'}
          txtColor={'white'}
        />
      </View>
    </View>
  );
};

export default BookNow;
