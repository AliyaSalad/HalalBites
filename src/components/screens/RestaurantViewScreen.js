import { StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";
import RestaurantView from "../entity/Restaurants/RestaurantView";

const RestaurantViewScreen = () => {
    return (
        <Screen>
            <RestaurantView />
        </Screen>
    );
};

export default RestaurantViewScreen;