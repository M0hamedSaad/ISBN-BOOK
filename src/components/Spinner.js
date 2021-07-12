import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
const imageBaseUrl = require('../assets/images/loading.gif');

const Spinner = () => {
  return (
    <View style={styles.container}>
      <Image source={imageBaseUrl}  resizeMode='center'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center'
  }
});


export default Spinner;
