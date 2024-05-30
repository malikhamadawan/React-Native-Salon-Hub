import {View, Text} from 'react-native';
import React, {useRef} from 'react';
import LottieView from 'lottie-react-native';
import AnimationLottie from '../../assets/lottie/Animation.json';
import CustomButton from '../../components/customButton';
import {useNavigation} from '@react-navigation/native';

const Bonus = () => {
  const lottieRef = useRef();
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginTop: '30%',
        flex: 1,
      }}>
      <LottieView
        ref={lottieRef}
        source={AnimationLottie}
        autoPlay
        loop
        resizeMode={'contain'}
        style={{
          width: 350,
          height: 350,
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          fontSize: 25,
          fontWeight: '700',
          color: '#2158FF',
          alignSelf: 'center',
        }}>
        CONGRATULATIONS
      </Text>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: 'black',
            marginRight: 8,
          }}>
          You Got a
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            color: '#2158FF',
            marginRight: 5,
          }}>
          10%
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: 'black',
          }}>
          DISCOUNT
        </Text>
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

export default Bonus;
