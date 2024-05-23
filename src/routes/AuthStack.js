import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from '../screens/AuthStack/Start';
import SignUp from '../screens/AuthStack/SignUp';
import LogIn from '../screens/AuthStack/LogIn';
import { StatusBar } from 'react-native';

// import OnboardingScreen from '../screens/AuthStack/OnboardingScreen';

const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    <>
    {/* <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/> */}
    <Stack.Navigator
      InitialRouteName="Signup"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="LogIn" component={LogIn} />
      {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> */}
    </Stack.Navigator>
    </>
  );
}

export default AuthStack;
