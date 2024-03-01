import { useState } from 'react';
import { StyleSheet } from "react-native";
import Icons from "../../UI/Icons";
import Form from '../../UI/Form';

const defaultRestaurant = {
    RestaurantId: null, 
    RestaurantName: null,
  };

const RestaurantForm = ({ originalRestaurant, onSubmit, onCancel }) => {
  //Initialisation
  defaultRestaurant.RestaurantId = Math.floor(100000 + Math.random() * 900000);



  //State
  const [restaurant, setRestaurant] = useState(originalRestaurant || defaultRestaurant);


  // Handlers
  const handleChange = (field, value) => setRestaurant({...restaurant, [field]: value});
  const handleSubmit = () => onSubmit(restaurant);

  //View
  const submitLabel = originalRestaurant ? 'Modify' : 'Add';
  const submitIcon = originalRestaurant ? <Icons.Edit /> : <Icons.Add />;

  return (

    <Form
        onSubmit={handleSubmit}
        onCancel={onCancel}
        submitLabel={submitLabel}
        submitIcon={submitIcon}
    >
        <Form.InputText 
            label="Restaurant Name"
            value={restaurant.RestaurantName}
            onChange={(value) =>handleChange('RestaurantName',value)} 
             />

    </Form>
  );
};

const styles = StyleSheet.create({
    
});

export default RestaurantForm;