import React, {useRef} from 'react';
import {View, Modal} from 'react-native';
import LottieView from 'lottie-react-native';
import Loading from '../../assets/lottie/loading.json';

const LoadingLottie = ({visible}) => {
  const animationRef = useRef();
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}>
        <LottieView
          ref={animationRef}
          source={Loading}
          autoPlay
          loop
          resizeMode={'contain'}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </View>
    </Modal>
  );
};

export {LoadingLottie};
