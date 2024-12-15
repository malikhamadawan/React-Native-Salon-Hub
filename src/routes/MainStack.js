import * as React from 'react';
import {StatusBar, View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

/** screen */
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import SplashScreen from '../screens/SplashScreen';

/** constant */
const Stack = createNativeStackNavigator();

function MainStack() {
  const [initialRoute, setInitialRoute] = React.useState('Splash');
  const [isSplashVisible, setSplashVisible] = React.useState(true); // State to manage splash visibility

  React.useEffect(() => {
    const checkUserToken = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      console.log('userToken', userToken);
      if (userToken === null) {
        setInitialRoute('AuthStack');
      } else {
        setInitialRoute('AppStack');
      }
      setSplashVisible(false);
    };

    setTimeout(() => {
      checkUserToken();
    }, 2500);
  }, []);

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRoute}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="AppStack" component={AppStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default MainStack;
