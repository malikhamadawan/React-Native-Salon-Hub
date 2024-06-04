import React from 'react';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import CustomButton from '../../components/customButton';
import {ProfileCard} from '../../components/profileCard';

const PayNow = ({navigation}) => {
  const renderProfile = () => (
    <ProfileCard
      showButton={false}
      text1={'Mr Cuts Hair\nSaloon\n'}
      text2={'Block F,PIA Housing Scheme,Lahore'}
      profileImg1={require('../../assets/mrCuts.jpeg')}
    />
  );

  const renderSchedule = () => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Schedule</Text>
      <View style={styles.scheduleContainer}>
        {renderScheduleItem(
          '18, March',
          require('../../assets/calenderIcon2.png'),
        )}
        {renderScheduleItem('14:00', require('../../assets/clockIcon2.png'))}
      </View>
    </View>
  );

  const renderScheduleItem = (text, icon) => (
    <View style={styles.scheduleItem}>
      <Image source={icon} style={styles.scheduleIcon} />
      <Text style={styles.scheduleText}>{text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AppStack', {screen: 'BookingDetail'})
        }>
        <Image
          source={require('../../assets/arrowicon2.png')}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>

      {renderProfile()}
      {renderSchedule()}

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <Image
          source={require('../../assets/visaCard.png')}
          style={styles.paymentMethodImage}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() =>
            navigation.navigate('AppStack', {screen: 'BookingDetail'})
          }
          btnColor={'white'}
          width={150}
          borderColor={'black'}
          borderWidth={true}
          justi={'center'}
          text={'Cancel'}
          btnHeight={42}
          txtColor={'black'}
        />
        <CustomButton
          onPress={() => navigation.navigate('AppStack', {screen: 'CheckOut'})}
          btnColor={'#2158FF'}
          width={150}
          text={'Check Out'}
          justi={'center'}
          txtColor={'white'}
          btnHeight={42}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    marginTop: Platform.OS === 'ios' ? 56 : 35,
    flex: 1,
    paddingHorizontal: 10,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    marginRight: '92%',
  },
  sectionContainer: {
    width: '90%',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 23,
    color: 'black',
    fontWeight: '600',
  },
  scheduleContainer: {
    flexDirection: 'row',
    marginTop: 5,
    width: '95%',
    alignSelf: 'center',
  },
  scheduleItem: {
    height: 40,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  scheduleIcon: {
    height: 30,
    width: 30,
  },
  scheduleText: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  paymentMethodImage: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 330,
  },
};

export default PayNow;
