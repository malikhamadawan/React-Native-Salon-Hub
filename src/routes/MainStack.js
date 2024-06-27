import * as React from 'react';
import {StatusBar} from 'react-native';

/** screen */
import AppStack from './AppStack';
import AuthStack from './AuthStack';

/** library */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/** constant */
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AppStack"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="AppStack" component={AppStack} />
          <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default MainStack;
