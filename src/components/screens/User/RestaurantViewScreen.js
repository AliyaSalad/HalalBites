
import { StyleSheet, Text, View } from "react-native";

import Screen from "../../layout/Screen";
import RestaurantView from "../../entity/User/RestaurantView";

const RestaurantViewScreen = ({ navigation, route }) => {
  //Initialisations
  const { restaurant, onDelete, onModify } = route.params;


  const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{restaurant.RestaurantName}</Text>
      </View>
    );
  };

  //State

  //Handlers
  const goToModifyScreen = () =>
    navigation.navigate("RestaurantModifyScreen", { restaurant, onModify });

  //View
  return (
    <Screen>

      <Header />

      <RestaurantView
        restaurant={restaurant}
        onDelete={onDelete}
        onModify={goToModifyScreen}
      />
    </Screen>
  );
};


const styles = StyleSheet.create({
  header: {
    height: 30,
    backgroundColor: "#004226",
    justifyContent: "center",
    alignContent: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center",
  },
});


export default RestaurantViewScreen;
