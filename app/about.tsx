import { Link } from 'expo-router';
import {View, Text, StyleSheet} from 'react-native';
export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About</Text>
            <Link style={styles.link} href="/">Home</Link>
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    text: {
        color: "white",
    },
    link: {
        color: "white",
        textDecorationLine: "underline",
    }
})