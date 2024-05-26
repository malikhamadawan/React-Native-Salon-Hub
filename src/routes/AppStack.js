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

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <Stack.Navigator
        initialRouteName="BottomTab"
        screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="BottomTab" component={BottomTab} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="BookNow" component={BookNow} />
        <Stack.Screen name="BookingDetail" component={BookingDetail} />
        <Stack.Screen name="CardDetail" component={CardDetail} />
        <Stack.Screen name="PayNow" component={PayNow} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
      </Stack.Navigator>
    </>
  );
}

export default AppStack;
