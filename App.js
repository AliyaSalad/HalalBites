import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import UserListScreen from './src/components/screens/UserListScreen';
import AdminListScreen from './src/components/screens/AdminListScreen';
import RestaurantViewScreen from './src/components/screens/RestaurantViewScreen';
import RestaurantModifyScreen from './src/components/screens/RestaurantModifyScreen';
import RestaurantAddScreen from './src/components/screens/RestaurantAddScreen';
import FavouritesListScreen from './src/components/screens/FavouritesListScreen';
import ProfileScreen from './src/components/screens/ProfileScreen';
import WelcomeScreen from './src/components/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerTitle: 'Halal Bites',
      headerStyle: { backgroundColor: '#004226' },
      headerTintColor: '#FFD166',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Tab.Screen name='Restaurants' component={UserListScreen} />
    <Tab.Screen name='Favourites' component={FavouritesListScreen} />
    <Tab.Screen name='Profile' component={ProfileScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen'>
        <Stack.Screen
          name='WelcomeScreen'
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='UserListScreen'
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='AdminListScreen'
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='RestaurantViewScreen'
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='RestaurantAddScreen'
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='RestaurantModifyScreen'
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
