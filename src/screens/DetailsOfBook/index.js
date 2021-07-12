import React, { useState, useEffect } from 'react';
import {
  Text,
  ScrollView,
  FlatList,
  View,
} from 'react-native';
import Spinner from '../../components/Spinner';
import styles from './style';
import { Avatar } from 'react-native-elements';
import { Icon } from 'native-base';
import { KeyboardAvoidingView } from 'react-native';

//route
//route.params.username
const DetailsOfBook = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>

        <Icon name='plussquareo' type='AntDesign' style={styles.addIcon} />


      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DetailsOfBook;
