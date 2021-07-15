import React from "react";
import { View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import Colors from "../utils/Colors";

export default App = () => {
    return (
        <SkeletonPlaceholder backgroundColor={Colors.GREY} highlightColor={'silver'} >
            <View style={styles.title} />
            <View style={styles.container}>
                <View style={styles.viewOne} />
                <View style={styles.viewTwo} />
                <View style={styles.viewOne} />

            </View>
        </SkeletonPlaceholder>
    );
};
const styles = {
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        height: 20,
        width: widthPercentageToDP('40'),
        borderRadius: 12


    },
    viewOne: {
        width: widthPercentageToDP('12'),
        height: 170,
        borderRadius: 12
    },
    viewTwo: {
        width: widthPercentageToDP('60'),
        height: 200,
        borderRadius: 12,
    },
}