import { StyleSheet } from "react-native";
import Screen from "../layout/Screen.js";
import RestaurantForm from "../entity/Restaurants/RestaurantForm.js";

const RestaurantModifyScreen = ({ navigation, route }) => {
  //Initialisation----------------------------------------
  const { restaurant, onModify } = route.params;
  //State-------------------------------------------------
  //Handlers----------------------------------------------
  const handleCancel = navigation.goBack;

  //View--------------------------------------------------

  return (
    <Screen>
      <RestaurantForm
        originalRestaurant={restaurant}
        onSubmit={onModify}
        onCancel={handleCancel}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default RestaurantModifyScreen;