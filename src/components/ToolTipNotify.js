import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../utils/Colors';
import * as Animatable from "react-native-animatable";

const { createAnimatableComponent } = Animatable;
const AnimatableView = createAnimatableComponent(View);

const ToolTipNotify = ({type}) => {
  const [notify, isNotify] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      isNotify(false)
    }, 5000);
    return () => { clearTimeout(timer) }
  }, []);


  return (
    <AnimatableView animation={notify ? "fadeIn" : 'fadeOut'} style={type?styles.TooltipContainerError:styles.TooltipContainer}
      delay={100}>
      <Text style={styles.TooltipText}>{type?'The value is not valid ISBN':'Search by more than one ISBN by add this separator "/"'}</Text>
    </AnimatableView >
  )
};

const styles = StyleSheet.create({
  container: { position: 'absolute' },
  TooltipContainer: {
    position: 'absolute',
    top: hp('11'),
    backgroundColor: Colors.PRIMARY,
    padding: 5,
    borderRadius: 10,
    width: wp('90'),
    left: wp('5'),
  },
  TooltipContainerError: {
    position: 'absolute',
    top: hp('11'),
    backgroundColor: Colors.RED,
    padding: 5,
    borderRadius: 10,
    width: wp('50'),
    left: wp('25'),
  },
  TooltipText: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center'
  },
});
export default ToolTipNotify;
