import React, {useRef, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '../screens/AppStack/Explore';
import Home from '../screens/AppStack/Home';
import {
  Button,
  Image,
  Modal,
  Settings,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Schedule from '../screens/AppStack/Schedule';
import Settiing from '../screens/AppStack/Setting';
import {RNCamera} from 'react-native-camera';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const cameraRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
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
          component={Explore}
          options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text
                style={{
                  color: focused ? 'red' : color,
                  marginBottom: 8,
                }}></Text>
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
            tabBarButton: props => (
              <TouchableOpacity
                {...props}
                onPress={() => {
                  setModalVisible(true);
                }}></TouchableOpacity>
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

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
        animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>QR Modal Content</Text>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <RNCamera
                ref={cameraRef}
                style={styles.camera}
                onBarCodeRead={barcode => {}}
                captureAudio={false}
              />
            </View>
            <Button
              title="Close"
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  camera: {
    flex: 0.67,
    width: '90%',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: 'red',
  },
});
export default BottomTab;
