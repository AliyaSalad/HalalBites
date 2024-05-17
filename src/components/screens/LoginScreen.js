import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";

export default function LoginScreen() {
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
        <View style={styles.logIn}>
          <View></View>
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
  logIn: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingTop: 8,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
