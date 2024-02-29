import { Alert, StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import { Button, ButtonTray } from "../../UI/Buttons.js";
import Icons from "../../UI/Icons";

const RestaurantView = ({ restaurant, onDelete, onModify }) => {
//Initialisation
//State
//Handlers

    const handleDelete= () => onDelete(restaurant);

    const requestDelete = () => Alert.alert(
        'Delete warning',
        `Are you sure that you want to delete Restaurant ${restaurant.RestaurantId} ${restaurant.RestaurantName}`,
        [
            {text: 'Cancel' },
            {text: 'Delete', onPress: handleDelete }
        ]
    );

   
    return (
            <View style={styles.container}>
                {restaurant.RestuarantImage ? (
                    <FullWidthImage 
                        style={styles.image}
                    />
                ) : null}
                <View>
                    <Text style={styles.text}> 
                        {restaurant.RestaurantName}
                    </Text>
                </View>
            </View>
        );
};

const styles = StyleSheet.create({
    container: {
        gap: 15,
    },
    image: {
        borderRadius: 3,
    
    },
    infoTray: {
        gap: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'white',
    },
    boldText:{
        fontSize: 16,
        fontWeight: "bold",
    },
    dimText: {
        color: "grey",
    },
});

export default RestaurantView;