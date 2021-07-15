import React, { useState, useEffect } from 'react';
import {
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';
import styles from './style';
import Swiper from '../../components/swiper';
import AnimatedInput from '../../components/AnimatedInput';
import Carousel from '../../components/Carousel';
import useBooks from "../../hooks/useBooks";
import Skeleton from '../../components/Skeleton';
import Error from '../../components/Error';
const Keyboardheight = 200
const Home = ({ navigation }) => {
  const [isbn, setIsbn] = useState(0)
  const [refreshKey, isRefreshKey] = useState(false)
  const refresh = () => {
    isRefreshKey(!refreshKey)
  }
  //onValidate_ISBN
  const onValidateISBN = (validateIsbn) => { setIsbn(parseInt(validateIsbn)); refresh() }
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding' keyboardVerticalOffset={-Keyboardheight} >
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='always' >
        <Swiper />
        <AnimatedInput onValidateISBN={onValidateISBN} />

        {isbn == 0 ?
          <>
            <Text style={styles.header}>Sample Books</Text>
            <Carousel />
          </>
          : <SearchBookResults key={refreshKey} isbn={isbn} navigation={navigation} refresh={refresh} />}

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const SearchBookResults = ({ isbn, navigation ,refresh}) => {
  //My custom hook to get book  by isbn
  const { status, data, error, isFetching, isFetched } = useBooks('isbn', isbn, true);
  console.log(data);
  return (
    <>
      {!isFetched ? <Skeleton />
        : status === "error" ? <Error errorMessage={error.message} refresh={refresh} />
          : data ?
            <>
              <Text style={styles.header}>{isFetching ? 'Loading....' : 'Results'}</Text>
              <Carousel books={data} navigation={navigation} />
            </>
            :
            <Error errorMessage={'NOT FOUND'} />
      }
    </>
  )

}

export default Home;
