import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RestaurantItem from "./RestaurantItem";
import { Card, CardImage } from "react-native-material-cards";
import restaurants from "../../../data/Restaurants";

const RestaurantList = ({ restaurants, onSelect }) => {
  return (
    <View style={styles.restaurantContainer}>
      {restaurants.map((restaurant) => (
        <TouchableOpacity
          key={restaurant.RestaurantId}
          style={styles.restaurantCard}
          onPress={() => onSelect(restaurant)}
        >
          <Image
            style={styles.cardImage}
            source={{ uri: restaurant.RestaurantImage }}
          />
          <Text style={styles.cardTitle}> {restaurant.RestaurantName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 100,
    resizeMode: "cover",
    width: "100%",
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: "bold",
    padding: 5,
    textAlign: "left",
    color: "white",
    backgroundColor: "#0A715D",
  },
  restaurantCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: "100%",
  },
  restaurantContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 5,
  },
});

export default RestaurantList;
