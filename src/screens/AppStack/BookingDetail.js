import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import CustomButton from '../../components/customButton';
import {ProfileCard} from '../../components/profileCard';

const costData = [
  {id: 1, title: 'Hourly Price', price: '200 Rs'},
  {id: 2, title: 'Hair Cut', price: '800 Rs'},
];

const paymentMethods = [
  {id: 1, title: 'Cash', image: require('../../assets/cashIcon.png')},
  {id: 2, title: 'Card', image: require('../../assets/cardIcon.png')},
];

const BookingDetail = ({navigation}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handlePaymentMethodSelect = item => {
    setSelectedPaymentMethod(
      item.id === selectedPaymentMethod ? null : item.id,
    );
  };

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AppStack', {screen: 'BookNow'});
        }}>
        <Image
          source={require('../../assets/arrowicon2.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <ProfileCard
        showButton={false}
        text1={'Mr Cuts Hair\nSaloon\n'}
        text2={'Block F, PIA Housing Scheme, Lahore'}
        profileImg1={require('../../assets/mrCuts.jpeg')}
      />
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Schedule</Text>
      </View>
      <View style={styles.scheduleContainer}>
        <View style={styles.scheduleItem}>
          <Image
            source={require('../../assets/calenderIcon2.png')}
            style={styles.scheduleIcon}
          />
          <Text style={styles.scheduleText}>18, March</Text>
        </View>
        <View style={styles.scheduleItem}>
          <Image
            source={require('../../assets/clockIcon2.png')}
            style={styles.scheduleIcon}
          />
          <Text style={styles.scheduleText}>14:00</Text>
        </View>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Cost</Text>
      </View>
      <FlatList
        scrollEnabled={false}
        style={styles.costList}
        data={costData}
        renderItem={({item}) => (
          <View style={styles.costItem}>
            <Text style={styles.costTitle}>{item.title}</Text>
            <Text style={styles.costPrice}>{item.price}</Text>
          </View>
        )}
        ListFooterComponent={
          <>
            <View style={styles.costSummary}>
              <Text style={styles.costSummaryText}>Sub Total Price</Text>
              <Text style={styles.costSummaryText}>1000 Rs</Text>
            </View>
            <View style={styles.costSummary}>
              <Text style={styles.costSummaryText}>Discount Price</Text>
              <Text style={styles.costSummaryText}>100 Rs</Text>
            </View>
          </>
        }
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.dividerContainer}>
        <Image
          source={require('../../assets/divionLine.png')}
          style={styles.divider}
        />
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Price</Text>
        <Text style={styles.totalText}>900 Rs</Text>
      </View>
      <View style={styles.dividerContainer}>
        <Image
          source={require('../../assets/divionLine.png')}
          style={styles.divider}
        />
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Payment Method</Text>
      </View>
      <FlatList
        data={paymentMethods}
        scrollEnabled={false}
        style={styles.paymentList}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.paymentItem}
            onPress={() => handlePaymentMethodSelect(item)}>
            <View style={styles.paymentItemContent}>
              <Image source={item.image} style={styles.paymentIcon} />
              <Text style={styles.paymentText}>{item.title}</Text>
              {/* Reserve space for the checkbox to avoid layout shifts */}
              <View style={styles.checkBoxContainer}>
                {selectedPaymentMethod === item.id && (
                  <Image
                    source={require('../../assets/checkBoxIcon.png')}
                    style={styles.checkBox}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() => {
            navigation.navigate('AppStack', {screen: 'CardDetail'});
          }}
          style={styles.bookButton}
          width={159}
          text={'Book Now'}
          btnColor={selectedPaymentMethod ? '#2158FF' : '#BBE4FB'}
          justi={'center'}
          txtColor={'white'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 50 : 35,
    flex: 1,
    paddingHorizontal: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: '92%',
  },
  sectionHeader: {
    width: '90%',
    height: 50,
    marginTop: 5,
    justifyContent: 'center',
  },
  sectionHeaderText: {
    fontSize: 23,
    fontWeight: '600',
    color: 'black',
  },
  scheduleContainer: {
    width: '90%',
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
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
  costList: {
    flexGrow: 0.4,
    height: 120,
  },
  costItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },
  costTitle: {
    fontSize: 15,
    color: 'black',
    paddingLeft: 20,
  },
  costPrice: {
    fontSize: 15,
    color: 'black',
    paddingHorizontal: 20,
  },
  costSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: 5,
    marginLeft: 3,
  },
  costSummaryText: {
    fontSize: 15,
    color: 'black',
  },
  dividerContainer: {
    height: 30,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 18,
  },
  divider: {
    width: '90%',
    height: 1,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    alignSelf: 'center',
    // marginLeft: '10',
  },
  totalText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
  },
  paymentList: {
    flexGrow: 1,
    height: 140,
  },
  paymentItem: {
    alignSelf: 'center',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  paymentItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  paymentIcon: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  paymentText: {
    fontSize: 18,
    color: 'black',
    flex: 1,
  },
  checkBox: {
    height: 30,
    width: 30,
  },
  buttonContainer: {
    height: 120,
  },
  checkBoxContainer: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookButton: {
    marginTop: Platform.OS === 'ios' ? 5 : 0,
  },
});

export default BookingDetail;
