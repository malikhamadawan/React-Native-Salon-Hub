import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/** screens */
import Start from '../screens/AuthStack/Start';
import LogIn from '../screens/AuthStack/LogIn';
import SignUp from '../screens/AuthStack/SignUp';
import NumberVerification from '../screens/AuthStack/NumberVerification';

/** library */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/** constant */
const Stack = createNativeStackNavigator();

function AuthStack() {
  const [isFirstTime, setIsFirstTime] = useState(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const firstLaunch = await AsyncStorage.getItem('hasLaunched');
      if (firstLaunch === null) {
        // This is the first time the app is opened
        setIsFirstTime(true);
        await AsyncStorage.setItem('hasLaunched', 'true');
      } else {
        // App has been opened before
        setIsFirstTime(false);
      }
    };

    checkFirstLaunch();
  }, []);

  if (isFirstTime === null) {
    return null; // Or a loading spinner while determining the first launch
  }

  return (
    <Stack.Navigator
      initialRouteName={isFirstTime ? 'Start' : 'LogIn'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="NumberVerification" component={NumberVerification} />
    </Stack.Navigator>
  );
}

export default AuthStack;
