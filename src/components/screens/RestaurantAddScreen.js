import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import RestaurantForm from '../entity/Restaurants/RestaurantForm';



const RestaurantAddScreen = ({navigation, route}) => {
//Initialisation
  const { onAdd } = route.params;


//State


//Handlers

  const handleCancel = navigation.goBack;


  //View
  return (
    <Screen>
      <RestaurantForm onSubmit={onAdd}  onCancel={handleCancel} />
      
    </Screen>
  );
};

const styles = StyleSheet.create({
  
});


export default RestaurantAddScreen;
