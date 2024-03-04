import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import UserListScreen from "./src/components/screens/User/RestaurantListScreen";
import AdminRestaurantListScreen from "./src/components/screens/Admin/AdminRestaurantListScreen";
import AdminRestaurantViewScreen from "./src/components/screens/Admin/AdminRestaurantViewScreen";
import UserRestaurantViewScreen from "./src/components/screens/User/RestaurantViewScreen";
import RestaurantModifyScreen from "./src/components/screens/Admin/RestaurantModifyScreen";
import RestaurantAddScreen from "./src/components/screens/Admin/RestaurantAddScreen";
import FavouritesListScreen from "./src/components/screens/User/FavouritesListScreen";
import ProfileScreen from "./src/components/screens/User/ProfileScreen";
import WelcomeScreen from "./src/components/screens/WelcomeScreen";

import Icons from "./src/components/UI/Icons";
import restaurants from "./src/data/Restaurants";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const UserTabNavigator = () => (
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

    <Tab.Screen name="Restaurants" component={UserListScreen} />
    <Tab.Screen name="Favourites" component={FavouritesListScreen} />
    <Tab.Screen
      tabBarIcon={<Icons.Account />}
      name="Profile"
      component={ProfileScreen}
    />
  </Tab.Navigator>

);

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
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserListScreen"
          component={UserTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdminListScreen"
          component={AdminTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserRestaurantViewScreen"
          component={UserRestaurantViewScreen}

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
};

export default App;
