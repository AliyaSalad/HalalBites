import { StyleSheet, Text, View } from "react-native";
import FullWidthImage from 'react-native-fullwidth-image';


const RestaurantView = (restaurant) => {

    return (
        <View style={styles.container}>
            <FullWidthImage 
            source={{uri: restaurant.RestaurantImage }}
            style={styles.image}
            /> 
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
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
});


export default RestaurantView;