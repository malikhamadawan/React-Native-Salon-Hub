import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
import {Input} from '../../components/input';
import CustomButton from '../../components/customButton';
import {ProfileCard} from '../../components/profileCard';
import PersistentBackgroundAnimation from '../../components/PersistentBackgroundAnimation/PersistentBackgroundAnimation';

const CardDetail = ({navigation}) => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  // Check if all fields are filled
  const isFormValid = cardHolder && cardNumber && expiryDate && cvv;

  return (
    <View style={{flex: 1}}>
      <PersistentBackgroundAnimation />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AppStack', {screen: 'BookingDetail'})
          }
          style={{marginLeft: 5}}>
          <Image
            source={require('../../assets/arrowicon2.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <View style={{width: '95%', alignSelf: 'center'}}>
          <ProfileCard
            showButton={false}
            text1={'Mr Cuts Hair\nSaloon\n'}
            text2="Block F, PIA Housing Scheme, Lahore"
            profileImg1={require('../../assets/mrCuts.jpeg')}
          />
        </View>

        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabelText}>Card Holder Name</Text>
        </View>
        <Input
          width="100%"
          placeholder="Enter holder name"
          focusview={true}
          value={cardHolder}
          onChangeText={setCardHolder}
        />

        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabelText}>Card Number</Text>
        </View>
        <Input
          // tintcolor={'#C62300'}
          width="100%"
          img={require('../../assets/paymentmethodicon.png')}
          imgBorderRadius={6}
          imgWidth={40}
          focusview={true}
          leftIcon
          placeholder="XXXX-XXXX-XXXX-XXXX"
          value={cardNumber}
          onChangeText={setCardNumber}
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
            <Input
              width="100%"
              placeholder="XX/XX"
              focusview={true}
              value={expiryDate}
              onChangeText={setExpiryDate}
            />
          </View>
          <View style={styles.cvvInput}>
            <Input
              width="100%"
              placeholder="Xxx"
              focusview={true}
              value={cvv}
              onChangeText={setCvv}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={() =>
              navigation.navigate('AppStack', {screen: 'BookingDetail'})
            }
            btnColor="white"
            width={150}
            borderColor="#C62300"
            borderWidth
            justi="center"
            text="Back"
            btnHeight={42}
            txtColor="#C62300"
          />
          <CustomButton
            disabled={!isFormValid} // Disable when form is not valid
            onPress={() => navigation.navigate('AppStack', {screen: 'PayNow'})}
            btnColor={isFormValid ? '#C62300' : '#D3D3D3'} // Change color based on form validity
            width={150}
            text="Pay Now"
            justi="center"
            txtColor="white"
            btnHeight={42}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 50 : 40,
    flex: 1,
  },
  backIcon: {
    width: 30,
    height: 30,
    marginRight: '92%',
  },
  inputLabelContainer: {
    height: 40,
    justifyContent: 'center',
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
  },
  column1: {
    width: '50%',
    marginTop: 5,
  },
  cvvColumn: {
    marginLeft: 13,
  },
  cvvInput: {
    width: '49%',
    height: '97%',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 200,
    marginTop: '38%',
  },
});

export default CardDetail;
