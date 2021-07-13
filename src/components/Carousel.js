import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import CarouselSnap from 'react-native-snap-carousel';
import { ENTRIES } from '../components/Static';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Carousel = () => {

  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.slide} activeOpacity={0}>
        <Image source={{ uri: item.uri }}
          style={styles.img}
          resizeMode='cover' />
        <Text style={styles.title} numberOfLines={1} >{item.title}</Text>
        <Text style={styles.subtitle} numberOfLines={2} >{item.author + ' in ' + item.year_written}</Text>

      </TouchableOpacity>
    );
  }
  return (
    <View style={{ marginTop: 20 }}>
      <CarouselSnap
        //  layout={'stack'}
        data={ENTRIES}
        firstItem={parseInt(ENTRIES.length / 2)}
        renderItem={_renderItem}
        sliderWidth={wp('100')}
        itemWidth={wp('60')}
        inactiveSlideScale={0.80}
        inactiveSlideOpacity={1}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: wp('60'),
    borderRadius: 12,
    elevation: 2,
    backgroundColor: '#fff',
    paddingBottom: 10,
    marginBottom: 5,

  },
  title: {
    marginTop: 5,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  subtitle: {
    marginLeft: 5,
    color: 'silver'
  },
  img:
  {
    width: '100%',
    height: hp('22'),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  }
});


export default Carousel;
