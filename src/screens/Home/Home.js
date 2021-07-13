import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  ScrollView,
  View,
  KeyboardAvoidingView
} from 'react-native';
import Spinner from '../../components/Spinner';
import styles from './style';
import { Avatar } from 'react-native-elements';
import { Icon } from 'native-base';
import Swiper from '../../components/swiper';
import AnimatedInput from '../../components/AnimatedInput';
import Carousel from '../../components/Carousel';


//route
//route.params.username
const Home = () => {


  useEffect(() => {

  }, []);

  //const _keyExtractor = (item, index) => index + '';


  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <Swiper />
        <AnimatedInput />
        <Text style={styles.header}>Best Books</Text>
        <Carousel />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Home;
