import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Image, Text } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

const Error = ({ refresh, errorMessage }) => {

    return (
        <TouchableOpacity onPress={() => { errorMessage != 'NOT FOUND' ? refresh() : null }} style={styles.container}>
            <Image style={{ width: 80, height: 80 }} source={require('../assets/images/error.png')} resizeMode='center' />
            <Text style={styles.errorMessage}>{errorMessage}</Text>
        </TouchableOpacity>
    );
};
const styles = {
    container: {
        width: widthPercentageToDP('80'),
        marginTop: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    errorMessage: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
    }
}
export default Error