import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'right',
          padding: 10,
          backgroundColor: 'orange',
        }}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
});
export default Header;
