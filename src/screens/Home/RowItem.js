import React, { useState, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Colors from '../../utils/Colors';
import { Icon } from 'native-base';
import moment from 'moment';
let date
const RowItem = ({ task, list, selectItemExpand, expandId }) => {
  const [selected, setSelected] = useState(list);

  useEffect(() => {
    markAll()
  }, []);


  return (
    <TouchableOpacity style={{}} onPress={() => { }}>
  
    </TouchableOpacity>
  );
};

export default RowItem;
