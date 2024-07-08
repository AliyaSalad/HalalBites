import { useState } from "react";
import { StyleSheet } from "react-native";
import Icons from "../../UI/Icons";
import Form from "../../UI/Form";

const defaultRestaurant = {
  RestaurantId: null,
  RestaurantName: null,
  RestaurantAddress: null,
  RestaurantTelephone: null,
  Intro: null,
  RestaurantMenu: null,
  HalalStatus: null,
  Certifications: null,
  Alcohol: null,
};

const RestaurantForm = ({ originalRestaurant, onSubmit, onCancel }) => {
  //Initialisation
  defaultRestaurant.RestaurantId = Math.floor(100000 + Math.random() * 900000);

  //State
  const [restaurant, setRestaurant] = useState(
    originalRestaurant || defaultRestaurant
  );

  // Handlers
  const handleChange = (field, value) =>
    setRestaurant({ ...restaurant, [field]: value });
  const handleSubmit = () => onSubmit(restaurant);

  //View
  const submitLabel = originalRestaurant ? "Modify" : "Add";
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
        onChange={(value) => handleChange("RestaurantName", value)}
      />
      <Form.InputText
        label="Address"
        value={restaurant.RestaurantAddress}
        onChange={(value) => handleChange("RestaurantAddress", value)}
      />
      <Form.InputText
        label="Telephone"
        value={restaurant.RestaurantTelephone}
        onChange={(value) => handleChange("RestaurantTelephone", value)}
      />
      <Form.InputText
        label="About the Restaurant"
        value={restaurant.Intro}
        onChange={(value) => handleChange("Intro", value)}
      />
      <Form.InputText
        label="Menu link"
        value={restaurant.RestaurantMenu}
        onChange={(value) => handleChange("RestaurantMenu", value)}
      />
      <Form.InputSelect
        label="Halal Status"
        value={restaurant.HalalStatus}
        onChange={(value) => handleChange("HalalStatus", value)}
        options={[
          { label: "Fully Halal", value: "Fully Halal" },
          { label: "Halal Menu Available", value: "Halal Menu Available" },
          { label: "Vegetarian", value: "Vegetarian" },
          {
            label: "Halal options available",
            value: "Halal options available",
          },
        ]}
      />
      <Form.InputSelect
        label="Certifications"
        value={restaurant.Certifications}
        onChange={(value) => handleChange("Certifications", value)}
        options={[
          { label: "HFA", value: "HFA" },
          { label: "HMC", value: "HMC" },
          { label: "HAB", value: "HAB" },
        ]}
      />
      <Form.InputSelect
        label="Alcohol"
        value={restaurant.Alcohol}
        onChange={(value) => handleChange("Alcohol", value)}
        options={[
          { label: "Alcohol Free", value: "Alcohol Free" },
          { label: "Alcohol Served", value: "Alcohol Served" },
        ]}
      />
    </Form>
  );
};

const styles = StyleSheet.create({});

export default RestaurantForm;
