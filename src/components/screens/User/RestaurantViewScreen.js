import { StyleSheet, Text } from "react-native";
import Screen from "../../layout/Screen";
import RestaurantView from "../../entity/User/RestaurantView";

const RestaurantViewScreen = ({ navigation, route }) => {
  //Initialisations
  const { restaurant, onDelete, onModify } = route.params;

  //State

  //Handlers
  const goToModifyScreen = () =>
    navigation.navigate("RestaurantModifyScreen", { restaurant, onModify });

  //View
  return (
    <Screen>
      <RestaurantView
        restaurant={restaurant}
        onDelete={onDelete}
        onModify={goToModifyScreen}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default RestaurantViewScreen;
