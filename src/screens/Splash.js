import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Colors from '../utils/Colors';
const imageBaseUrl = require('../assets/images/splash.gif');

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(async () => { navigation.replace('Home') }, 1800);
  }, [])

  return (
    <View style={styles.container}>
      <Image source={imageBaseUrl} resizeMode='center' />
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
    backgroundColor: Colors.WHITE
  }
});


export default Splash;
