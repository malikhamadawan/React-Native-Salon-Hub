import {View, Text, TouchableOpacity, Platform, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileHeader = ({onPress, navigation}) => {
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null); // State for image

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userInfo');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
        }

        // Fetch profile image from AsyncStorage
        const savedImage = await AsyncStorage.getItem('profileImage');
        if (savedImage) {
          setProfileImage(savedImage); // Update state with saved image URI
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); // Runs once when component mounts

  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        marginTop: Platform.OS === 'ios' ? '12%' : '8%',
        marginBottom: 12,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', width: '60%'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={
              profileImage
                ? {uri: profileImage} // Show saved image
                : require('../../assets/umair1.jpg') // Default image if none saved
            }
            style={{
              height: 60,
              width: 60,
              marginTop: 5,
              borderRadius: 100,
            }}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '600',
              color: 'black',
              marginLeft: 10,
            }}>
            Hi, {user?.username ? user?.username : 'Umair'}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: 45,
          width: 45,
          backgroundColor: 'white',
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          tintColor={'#C62300'}
          source={require('../../assets/bellIcon1.png')}
          style={{height: 23, width: 23}}
        />
      </TouchableOpacity>
    </View>
  );
};

export {ProfileHeader};
