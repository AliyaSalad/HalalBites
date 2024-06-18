import {
  Alert,
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";

import { useState } from "react";

import FullWidthImage from "react-native-fullwidth-image";
import { AboutButton, Button, ButtonTray } from "../../UI/Buttons.js";
import Icons from "../../UI/Icons";

const RestaurantView = ({ restaurant, onDelete, onModify }) => {
  //Initialisation
  //State
  const [activeSection, setActiveSection] = useState("About");
  //Handlers

  const handleDelete = () => {
    Vibration.vibrate(500);
    onDelete(restaurant);
  };

  const requestDelete = () =>
    Alert.alert(
      "Delete warning",
      `Are you sure that you want to delete  ${restaurant.RestaurantName}`,
      [{ text: "Cancel" }, { text: "Delete", onPress: handleDelete }]
    );

  const openMenu = () => {
    Linking.openURL(restaurant.RestaurantMenu).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case "About":
        return (
          <ScrollView style={styles.aboutContainer}>
            <Text style={styles.boldText}> About: </Text>
            <Text style={styles.text}>{restaurant.Intro} </Text>
            <Text style={styles.boldText}>Halal Status:</Text>
            <Text style={styles.text}>{restaurant.HalalStatus} </Text>
            <Text style={styles.boldText}>Certifications:</Text>
            <Text style={styles.text}>{restaurant.Certifications} </Text>
            <Text style={styles.boldText}>Alcohol:</Text>
            <Text style={styles.text}>{restaurant.Alcohol} </Text>
          </ScrollView>
        );
      case "Photos":
        return (
          <View style={styles.photosContainer}>
            {
              /* {restaurant.Photos.map((photo, index) => (
              <Image key={index} source={{ uri: photo }} style={styles.photo} />
            ))} */
              <Text style={styles.text}>Photos go here...</Text>
            }
          </View>
        );
      case "Review":
        return (
          <View style={styles.reviewContainer}>
            <Text style={styles.text}>User reviews go here...</Text>
          </View>
        );
      default:
        return null;
    }
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
          <Text style={styles.mainText}>{restaurant.RestaurantAddress} </Text>
        </Text>
        <Text>
          <Text style={styles.boldText}> Telephone Number: </Text>
          <Text style={styles.mainText}>{restaurant.RestaurantTelephone} </Text>
        </Text>
        <Text>
          <Text style={styles.boldText}> Menu: </Text>
          <TouchableOpacity onPress={openMenu}>
            <Text style={styles.mainText}> {restaurant.RestaurantMenu} </Text>
          </TouchableOpacity>
        </Text>
        <View style={styles.buttonContainer}>
          <ButtonTray>
            <AboutButton
              label="About"
              onClick={() => setActiveSection("About")}
              isActive={activeSection === "About"}
            />
            <AboutButton
              label="Photos"
              onClick={() => setActiveSection("Photos")}
              isActive={activeSection === "Photos"}
            />
            <AboutButton
              label="Review"
              onClick={() => setActiveSection("Review")}
              isActive={activeSection === "Review"}
            />
          </ButtonTray>
          {renderContent()}
        </View>
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
    flex: 1,
  },
  aboutContainer: {
    margin: 15,
    backgroundColor: "white",
  },
  buttonContainer: {
    padding: 5,
    marginTop: 5,
    backgroundColor: "white",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
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
  titleContainer: {},
  boldText: {
    fontSize: 16,
    fontWeight: "bold",

    color: "#FFD166",
  },
  mainText: {
    fontSize: 14,
    fontWeight: "600",

    margin: 4,
    marginLeft: 5,
    color: "white",
  },
});

export default RestaurantView;
