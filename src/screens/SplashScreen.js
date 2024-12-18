import React, {useRef, useEffect} from 'react';
import {Animated, StyleSheet, View, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const {width} = Dimensions.get('window'); // Get screen width for gradient width

const SplashScreen = () => {
  const opacity = useRef(new Animated.Value(0)).current; // Initial opacity: 0
  const scale = useRef(new Animated.Value(0.5)).current; // Initial scale: 0.5
  const gradientPosition = useRef(new Animated.Value(0)).current; // Animated position for gradient

  useEffect(() => {
    // Fade and scale animation
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000, // Fade-in duration
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 5, // Adjusted bounce effect
        useNativeDriver: true,
      }),
    ]).start();

    // Looping gradient animation
    Animated.loop(
      Animated.timing(gradientPosition, {
        toValue: 1,
        duration: 4000, // Gradient animation duration
        useNativeDriver: true,
      }),
    ).start();
  }, [opacity, scale, gradientPosition]);

  // Interpolated gradient positions
  const translateX = gradientPosition.interpolate({
    inputRange: [0, 10],
    outputRange: [-width, width], // Moves gradient from left to right
  });

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/lottie/Cut.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <MaskedView
        style={styles.maskedView}
        maskElement={
          <Animated.Text
            style={[
              styles.text,
              {
                opacity: opacity,
                transform: [{scale: scale}],
              },
            ]}>
            CUTTING HUB
          </Animated.Text>
        }>
        {/* Animated gradient */}
        <Animated.View
          style={[
            styles.gradientContainer,
            {transform: [{translateX: translateX}]},
          ]}>
          <LinearGradient
            colors={['#AFCBFF', '#2158FF', '#AFCBFF']} // Add extra stops for smooth looping
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradient}
          />
        </Animated.View>
      </MaskedView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  animation: {
    width: 300,
    height: 300,
  },
  maskedView: {
    marginTop: 20,
    // alignItems: 'center',
    justifyContent: 'center',
    width: width, // Ensure the gradient width matches the screen width
    height: 50, // Mask height matches the text size
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black', // The color is used only for the mask, not visible in the final render
    textAlign: 'center',
  },
  gradientContainer: {
    width: width * 2, // Twice the width for smooth movement
    height: 50, // Matches the mask height
  },
  gradient: {
    flex: 1,
    height: '100%', // Fully cover the gradient container
  },
});

export default SplashScreen;
