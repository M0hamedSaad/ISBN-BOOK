import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  cardView: {
    width: '90%', padding: 15,
    height: hp('45'),
    elevation: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#fff',
    elevation: 3, margin: 7, flexDirection: 'row',
  },
  BookCover: {
    width: '55%',
    height: '100%',
    borderWidth: 2,
    borderColor: Colors.GREY
  },
  detailsSectionView: {
    marginLeft: 10,
    width: '44%',
  },
  Title: {
    fontWeight: 'bold',
    color: Colors.DARK_GREY
  },
  subTitle: {
    color: Colors.GREY,
    marginBottom: 10
  },
  subjects: {
    color: Colors.GREY,
    fontSize: 13,
    marginBottom: 5
  },
  description: {
    marginTop: 10,
    color: Colors.GREY,

  },
  descriptionContainer: {
    maxHeight: hp('25'),
    paddingHorizontal: 20,
    width: '100%'
  },
  authorContainer: {
    maxHeight: hp('25'),
    paddingHorizontal: 20,
    width: '100%', marginTop: 5
    ,marginBottom:10
  }
});

export default styles;
