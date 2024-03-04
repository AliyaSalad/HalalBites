import { StyleSheet, View, Text } from "react-native";
import Screen from "../layout/Screen";
import { WelcomeButton, WelcomeButtonTray } from "../UI/Buttons";
import Icons from "../UI/Icons";

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
        <View>
          <WelcomeButtonTray>
            <WelcomeButton label="User" onClick={goToUserList} />
            <WelcomeButton label="Admin" onClick={goToAdminList} />
          </WelcomeButtonTray>
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
