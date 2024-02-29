import { StyleSheet, View, Text } from "react-native";
import { WelcomeButton, WelcomeButtonTray } from "../UI/Buttons";
import Screen from "../layout/Screen";

const WelcomeScreen = ({navigation}) => {

    const goToRestaurantList = () => {navigation.navigate("RestaurantListScreen")};

    return(
        <Screen>
            <View>
                <Text style={styles.title}>Halal Bites</Text>
            </View>
            <View style={styles.container}>
                <WelcomeButtonTray>
                    <WelcomeButton 
                    label='User' 
                    onClick={goToRestaurantList}
                    />
                    <WelcomeButton 
                    label='Admin'
                    onPress={() => navigation.navigate('Admin')}
                    />
                </WelcomeButtonTray>

            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        color: '#FFD166',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
export default WelcomeScreen;