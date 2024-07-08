import {
  Image,
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Screen from "../layout/Screen";
import { WelcomeButton, WelcomeButtonTray } from "../UI/Buttons";

const WelcomeScreen = ({ navigation }) => {
  LogBox.ignoreLogs([
    `Non-serializable values were found in the navigation state`,
  ]);

  const SignUpScreen = () => {
    navigation.navigate("SignUpScreen");
  };
  const LoginScreen = () => {
    navigation.navigate("LoginScreen");
  };
  const AdminListScreen = () => {
    navigation.navigate("AdminListScreen");
  };
  return (
    <Screen>
      <SafeAreaView>
        <View>
          <Text style={styles.title}>Pure Bites</Text>
          <View>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1509710398975-6454dcdf049f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={styles.image}
            />
          </View>
          <WelcomeButtonTray>
            <WelcomeButton label="Log In" onClick={LoginScreen} />
            <WelcomeButton
              label="Continue as guest"
              onClick={AdminListScreen}
            />
          </WelcomeButtonTray>
          <View style={styles.account}>
            <Text style={styles.text}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate(SignUpScreen)}>
              <Text style={styles.signUp}> Sign Up </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
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
    marginTop: 70,
  },
  image: {
    marginTop: 50,
    marginBottom: 30,
    borderRadius: 350,
    width: 350,
    height: 350,
    alignSelf: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  text: {
    color: "white",
    fontSize: 14,
  },
  signUp: {
    color: "#FFD166",
    fontWeight: "bold",
    fontSize: 14,
  },
  account: {
    marginLeft: 90,
    flexDirection: "row",
    textAlign: "center",
  },
});

export default WelcomeScreen;
