import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  header: {
    marginTop: 10,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    fontSize: 20,
    textAlign:'center'
  }

});

export default styles;
