import { StyleSheet, View, Text, Button } from "react-native";
import Screen from "../layout/Screen";

const WelcomeScreen = ({ navigation }) => {
  const goToUserList = () => {
    navigation.navigate("UserListScreen");
  };
  const goToAdminList = () => {
    navigation.navigate("AdminListScreen");
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Halal Bites</Text>
        <View style={styles.buttonContainer}>
          <Button title="User" onPress={goToUserList} />
          <Button title="Admin" onPress={goToAdminList} />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "#FFD166",
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default WelcomeScreen;
