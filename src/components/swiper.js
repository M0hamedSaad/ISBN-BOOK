import React, { useState } from 'react';
import { Text, Dimensions, StyleSheet, View, Image } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../utils/Colors';
const { width, height } = Dimensions.get('window');

const images = [
    'https://www.ft.com/__origami/service/image/v2/images/raw/http://prod-upp-image-read.ft.com/5554c8ae-ffd1-11e8-aebf-99e208d3e521?source=next&fit=scale-down&quality=highest&width=720',
    'https://online.merrimack.edu/wp-content/uploads/2019/04/MCMED_5-Reasons-REading-is-So-Important-to-Student-Success.jpg',
    'https://www.oecd-nea.org/upload/docs/image/jpeg/2020-11/book_stack.jpg'];
const swiper = () => {
    const [index, setIndex] = useState(0)

    return (
        <View style={styles.container}>
            <SwiperFlatList
                autoplay={3}
                paginationStyle={styles.paginationStyle}
                paginationStyleItemActive={styles.paginationStyleItemActive}
                paginationStyleItemInactive={styles.paginationStyleItemInactive}
                index={0}
                showPagination
                data={images}
                onChangeIndex={(res) => { setIndex(res.index) }}
                renderItem={({ item }) => (
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{ uri: item }} style={{ width, height: heightPercentageToDP('60') }} resizeMode='cover' />
                    </View>
                )}
            />
            <Text style={styles.titleImage}>{'Find a book'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: 'white', position: 'relative', width,alignItems:'center' },
    paginationStyle: { position: 'absolute', left: 20, width: 40, justifyContent: 'space-around', alignItems: 'center' },
    paginationStyleItemActive: { width: 8, height: 8, backgroundColor: Colors.PRIMARY, elevation: 5 },
    paginationStyleItemInactive: { width: 6, height: 6, backgroundColor: '#fff', elevation: 5 },
    titleImage: { position: 'absolute', top: hp('15'), color: '#fff', fontWeight: 'bold', fontSize: 30, textAlign: "center" }

});

export default swiper;