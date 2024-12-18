/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useRef, useState} from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';

/** camera library */
import {RNCamera} from 'react-native-camera';

/** screen */
import Home from '../screens/AppStack/Home';
import Explore from '../screens/AppStack/Explore';
import Settiing from '../screens/AppStack/Setting';
import Schedule from '../screens/AppStack/Schedule';
import CustomButton from '../components/customButton';

/** library */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';

/** constant */
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  /** ref */
  const cameraRef = useRef();
  const navigation = useNavigation();

  /** state */
  const [imei, setImei] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  /** async function */
  const barcodeScanned = async barcode => {
    if (!barcode || !barcode.data) {
      setLoading(false);
      setModalVisible(false);
      return;
    }
    let barcodeData;
    try {
      barcodeData = JSON.parse(barcode.data);
    } catch (error) {
      barcodeData = barcode.data;
    }
    setLoading(false);
    setModalVisible(false);
    setImei(barcodeData.toString());
    navigation.navigate('AppStack', {screen: 'Bonus'});
  };

  return (
    <Fragment>
      <Tab.Navigator
        initialRouteName="BottomTab"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2158FF',
          tabBarLabelStyle: {marginBottom: Platform.OS === 'ios' ? 0 : 6},
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
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarLabel: ({focused, color}) => (
              <Text
                style={{
                  color: focused ? 'red' : color,
                  marginBottom: 8,
                }}
              />
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
                onBarCodeRead={barcode => barcodeScanned(barcode)}
                captureAudio={false}
              />
            </View>
            <CustomButton
              title="Close"
              btnColor={'#2158FF'}
              width={150}
              marginBottom={50}
              text={'Close'}
              justi={'center'}
              txtColor={'white'}
              btnHeight={42}
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </View>
        {loading && <ActivityIndicator size={'large'} />}
      </Modal>
    </Fragment>
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
    borderRadius: 10,
    backgroundColor: 'white',
  },
  camera: {
    flex: 0.67,
    width: '90%',
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    backgroundColor: 'red',
  },
});
export default BottomTab;
