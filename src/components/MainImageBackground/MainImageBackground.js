// components/MainImageBackground/MainImageBackground.js
import React from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {useBackgroundAnimation} from '../../hooks/useBackgroundAnimation'; // Import the hook

const MainImageBackground = ({children}) => {
  // Use the animation from the custom hook
  const translateAnimation = useBackgroundAnimation();

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

  const AnimatedImage = Animated.createAnimatedComponent(BackgroundImage);

  return (
    <>
      <AnimatedImage
        source={require('../../assets/mainBackground1122.png')}
        resizeMode="repeat"
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
        }}
      />
      {children}
    </>
  );
};

export default MainImageBackground;
