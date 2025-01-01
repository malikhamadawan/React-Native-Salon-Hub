/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  PermissionsAndroid,
} from 'react-native';
import {CustomView} from '../../components/mainContainer';
import ScheduleCard from '../../components/scheduleCard';
import {Input} from '../../components/input';

const Schedule = ({navigation}) => {
  const [showInput, setShowInput] = useState(false);
  const [button, setButton] = useState('upComing');

  const toggleInput = () => {
    setShowInput(!showInput);
  };
  useEffect(() => {
    requestCallPermission();
  }, []);

  const requestCallPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CALL_PHONE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Phone call permission granted');
      } else {
        console.log('Phone call permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Call the function before attempting to make the call

  const data = [
    {
      id: 0,
      title: 'Nadeem Saloon',
      name: 'Nadeem',
      profileImage: require('../../assets/profile1.png'),
      date: 'Monday,26 May',
      startTime: '10:00',
      endTime: '10:30',
      phoneNo: '+923000000000',
    },
    {
      id: 1,
      title: 'Mr Cutts',
      name: 'Usman',
      profileImage: require('../../assets/profile2.jpeg'),
      date: 'Tuesday,26 June',
      startTime: '09:00',
      endTime: '10:00',
      phoneNo: '+923000000001',
    },
    {
      id: 2,
      title: 'DownTown Hair Saloon',
      name: 'Nouman Khalid',
      profileImage: require('../../assets/profile3.jpeg'),
      date: 'Saturday,16 Feb',
      startTime: '12:00',
      endTime: '13:00',
      phoneNo: '+923000000002',
    },
    {
      id: 3,
      title: 'Master Cuts',
      name: 'Asad',
      profileImage: require('../../assets/profile4.jpeg'),
      date: 'Sunday,21 Nov',
      startTime: '20:00',
      endTime: '21:00',
      phoneNo: '+923000000003',
    },
    {
      id: 4,
      title: 'Vicky Hair Saloon',
      name: 'Vicky',
      profileImage: require('../../assets/profile5.jpg'),
      date: 'Wednesday,19 March',
      startTime: '22:00',
      endTime: '23:00',
      phoneNo: '+923000000004',
    },
  ];

  return (
    <CustomView marginTop={'10%'}>
      <View
        style={{
          alignItems: 'center',
          // backgroundColor: '#FFFF',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 28,
              color: '#0D1230',
              fontWeight: '600',
            }}>
            Schedule
          </Text>
          <TouchableOpacity onPress={toggleInput}>
            <Image
              source={require('../../assets/searchIcon2.png')}
              style={{
                height: 24,
                width: 24,
              }}
            />
          </TouchableOpacity>
        </View>
        {showInput && (
          <Input
            img={require('../../assets/searchIcon2.png')}
            img2={require('../../assets/icons5.png')}
            password={false}
            justifyContent={'space-between'}
          />
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: '#fff',
          // width: '100%'
        }}>
        <TouchableOpacity
          onPress={() => {
            setButton('upComing');
          }}
          style={{
            width: '30%',
            // backgroundColor: button === 'upComing' ? "#2158FF":"#fff",
            // borderRadius: 20,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: button === 'upComing' ? 5 : 0,
            borderColor: '#2158FF',
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '500',
              color: 'black',
            }}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setButton('history');
          }}
          style={{
            width: '30%',
            // backgroundColor: '#fff',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#2158FF',
            borderBottomWidth: button === 'history' ? 5 : 0,
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '500',
              color: 'black',
            }}>
            History
          </Text>
        </TouchableOpacity>
      </View>
      {button === 'upComing' ? (
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
          }}
          renderItem={({item}) => {
            console.log(item.phoneNo);
            return (
              <ScheduleCard
                name={item.name}
                title={item.title}
                date={item.date}
                startTime={item.startTime}
                endTime={item.endTime}
                profileImage={item.profileImage}
                phoneNo={item.phoneNo}
                showBtn={true}
              />
            );
          }}
          data={data}
        />
      ) : (
        <FlatList
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
                phoneNo={item.phoneNo} // Pass phone number
                showBtn={false}
              />
            );
          }}
          data={data}
        />
      )}
    </CustomView>
  );
};

export default Schedule;
