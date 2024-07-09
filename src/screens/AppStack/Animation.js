import {View, Text, StyleSheet, Animated, Platform} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Animation = () => {
  const progress = useRef(new Animated.Value(0.5)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(progress, {toValue: 1, useNativeDriver: true}),
      Animated.spring(progress, {toValue: 0.5, useNativeDriver: true}),
    ]).start();
  }, [progress]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            borderRadius: progress.interpolate({
              inputRange: [0.5, 1],
              outputRange: [SIZE / 4, SIZE / 2],
            }),
            opacity: progress,
            transform: [
              {scale},
              {
                rotate: progress.interpolate({
                  inputRange: [0.5, 1],
                  outputRange: ['0rad', `${Math.PI}rad`],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const SIZE = 100;
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 50 : 40,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'red',
  },
});

export default Animation;
