import React, { useState, useRef } from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../utils/Colors';
import * as Animatable from "react-native-animatable";

const { createAnimatableComponent } = Animatable;
const AnimatableView = createAnimatableComponent(View);

const AnimatedInput = () => {
  const [search, onChangeSearch] = useState('');
  const ref_search = useRef();

  const onsubmit = () => {
    ref_search.current.clear()
    onChangeSearch('')
  }

  return (
    <AnimatableView animation={"fadeInRight"} style={styles.searchView} delay={500}>

      <TextInput
        style={styles.input}
        placeholder={'ISBN [ Number : 10 ~ 13 ] '}
        ref={ref_search}
        onChangeText={onChangeSearch}
        keyboardType='number-pad'
        maxLength={13}
        onSubmitEditing={onsubmit}
      />

      <Image
        source={require('../assets/images/loupe.png')}
        resizeMode='center'
        style={styles.iconSearch} />
    </AnimatableView>

  );
};

const styles = StyleSheet.create({
  searchView: {
    position: 'absolute',
    top: hp('5'),
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: Colors.WHITE,
    elevation: 7,
    width: wp('80'),
    left: wp('10'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  input: {
    height: hp('5'),
    width: '80%',
    // textAlign:'center'
  },
  iconSearch: { width: 20, height: 20, }

});


export default AnimatedInput;
