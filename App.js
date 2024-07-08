import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useAuth from "./hooks/useAuth";
import AdminRestaurantListScreen from "./src/components/screens/Admin/AdminRestaurantListScreen";
import AdminRestaurantViewScreen from "./src/components/screens/Admin/AdminRestaurantViewScreen";
import RestaurantModifyScreen from "./src/components/screens/Admin/RestaurantModifyScreen";
import RestaurantAddScreen from "./src/components/screens/Admin/RestaurantAddScreen";
import FavouritesListScreen from "./src/components/screens/User/FavouritesListScreen";
import ProfileScreen from "./src/components/screens/User/ProfileScreen";
import WelcomeScreen from "./src/components/screens/WelcomeScreen";
import LoginScreen from "./src/components/screens/LoginScreen";
import SignUpScreen from "./src/components/screens/SignUpScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const AdminTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerTitle: "Halal Bites",
      headerStyle: { backgroundColor: "#004226" },
      headerTintColor: "#FFD166",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Tab.Screen name="Restaurants" component={AdminRestaurantListScreen} />
    <Tab.Screen name="Favourites" component={FavouritesListScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const App = () => {
  const { user } = useAuth();
  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AdminListScreen">
          <Stack.Screen
            name="AdminListScreen"
            component={AdminTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminRestaurantViewScreen"
            component={AdminRestaurantViewScreen}
            options={{
              headerTitle: "Restaurant Details",
              headerStyle: {
                backgroundColor: "#004226",
              },
              headerTintColor: "#FFD166",
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />
          <Stack.Screen
            name="RestaurantAddScreen"
            component={RestaurantAddScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RestaurantModifyScreen"
            component={RestaurantModifyScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminListScreen"
            component={AdminTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminRestaurantViewScreen"
            component={AdminRestaurantViewScreen}
            options={{
              headerTitle: "Restaurant Details",
              headerStyle: {
                backgroundColor: "#004226",
              },
              headerTintColor: "#FFD166",
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />
          <Stack.Screen
            name="RestaurantAddScreen"
            component={RestaurantAddScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RestaurantModifyScreen"
            component={RestaurantModifyScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
