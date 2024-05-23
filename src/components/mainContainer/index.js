import React from 'react';
import {View, StatusBar, Platform, SafeAreaView} from 'react-native';

const CustomView = ({
  children,
  onBoarding,
  statusbar,
  backgroundColor,
  marginTop,
  align,
}) => {
  const dynamicMarginTop =
    onBoarding !== true ? (Platform.OS === 'ios' ? 50 : 30) : 0;

  return (
    <View
      style={{flex: 1, marginTop: marginTop ? marginTop : dynamicMarginTop}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        {statusbar === 'light' ? (
          <StatusBar
            barStyle="light-content"
            backgroundColor={backgroundColor}
          />
        ) : (
          <StatusBar
            barStyle="dark-content"
            backgroundColor={backgroundColor}
          />
        )}
        <View
          style={{
            flex: 1,
            width: '100%',
            alignItems: align,
          }}>
          {children}
        </View>
      </View>
    </View>
  );
};

export default CustomView;
