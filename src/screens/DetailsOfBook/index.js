import React, { useState } from 'react';
import {
  Text,
  ScrollView,
  View,
  Image
} from 'react-native';
import styles from './style';
import { KeyboardAvoidingView } from 'react-native';
import useBookDescription from '../../hooks/useBookDescription';
import useBookAuthor from '../../hooks/useBookAuthor';


const DetailsOfBook = ({ route }) => {
  const book = route.params.item
  console.log('book', book);

  const [subjects, setSubjects] = useState([])
  const [authorName, setAuthorName] = useState('')


  const getSubjects = (subj) => {
    setSubjects(subj)
  }

  const getAuthorName = (name) => {
    setAuthorName(name)
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>

        <View style={styles.cardView}>
          <Image
            source={{ uri: `https://covers.openlibrary.org/b/id/${book?.covers[0]}-L.jpg` }}
            resizeMode='contain'
            style={styles.BookCover}
          />

          <View style={styles.detailsSectionView}>
            <Text style={styles.Title} >{book?.title}</Text>
            <Text style={styles.subTitle}>{'by ' + authorName}</Text>

            <Text style={styles.Title}>{'Published in'}</Text>
            <Text style={styles.subTitle}>{book?.publish_date}</Text>

            <Text style={styles.Title} >{"Length"}</Text>
            <Text style={styles.subTitle}>{book?.number_of_pages}</Text>

            <Text style={styles.Title} >{"Subjects"}</Text>

            <ScrollView nestedScrollEnabled >
              {subjects != undefined ? subjects.map(i => {
                return (
                  <Text style={styles.subjects}>- {i}</Text>
                )
              }) : null}
            </ScrollView>
          </View>
        </View>

        <Description param={book.works[0].key} getSubjects={getSubjects} />
        <Author param={book.authors[0].key} getAuthorName={getAuthorName} />


      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const Description = ({ param, getSubjects }) => {
  const { data, isFetched } = useBookDescription(param);
  console.log('details', data);
  if (isFetched) { getSubjects(data?.subjects) }
  return (
    <>
      {data ?
        <View style={styles.descriptionContainer}>
          <Text style={styles.Title} >{data?.description ? "Description" : "Don't have description.."}</Text>
          <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
            <Text style={styles.description}>{data?.description}</Text>
          </ScrollView>
        </View> : null}
    </>
  )

}

const Author = ({ param, getAuthorName }) => {
  const { data, isFetched } = useBookAuthor(param);
  console.log('Author', data);
  if (isFetched) { getAuthorName(data?.name) }

  return (
    <>
      {data ?
        <View style={styles.authorContainer}>
          <Text style={styles.Title} >{data?.name ? data.name : ""}</Text>
          <Text style={styles.Title} >{data?.birth_date ? data.birth_date : ""}</Text>


          <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
            <Text style={styles.description}>{data?.bio ? data?.bio?.value : 'No Bio'}</Text>
          </ScrollView>
        </View> : null}
    </>
  )

}

export default DetailsOfBook;
