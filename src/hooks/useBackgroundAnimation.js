// hooks/useBackgroundAnimation.js
import {useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';

export const useBackgroundAnimation = () => {
  const translateValue = useRef(new Animated.Value(0)).current; // Persistent animated value

  useEffect(() => {
    // Animate the value continuously without resetting
    Animated.loop(
      Animated.timing(translateValue, {
        toValue: 1,
        duration: 15000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []); // Empty dependency array ensures this runs only once

  const translateAnimation = translateValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100], // Adjust the range as needed
  });

  return translateAnimation;
};
