import * as React from 'react';

import Home from '../screens/AppStack/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Shop from '../screens/AppStack/Shop';
import BookNow from '../screens/AppStack/BookNow';
import BookingDetail from '../screens/AppStack/BookingDetail';
import CardDetail from '../screens/AppStack/CardDetail';
import PayNow from '../screens/AppStack/PayNow';
import CheckOut from '../screens/AppStack/CheckOut';
import Bonus from '../screens/AppStack/Bonus';
import Notifications from '../screens/AppStack/Notifications';
import Animation from '../screens/AppStack/Animation';
import Test from '../screens/AppStack/Test';
import Profile from '../screens/AppStack/Profile';
import Appointments from '../screens/AppStack/Appointments';
import StoryScreen from '../screens/AppStack/StoryScreen';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <Stack.Navigator
        initialRouteName="BottomTab"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bonus" component={Bonus} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="BookNow" component={BookNow} />
        <Stack.Screen name="BookingDetail" component={BookingDetail} />
        <Stack.Screen name="CardDetail" component={CardDetail} />
        <Stack.Screen name="PayNow" component={PayNow} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Animation" component={Animation} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Appointments" component={Appointments} />
        <Stack.Screen name="StoryScreen" component={StoryScreen} />
      </Stack.Navigator>
    </>
  );
}

export default AppStack;
