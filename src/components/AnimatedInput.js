import React, { useState, useRef } from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../utils/Colors';
import * as Animatable from "react-native-animatable";
import ToolTipNotify from './ToolTipNotify';
const ISBN = require('isbn-validate');
import { isValidIsbn } from '../utils/functions';

const { createAnimatableComponent } = Animatable;
const AnimatableView = createAnimatableComponent(View);

const AnimatedInput = ({ onValidateISBN }) => {
  const [search, onChangeSearch] = useState('');
  const [foucs, isFoucs] = useState(false);
  const [error, isError] = useState(false);

  const ref_search = useRef();

  const onSuccessValidation = () => {
    onValidateISBN(search)
    ref_search.current.clear()
    onChangeSearch('')
  }

  const onsubmit = async () => {
    await isValidIsbn(search) ? onSuccessValidation() : isError(true)
  }

  const onFocus = () => { isFoucs(true); isError(false) }
  const onBlur = () => { isFoucs(false) }



  return (
    <View style={{ position: 'absolute', }}>
      <AnimatableView animation={"fadeInRight"} style={styles.searchView} delay={500}>
        <TextInput
          style={styles.input}
          placeholder={'ISBN [ Number : 10 ~ 13 ] '}
          ref={ref_search}
          onChangeText={onChangeSearch}
          keyboardType='number-pad'
          onSubmitEditing={onsubmit}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={13}
        />

        <Image
          source={require('../assets/images/loupe.png')}
          resizeMode='center'
          style={styles.iconSearch} />
      </AnimatableView>

      {error && <ToolTipNotify type={'error'} />}
    </View>
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
    height: hp('5.5'),
    width: '80%',
  },
  iconSearch: {
    width: 20,
    height: 20,
  }
});
export default AnimatedInput;
