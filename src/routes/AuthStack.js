import * as React from 'react';

/** screen */
import Start from '../screens/AuthStack/Start';
import LogIn from '../screens/AuthStack/LogIn';
import SignUp from '../screens/AuthStack/SignUp';

/** library */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/** constant */
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      InitialRouteName="Start"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default AuthStack;
