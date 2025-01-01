/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import ScheduleCard from '../../components/scheduleCard/index';

const Appointments = ({navigation}) => {
  const data = [
    {
      id: 0,
      title: 'Nadeem Saloon',
      name: 'Nadeem',
      profileImage: require('../../assets/profile1.png'),
      date: 'Monday,26 May',
      startTime: '10:00',
      endTime: '10:30',
    },
    {
      id: 1,
      title: 'Mr Cutts',
      name: 'Usman',
      profileImage: require('../../assets/profile2.jpeg'),
      date: 'Tuesday,26 June',
      startTime: '09:00',
      endTime: '10:00',
    },
    {
      id: 2,
      title: 'DownTown Hair Saloon',
      name: 'Nouman Khalid',
      profileImage: require('../../assets/profile3.jpeg'),
      date: 'Saturday,16 Feb',
      startTime: '12:00',
      endTime: '13:00',
    },
    {
      id: 3,
      title: 'Master Cuts',
      name: 'Asad',
      profileImage: require('../../assets/profile4.jpeg'),
      date: 'Sunday,21 Nov',
      startTime: '20:00',
      endTime: '21:00',
    },
    {
      id: 4,
      title: 'Vicky Hair Saloon',
      name: 'Vicky',
      profileImage: require('../../assets/profile5.jpg'),
      date: 'Wednesday,19 March',
      startTime: '22:00',
      endTime: '23:00',
    },
  ];

  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 50 : 30,
        flex: 1,
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginLeft: 10,
        }}>
        <Image
          source={require('../../assets/arrowicon2.png')}
          style={{
            width: 24,
            height: 24,
            marginRight: '92%',
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: '#FFFF',
          height: 50,
          width: '100%',
          justifyContent: 'center',
          marginTop: 10,
          marginBottom: 15,
        }}>
        <Text
          style={{
            fontSize: 28,
            color: '#0D1230',
            fontWeight: '600',
            marginLeft: 20,
          }}>
          Appointments
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        renderItem={({item}) => {
          return (
            <ScheduleCard
              name={item.name}
              title={item.title}
              date={item.date}
              startTime={item.startTime}
              endTime={item.endTime}
              profileImage={item.profileImage}
              showBtn={true}
            />
          );
        }}
        data={data}
      />
    </View>
  );
};

export default Appointments;
