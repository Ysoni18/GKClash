import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

export default function Index() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome,</Text>
      <Text style={styles.expText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida mi non mi feugiat, vel luctus odio congue.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Explain')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
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
  welcomeText: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
  expText: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 25,
  },
  button: {
    backgroundColor: "orange",
    paddingVertical: 15,
    paddingHorizontal: 85,
    borderRadius: 50,
    position: "absolute",
    bottom: 120,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
