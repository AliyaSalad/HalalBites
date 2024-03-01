import { ScrollView, StyleSheet } from "react-native";
import RestaurantItem from "./RestaurantItem";

const RestaurantList = ({ restaurants, onSelect }) => {
  return (
    <ScrollView style={styles.container}>
      {restaurants.map((restaurant) => {
        return (
          <RestaurantItem
            key={restaurant.RestaurantId}
            restaurant={restaurant}
            onSelect={onSelect}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default RestaurantList;
