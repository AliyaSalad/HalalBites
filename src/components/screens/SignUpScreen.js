import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Form from "../UI/Form";
import Screen from "../layout/Screen";
import { WelcomeButton, WelcomeButtonTray } from "../UI/Buttons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpScreen({ navigation }) {
  const LoginScreen = () => {
    navigation.navigate("LoginScreen");
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //   const LoginScreen = () => {
  //     navigation.navigate("LoginScreen");
  //   };

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.log("got error: ", err.message);
      }
    }
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
              label="Full Name"
              placeholder="Enter Name"
              value="Jane Doe"
              style={styles.label}
            />
            <Form.InputText
              label="Email Address"
              placeholder="Enter Email"
              value={email}
              onChangeText={(value) => setEmail(value)}
              style={styles.label}
            />
            <Form.InputText
              label="Password"
              secureTextEntry={true}
              placeholder="Enter Password"
              value={password}
              onChangeText={(value) => setPassword(value)}
              style={styles.label}
            />
            <WelcomeButtonTray>
              <WelcomeButton label="Sign Up" onClick={handleSubmit} />
            </WelcomeButtonTray>
          </View>
          <View style={styles.accounts}>
            <Text style={styles.labels}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate(LoginScreen)}>
              <Text style={styles.logIns}> Log In </Text>
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
