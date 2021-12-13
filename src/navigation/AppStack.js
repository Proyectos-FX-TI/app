import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ExploreScreen } from '../screens/ExploreScreen';
import { ProductsScreen } from '../screens/ProductsScreen';
import { DetailPostScreen } from '../screens/DetailPostScreen';
import {SearchScreen} from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ProfileStack = ({ navigation, route }) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Perfil" 
        component={ProfileScreen}
        initialParams={{ user: route.params.user }} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditPerfil"
        component={EditProfileScreen}
        options={{
          headerTitle: 'Editar Perfil',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="DetailPost" 
        component={DetailPostScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
);

const MapsStack = ({ navigation, route }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Perfil" 
      component={MapScreen}
      initialParams={{ user: route.params.user }} 
      options={{
        headerShown: true,
        headerTitle: 'Mapa',
        headerTitleAlign: 'center',
      }}
    />
  </Stack.Navigator>
);

const ExploreStack = ({ navigation, route }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="ExploreScreen" 
      component={ExploreScreen}
      options={{
        headerShown: true,
        headerTitle: 'Mapa',
        headerTitleAlign: 'center',
      }}
    />
  </Stack.Navigator>
);

const ProductStack = ({ navigation, route }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProductsScreen" 
      component={ProductsScreen}
      options={{
        headerShown: false,
        headerTitle: 'Productos',
        headerTitleAlign: 'center',
      }}
    />
  </Stack.Navigator>
);


const SearchStack = ({ navigation, route }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProductsScreen" 
      component={SearchScreen}
      options={{
        headerShown: false,
        headerTitle: 'Buscar productos',
        headerTitleAlign: 'center',
      }}
    />
  </Stack.Navigator>
);


export default function AppStack(props) {
  const { user } = props;
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Perfil">
        <Drawer.Screen 
        name="Perfil" 
        component={ProfileStack}
        initialParams={{ user: user }}
        options={{
            tabBarIcon: () => (
              <FontAwesome5 name="user"/>
            ),
        }}
        />
        <Drawer.Screen 
        name="Mapa" 
        component={MapsStack}
        initialParams={{ user: user }}
        options={{
            tabBarIcon: () => (
              <FontAwesome5 name="map"/>
            ),
        }}
        />
        <Drawer.Screen 
        name="ExploreScreen" 
        component={ExploreStack}
        options={{
            tabBarIcon: () => (
              <FontAwesome5 name="map"/>
            ),
        }}
        />
         <Drawer.Screen 
        name="ProductsScreen" 
        component={ProductStack}
        options={{
            tabBarIcon: () => (
              <FontAwesome5 name="map"/>
            ),
        }}
        />
         <Drawer.Screen 
        name="SearchScreen" 
        component={SearchStack}
        options={{
            tabBarIcon: () => (
              <FontAwesome5 name="map"/>
            ),
        }}
        />
     
      </Drawer.Navigator>
    </NavigationContainer>
  );
};