import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import { WelcomeButton, WelcomeButtonTray } from "../UI/Buttons";
import Icons from "../UI/Icons";

// const WelcomeScreen = ({ navigation }) => {
//   const goToUserList = () => {
//     navigation.navigate("UserListScreen");
//   };
//   const goToAdminList = () => {
//     navigation.navigate("AdminListScreen");
//   };

//   return (
//     <Screen>
//       <View style={styles.container}>
//         <Text style={styles.title}>Halal Bites</Text>

//         <View>
//           <WelcomeButtonTray>
//             <WelcomeButton label="User" onClick={goToUserList} />
//             <WelcomeButton label="Admin" onClick={goToAdminList} />
//           </WelcomeButtonTray>
//         </View>
//       </View>
//     </Screen>
//   );
// };

const WelcomeScreen = ({ navigation }) => {
  return (
    <Screen>
      <SafeAreaView>
        <View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1509710398975-6454dcdf049f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.image}
          />
          <View>
            <Text style={styles.title}>Pure Bite</Text>
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
    marginTop: 30,
  },
  image: {
    marginTop: 140,
    borderRadius: 350,
    width: 350,
    height: 350,
    alignSelf: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  text: {
    marginTop: 70,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 34,
  },
});

export default WelcomeScreen;
