import { Alert, Image, StyleSheet, Text, Vibration, View } from "react-native";
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

  return (
    // <View style={styles.container}>
    //   {restaurant.RestuarantImage ? (
    //     <FullWidthImage style={styles.image} />
    //   ) : null}

    //   <View>
    //     <Text style={styles.text}>{restaurant.RestaurantName}</Text>
    //   </View>
    //   <ButtonTray>
    //     <Button icon={<Icons.Edit />} label="Modify" onClick={onModify} />
    //     <Button
    //       icon={<Icons.Delete />}
    //       label="Delete"
    //       onClick={requestDelete}
    //     />
    //   </ButtonTray>
    // </View>

    <View style={styles.container}>
      <Image
        source={{ uri: restaurant.RestaurantImage }}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{restaurant.RestaurantName} </Text>
      </View>
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
  // infoTray: {
  //   gap: 5,
  // },
  // text: {
  //   fontSize: 16,
  //   fontWeight: "bold",
  //   color: "white",
  // },
  // boldText: {
  //   fontSize: 16,
  //   fontWeight: "bold",
  // },
  // dimText: {
  //   color: "grey",
  // },
});

export default RestaurantView;
