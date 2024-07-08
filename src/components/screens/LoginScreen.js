import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Form from "../UI/Form";

import { WelcomeButton, WelcomeButtonTray } from "../UI/Buttons";

export default function LoginScreen({ navigation }) {
  const SignUpScreen = () => {
    navigation.navigate("SignUpScreen");
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1509710398975-6454dcdf049f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.input}>
          <View style={styles.inputfields}>
            <Form.InputText
              label="Email Address"
              placeholder="Enter Email"
              value="janedoe@gmail.com"
              style={styles.label}
            />
            <Form.InputText
              label="Password"
              secureTextEntry={true}
              placeholder="Enter Password"
              value="123456"
              style={styles.label}
            />
            <TouchableOpacity>
              <Text style={styles.text}> Forgot Password?</Text>
            </TouchableOpacity>
            <WelcomeButtonTray>
              <WelcomeButton label="Log In" />
            </WelcomeButtonTray>
          </View>
          <View style={styles.accounts}>
            <Text style={styles.labels}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate(SignUpScreen)}>
              <Text style={styles.logIns}> Sign Up </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    marginTop: 40,
    marginBottom: 50,
    borderRadius: 200,
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#004226",
  },
  safeArea: {
    flex: 1,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingTop: 8,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  inputfields: {
    margin: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: "gray",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "right",
    marginTop: 10,
  },
  labels: {
    color: "black",
    fontSize: 14,
  },
  logIns: {
    color: "#FFD166",
    fontWeight: "800",
    fontSize: 14,
  },
  accounts: {
    marginLeft: 90,
    flexDirection: "row",
    textAlign: "center",
  },
});
