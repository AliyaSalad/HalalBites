import { LogBox, StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import initialRestaurants from '../../data/Restaurants';
import RestaurantList from '../entity/Restaurants/RestaurantList';
import { useState } from 'react';
import { Button, ButtonTray, CircularButton, CircularButtonTray } from "../UI/Buttons";
import Icons from "../UI/Icons";


const RestaurantListScreen = ({ navigation }) => {

  //Initialisations
  LogBox.ignoreLogs([`Non-serializable values were found in the navigation state`]);
  
  //State
  const [restaurants, setRestaurants ]= useState(initialRestaurants);
  
  
  //Handlers
  const handleDelete = (restaurant) =>
    setRestaurants(restaurants.filter((item) => item.RestaurantId !== restaurant.RestaurantId));
  
  const handleAdd = (restaurant) => setRestaurants([...restaurants, restaurant]);
  const handleModify = (updatedRestaurant) => setRestaurants(
    restaurants.map((restaurant) => (restaurant.RestaurantId === updatedRestaurant.RestaurantId) ? updatedRestaurant : restaurant)
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
    navigation.navigate("RestaurantListScreen");
  };
  
  const goToViewScreen = (restaurant) => navigation.navigate("RestaurantViewScreen", { restaurant, onDelete, onModify });
  const goToAddScreen = () => navigation.navigate('RestaurantAddScreen', { onAdd });


  return (
    <Screen>
      <ButtonTray>
        <Button label = "Add" icon={<Icons.Add />} onClick={goToAddScreen} />
      </ButtonTray>
      <CircularButtonTray>
        <CircularButton text = "Breakfast"/>
        <CircularButton text = "Lunch"/>
        <CircularButton text = "Dinner"/>
        <CircularButton text = "Dessert"/>
      </CircularButtonTray>
      <RestaurantList restaurants={restaurants} onSelect={goToViewScreen} />
    </Screen>
  );
  const styles = StyleSheet.create({
    container: {},
  });
};

export default RestaurantListScreen;
