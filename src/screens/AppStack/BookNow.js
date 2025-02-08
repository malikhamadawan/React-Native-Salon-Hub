/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import moment from 'moment';
import CustomButton from '../../components/customButton';
import {ProfileCard} from '../../components/profileCard';
import {useIsFocused} from '@react-navigation/native';
import MainImageBackground from '../../components/MainImageBackground/MainImageBackground';
import PersistentBackgroundAnimation from '../../components/PersistentBackgroundAnimation/PersistentBackgroundAnimation';

const BookNow = ({navigation}) => {
  const [internalDate, setInternalDate] = useState(new Date());
  const [allDatesInMonth, setAllDatesInMonth] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const timeSlots = Array.from({length: 48}, (_, i) =>
    moment('00:00', 'HH:mm')
      .add(i * 30, 'minutes')
      .format('HH:mm'),
  );
  const isFocus = useIsFocused();

  useEffect(() => {
    if (isFocus) {
      const currentDate = new Date();
      const generateNext30Days = startDate => {
        return Array.from({length: 31}, (_, i) => {
          const date = new Date(startDate);
          date.setDate(startDate.getDate() + i);
          return date;
        });
      };

      const datesForNext30Days = generateNext30Days(currentDate);
      setAllDatesInMonth(datesForNext30Days);
    }
  }, [isFocus]);

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      navigation.navigate('AppStack', {
        screen: 'BookingDetail',
        params: {
          selectedDate: selectedDate.toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'long',
          }),
          selectedTime: selectedTime,
        },
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      {/* Persistent background animation */}
      <PersistentBackgroundAnimation />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AppStack', {screen: 'Shop'})}>
          <Image
            source={require('../../assets/arrowicon2.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <ProfileCard
          showButton
          text1={`Usman\n`}
          text2="Barber"
          profileImg1={require('../../assets/profile2.jpeg')}
          marginTop={5}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Customers</Text>
          <Text style={styles.infoText}>Experience</Text>
          <Text style={styles.infoText}>Ratings</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statText}>150+</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statText}>3 years</Text>
          </View>
          <View style={styles.statCard}>
            <Image
              source={require('../../assets/starIcon.png')}
              style={styles.starIcon}
            />
            <Text style={styles.statText}>4.7</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Schedule</Text>
        <View style={styles.dateContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={allDatesInMonth}
            horizontal
            renderItem={({item}) => (
              <TouchableOpacity
                key={item.toString()}
                onPress={() =>
                  setSelectedDate(selectedDate === item ? null : item)
                }
                style={[
                  styles.dateCard,
                  {
                    backgroundColor:
                      selectedDate === item ? '#C62300' : '#F14A00',
                  },
                ]}>
                <Text style={[styles.dateText, {color: 'white'}]}>
                  {
                    item
                      .toLocaleDateString('en-US', {
                        day: '2-digit',
                        month: 'long',
                      })
                      .split(' ')[1]
                  }
                </Text>
                <Text style={[styles.dateTextSmall, {color: 'white'}]}>
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
        <Text style={styles.sectionTitle}>Time</Text>
        <View style={styles.timeContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={timeSlots}
            horizontal
            renderItem={({item}) => (
              <TouchableOpacity
                key={item}
                onPress={() =>
                  setSelectedTime(selectedTime === item ? null : item)
                }
                style={[
                  styles.timeCard,
                  {
                    backgroundColor:
                      selectedTime === item ? '#C62300' : '#F14A00',
                  },
                ]}>
                <Text style={[styles.timeText, {color: 'white'}]}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={() => navigation.navigate('AppStack', {screen: 'Shop'})}
            width={159}
            text="Back"
            btnColor="white"
            justi="center"
            txtColor="black"
          />
          <CustomButton
            onPress={handleBooking}
            disabled={!selectedDate || !selectedTime}
            width={159}
            text="Next"
            btnColor={!selectedDate || !selectedTime ? '#D3D3D3' : '#C62300'}
            justi="center"
            txtColor="white"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 40 : 40,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 5,
    // backgroundColor: 'red',
  },
  backIcon: {
    width: 30,
    height: 30,
    marginRight: '92%',
  },
  infoContainer: {
    height: '4%',
    width: '95%',
    marginVertical: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 10,
  },
  infoText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  statsContainer: {
    height: '8%',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statCard: {
    backgroundColor: 'white',
    width: '30%',
    height: '90%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowOffset: {width: 2, height: 4}, // Shadow offset outside
        shadowOpacity: 0.5, // Slightly transparent shadow
        shadowRadius: 8, // Blurred shadow effect
        shadowColor: 'black',
      },
      android: {
        elevation: 10, // Shadow with elevation on Android, giving it an "outside" effect
      },
    }),
    // flexDirection: 'row',
  },
  statText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#C62300',
  },
  starIcon: {
    height: 18,
    width: 18,
    tintColor: '#C62300',
  },
  sectionTitle: {
    width: '95%',
    fontSize: 23,
    color: 'black',
    fontWeight: '600',
    marginVertical: 20,
  },
  dateContainer: {
    height: '12%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgrounddColor: 'red',
    alignContent: 'center',
    alignSelf: 'center',
  },
  dateCard: {
    height: '80%',
    marginTop: 10,
    width: 78,
    borderRadius: 15,
    marginHorizontal: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    ...Platform.select({
      ios: {
        shadowOffset: {width: 1, height: 1}, // Shadow offset outside
        shadowOpacity: 0.5, // Slightly transparent shadow
        shadowRadius: 6, // Blurred shadow effect
        shadowColor: 'black',
      },
      android: {
        elevation: 10, // Shadow with elevation on Android, giving it an "outside" effect
      },
    }),
  },
  dateText: {
    fontSize: 19,
  },
  dateTextSmall: {
    fontSize: 13,
  },
  timeContainer: {
    height: '12%',
    width: '100%',
    justifyContent: 'center',
  },
  timeCard: {
    height: '80%',
    marginTop: 10,
    width: 78,
    borderRadius: 15,
    marginHorizontal: 7,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowOffset: {width: 1, height: 1}, // Shadow offset outside
        shadowOpacity: 0.5, // Slightly transparent shadow
        shadowRadius: 6, // Blurred shadow effect
        shadowColor: 'black',
      },
      android: {
        elevation: 10, // Shadow with elevation on Android, giving it an "outside" effect
      },
    }),
  },
  timeText: {
    fontSize: 17,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: '12%',
    justifyContent: 'space-evenly',
    width: '95%',
  },
});

export default BookNow;
