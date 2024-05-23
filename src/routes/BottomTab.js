import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '../screens/AppStack/Explore';
import Home from '../screens/AppStack/Home';
import {Image, Settings, Text} from 'react-native';
import Schedule from '../screens/AppStack/Schedule';
import Settiing from '../screens/AppStack/Setting';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NewScreen from '../screens/AppStack/NewScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2158FF',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/homeIcon.png')}
              resizeMode={'contain'}
              style={{
                width: 25,
                height: 25,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/exploreIcon.png')}
              resizeMode={'contain'}
              style={{
                width: 25,
                height: 25,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="QR"
        component={NewScreen}
        options={{
          tabBarLabel: ({focused, color, size}) => (
            <Text
              style={{color: focused ? 'red' : color, marginBottom: 8}}></Text>
          ),
          tabBarIcon: ({focused, color}) => (
            <Image
              source={require('../assets/qrcode.png')}
              resizeMode={'contain'}
              style={{
                width: 80,
                height: 80,
                marginTop: -17,
                backgroundColor: '#2158FF',
                borderRadius: 50,
                borderWidth: 2,
                borderColor: 'blue',
                tintColor: 'white',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/scheduleIcon.png')}
              resizeMode={'contain'}
              style={{
                width: 25,
                height: 25,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Settiing}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/setting11.png')}
              resizeMode={'contain'}
              style={{
                width: 25,
                height: 25,
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
