import {View, Text, Platform} from 'react-native';
import React from 'react';
import {LoadingLottie} from '../../components/loadingLottie';

const Test = () => {
  return (
    <View
      style={{
        // marginTop: Platform.OS === 'ios' ? 50 : 40,
        flex: 1,
        // alignItems: 'center',
        // paddingHorizontal: 5,
      }}>
      <LoadingLottie />
    </View>
  );
};

export default Test;
