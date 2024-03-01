import { LogBox, StyleSheet } from "react-native";
import Screen from "../../layout/Screen";
import initialRestaurants from "../../../data/Restaurants";
import RestaurantList from "../../entity/Admin/RestaurantList";
import { useState } from "react";
import { CircularButton, CircularButtonTray } from "../../UI/Buttons";

const RestaurantListScreen = ({ navigation }) => {
  //Initialisations
  LogBox.ignoreLogs([
    `Non-serializable values were found in the navigation state`,
  ]);

  //State
  const [restaurants, setRestaurants] = useState(initialRestaurants);

  //Handlers

  const goToViewScreen = (restaurant) =>
    navigation.navigate("UserRestaurantViewScreen", {
      restaurant,
    });

  return (
    <Screen>
      <CircularButtonTray>
        <CircularButton text="Breakfast" />
        <CircularButton text="Lunch" />
        <CircularButton text="Dinner" />
        <CircularButton text="Dessert" />
      </CircularButtonTray>
      <RestaurantList restaurants={restaurants} onSelect={goToViewScreen} />
    </Screen>
  );
  const styles = StyleSheet.create({
    container: {},
  });
};

export default RestaurantListScreen;
