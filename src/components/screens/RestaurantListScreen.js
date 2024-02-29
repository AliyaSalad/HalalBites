import {StatusBar } from 'expo-status-bar';
import {Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import initialRestaurants from '../../data/Restaurants';
import Screen from '../layout/Screen';

const RestaurantListScreen= ({navigation}) => {
    //Initialisations
    const [recipes, setRecipes] = useState(initialRestaurants);
    //State
    //Handlers
//    const handleSelect =  () => alert('Item selected');
    //View 

    const goToViewScreen = (restaurant) => navigation.navigate("RestaurantViewScreen", { restaurant });
  

    return (
        <Screen>
            <ScrollView style={styles.container}>
                {recipes.map((recipe)=>{
                    return(
                        <Pressable key={recipe.RestaurantId} onPress={goToViewScreen}>
                            <View  style={styles.item}>
                                <Text style={styles.text}>
                                    {recipe.RestaurantName}
                                </Text>
                            </View>
                        </Pressable>
                    );
                })}
            </ScrollView>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {},
    item: {
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: 'lightgray',
    },
    text: {
        fontSize: 16,
        color: 'white',
    },
});

export default RestaurantListScreen;