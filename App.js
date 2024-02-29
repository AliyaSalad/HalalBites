import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

const UserStack = () => (
  <Stack.Navigator
  initialRouteName='WelcomeScreen'
  screenOptions={{
    headerStyle: { backgroundColor: 'black'},
    headerTintColor: 'white'
  }}
  >
    <Stack.Screen
      name='WelcomeScreen'
      component={WelcomeScreen}
      options={{headerShown: false  }}
    />
    <Stack.Screen
      name='UserListScreen'
      component={UserListScreen}
      options={{headerShown: false  }}
    />
    <Stack.Screen
      name='AdminListScreen'
      component={AdminListScreen}
      options={{headerShown: false  }}
    />
    <Stack.Screen
      name='RestaurantViewScreen'
      component={RestaurantViewScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name='RestaurantAddScreen'
      component={RestaurantAddScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name='RestaurantModifyScreen'
      component={RestaurantModifyScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)

    
 

export const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerTitle: 'Halal Bites',
        headerStyle: {backgroundColor: '#004226' },
        headerTintColor: '#FFD166',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
      >
        
        <Tab.Screen name='Restaurants' component={UserStack} />
        <Tab.Screen name='Favourites' component={FavouritesListScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


// export const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//       screenOptions={{
//         headerTitle: 'Halal Bites',
//         headerStyle: {backgroundColor: '#004226' },
//         headerTintColor: '#FFD166',
//         headerTitleStyle: {
//           fontWeight: 'bold'
//         }
//       }}
//       >
//         <Tab.Navigator>
//           <Tab.Screen name='Restaurants' component={UserStack} />
//           <Tab.Screen name='Favourites' component={FavouritesListScreen} />
//           <Tab.Screen name='Profile' component={ProfileScreen} />
//         </Tab.Navigator>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };



export default App;