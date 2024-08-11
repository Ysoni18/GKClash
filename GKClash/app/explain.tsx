import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}></View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
    },
});