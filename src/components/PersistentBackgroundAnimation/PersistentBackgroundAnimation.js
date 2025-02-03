// components/PersistentBackgroundAnimation.js
import React, {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import styled from 'styled-components/native';

const BackgroundImage = styled.ImageBackground.attrs({
  imageStyle: {
    width: '200%',
    height: '200%',
    transform: [{translateX: -100}, {translateY: -250}, {rotate: '-30deg'}],
  },
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.9;
`;

const PersistentBackgroundAnimation = () => {
  const translateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateValue, {
        toValue: 1,
        duration: 15000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const translateAnimation = translateValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100],
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transform: [
          {translateX: translateAnimation},
          {translateY: translateAnimation},
        ],
      }}>
      <BackgroundImage
        source={require('../../assets/backGround4455.jpg')}
        resizeMode="repeat"
      />
    </Animated.View>
  );
};

export default PersistentBackgroundAnimation;
