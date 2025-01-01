/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Input} from '../../components/input';
import CustomButton from '../../components/customButton';
import {ProfileCard} from '../../components/profileCard';

const CardDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AppStack', {screen: 'BookingDetail'})
        }
        style={{
          marginLeft: 5,
        }}>
        <Image
          source={require('../../assets/arrowicon2.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <View
        style={{
          width: '95%',
          alignSelf: 'center',
        }}>
        <ProfileCard
          showButton={false}
          text1={'Mr Cuts Hair\nSaloon'}
          text2="Block F,PIA Housing Scheme,Lahore"
          profileImg1={require('../../assets/mrCuts.jpeg')}
        />
      </View>
      <View style={styles.inputLabelContainer}>
        <Text style={styles.inputLabelText}>Card Holder Name</Text>
      </View>
      <Input width="100%" placeholder="Enter holder name" />
      <View style={styles.inputLabelContainer}>
        <Text style={styles.inputLabelText}>Card Number</Text>
      </View>
      <Input
        width="100%"
        img={require('../../assets/paymentmethodicon.png')}
        imgBorderRadius={6}
        imgWidth={40}
        leftIcon
        placeholder="XXXX-XXXX-XXXX-XXXX"
      />
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.inputLabelText}>Expiry Date</Text>
        </View>
        <View style={[styles.column, styles.cvvColumn]}>
          <Text style={styles.inputLabelText}>CVV</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column1}>
          <Input width="100%" placeholder="XX/XX" />
        </View>
        <View style={styles.cvvInput}>
          <Input width="100%" placeholder="Xxx" />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() =>
            navigation.navigate('AppStack', {screen: 'BookingDetail'})
          }
          btnColor="white"
          width={150}
          borderColor="black"
          borderWidth
          justi="center"
          text="Back"
          btnHeight={42}
          txtColor="black"
        />
        <CustomButton
          onPress={() => navigation.navigate('AppStack', {screen: 'PayNow'})}
          btnColor="#2158FF"
          width={150}
          text="Pay Now"
          justi="center"
          txtColor="white"
          btnHeight={42}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 50 : 40,
    flex: 1,
    // backgroundColor: 'red',
    // paddingHorizontal: 5,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: '92%',
  },
  inputLabelContainer: {
    height: 40,
    justifyContent: 'center',
    // marginTop: Platform.OS === 'ios' ? 42 : 62,
  },
  inputLabelText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
    marginLeft: 7,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 5,
  },
  column: {
    width: '50%',
    // marginBottom: 5,
    // backgroundColor: 'orange',
  },
  column1: {
    width: '50%',
    marginTop: 5,
    // backgroundColor: 'orange',
  },
  cvvColumn: {
    marginLeft: 13,
    // backgroundColor: 'orange',
  },
  cvvInput: {
    width: '49%',
    // backgroundColor: 'pink',
    height: '97%',
    marginTop: 5,
    // justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 200,
    marginTop: '38%',
  },
});

export default CardDetail;
