import {
  Alert,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import { Button, ButtonTray } from "../../UI/Buttons.js";
import Icons from "../../UI/Icons";

const RestaurantView = ({ restaurant, onDelete, onModify }) => {
  //Initialisation
  //State
  //Handlers

  const handleDelete = () => {
    Vibration.vibrate(500);
    onDelete(restaurant);
  };

  const requestDelete = () =>
    Alert.alert(
      "Delete warning",
      `Are you sure that you want to delete Restaurant ${restaurant.RestaurantId} ${restaurant.RestaurantName}`,
      [{ text: "Cancel" }, { text: "Delete", onPress: handleDelete }]
    );

  const openMenu = () => {
    Linking.openURL(restaurant.RestaurantMenu).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: restaurant.RestaurantImage }}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{restaurant.RestaurantName} </Text>
      </View>
      <View>
        <Text>
          <Text style={styles.boldText}> Address: </Text>
          <Text style={styles.text}>{restaurant.RestaurantAddress} </Text>
        </Text>
        <Text>
          <Text style={styles.boldText}> Telephone Number: </Text>
          <Text style={styles.text}>{restaurant.RestaurantTelephone} </Text>
        </Text>
        <Text>
          <Text style={styles.boldText}> Menu: </Text>
          <TouchableOpacity onPress={openMenu}>
            <Text style={styles.text}> View </Text>
          </TouchableOpacity>
        </Text>
      </View>
      <View style={styles.restaurantContainer}></View>
      <ButtonTray>
        <Button icon={<Icons.Edit />} label="Modify" onClick={onModify} />
        <Button
          icon={<Icons.Delete />}
          label="Delete"
          onClick={requestDelete}
        />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // gap: 15,
    flex: 1,
  },
  image: {
    borderRadius: 7,
    flex: 5,
    maxHeight: 280,
  },
  title: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  titleContainer: {
    paddingBottom: 5,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
    // textTransform: "uppercase",
    color: "#FFD166",
  },
  text: {
    fontSize: 14,
    margin: 4,
    marginLeft: 5,
    color: "white",
  },
});

export default RestaurantView;
