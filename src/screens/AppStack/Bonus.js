import {View, Text, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import LottieView from 'lottie-react-native';
import AnimationLottie from '../../assets/lottie/Animation.json';
import CustomButton from '../../components/customButton';
import {useNavigation} from '@react-navigation/native';

const Bonus = () => {
  const animationRef = useRef();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        source={AnimationLottie}
        autoPlay
        loop
        resizeMode={'contain'}
        style={styles.lottie}
      />
      <Text style={styles.congratulationsText}>CONGRATULATIONS</Text>
      <View style={styles.discountContainer}>
        <Text style={styles.text}>You Got a</Text>
        <Text style={styles.discount}>10%</Text>
        <Text style={styles.text}>DISCOUNT</Text>
      </View>
      <CustomButton
        text={'Continue'}
        btnColor={'#2158FF'}
        justi={'center'}
        txtColor={'white'}
        marginTop={'50%'}
        onPress={() => {
          navigation.navigate('AppStack', {screen: 'BottomTab'});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '30%',
    flex: 1,
  },
  lottie: {
    width: 350,
    height: 350,
    alignSelf: 'center',
  },
  congratulationsText: {
    fontSize: 25,
    fontWeight: '700',
    color: '#2158FF',
    alignSelf: 'center',
  },
  discountContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginRight: 8,
  },
  discount: {
    fontSize: 25,
    fontWeight: '700',
    color: '#2158FF',
    marginRight: 5,
  },
});

export default Bonus;
