import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import CustomButton from '../../components/customButton';
import {ProfileCard} from '../../components/profileCard';
import {useIsFocused} from '@react-navigation/native';

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
      const currentYear = internalDate.getFullYear();
      const currentMonth = internalDate.getMonth();
      const currentDateOnly = new Date(
        currentYear,
        currentMonth,
        internalDate.getDate(),
      );

      const generateDates = (year, month) => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        return Array.from(
          {length: daysInMonth},
          (_, i) => new Date(year, month, i + 1),
        );
      };

      const thisMonthDates = generateDates(currentYear, currentMonth);
      const nextMonthDates = generateDates(
        currentYear + (currentMonth + 1 === 12 ? 1 : 0),
        (currentMonth + 1) % 12,
      );

      setAllDatesInMonth(
        [...thisMonthDates, ...nextMonthDates].filter(
          date => date >= currentDateOnly,
        ),
      );
    }
  }, [internalDate, isFocus]);

  const handleBooking = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    navigation.navigate('AppStack', {screen: 'BookingDetail'});
  };

  return (
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
                    selectedDate === item ? '#2158FF' : '#BBE4FB',
                },
              ]}>
              <Text
                style={[
                  styles.dateText,
                  {color: selectedDate === item ? 'white' : 'black'},
                ]}>
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
                style={[
                  styles.dateTextSmall,
                  {color: selectedDate === item ? 'white' : 'black'},
                ]}>
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
                    selectedTime === item ? '#2158FF' : '#BBE4FB',
                },
              ]}>
              <Text
                style={[
                  styles.timeText,
                  {color: selectedTime === item ? 'white' : 'black'},
                ]}>
                {item}
              </Text>
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
          btnColor={!selectedDate || !selectedTime ? '#BBE4FB' : '#2158FF'}
          justi="center"
          txtColor="white"
        />
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
  },
  backIcon: {
    width: 24,
    height: 24,
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
  },
  statText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2158FF',
  },
  starIcon: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
  sectionTitle: {
    width: '95%',
    fontSize: 23,
    color: 'black',
    fontWeight: '600',
    marginVertical: 20,
  },
  dateContainer: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateCard: {
    height: '90%',
    width: 78,
    borderRadius: 15,
    marginHorizontal: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 19,
  },
  dateTextSmall: {
    fontSize: 13,
  },
  timeContainer: {
    height: 80,
    width: '100%',
  },
  timeCard: {
    height: '90%',
    width: 78,
    borderRadius: 15,
    marginHorizontal: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 17,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: '15%',
    justifyContent: 'space-evenly',
    width: '95%',
  },
});

export default BookNow;
