import { StyleSheet } from "react-native";
import { useState } from "react";
import Screen from "../../layout/Screen";
import initialRestaurants from "../../../data/Restaurants";
import RestaurantList from "../../entity/Admin/RestaurantList";
import { Button, ButtonTray } from "../../UI/Buttons";
import Icons from "../../UI/Icons";

const AdminRestaurantListScreen = ({ navigation }) => {
  //Initialisations

  //State
  const [restaurants, setRestaurants] = useState(initialRestaurants);

  //Handlers
  const handleDelete = (restaurant) =>
    setRestaurants(
      restaurants.filter(
        (item) => item.RestaurantId !== restaurant.RestaurantId
      )
    );

  const handleAdd = (restaurant) =>
    setRestaurants([...restaurants, restaurant]);
  const handleModify = (updatedRestaurant) =>
    setRestaurants(
      restaurants.map((restaurant) =>
        restaurant.RestaurantId === updatedRestaurant.RestaurantId
          ? updatedRestaurant
          : restaurant
      )
    );

  const onDelete = (restaurant) => {
    handleDelete(restaurant);
    navigation.goBack();
  };

  const onAdd = (restaurant) => {
    handleAdd(restaurant);
    navigation.goBack();
  };

  const onModify = (restaurant) => {
    handleModify(restaurant);
    navigation.navigate("AdminListScreen");
  };

  const goToViewScreen = (restaurant) =>
    navigation.navigate("AdminRestaurantViewScreen", {
      restaurant,
      onDelete,
      onModify,
    });
  const goToAddScreen = () =>
    navigation.navigate("RestaurantAddScreen", { onAdd });

  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={goToAddScreen} />
      </ButtonTray>
      <RestaurantList restaurants={restaurants} onSelect={goToViewScreen} />
    </Screen>
  );
  const styles = StyleSheet.create({
    container: {},
  });
};

export default AdminRestaurantListScreen;
