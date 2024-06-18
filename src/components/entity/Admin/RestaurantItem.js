import { Pressable, StyleSheet, Text, View } from "react-native";

const RestaurantItem = ({ restaurant, onSelect }) => {
  return (
    <Pressable onPress={() => onSelect(restaurant)}>
      <View style={styles.item}>
        <Text style={styles.Text}>{restaurant.RestaurantName}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderButtonWidth: 1,
    borderColor: "white",
  },
  Text: {
    color: "white",
  },
});
export default RestaurantItem;
