import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MapScreen from './screens/MapScreen';
import SharePostScreen from './screens/SharePostScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import ProfileScreen from './screens/ProfileScreen';
import ViewDetails from './screens/ViewDetails';
import EditProfileScreen from './screens/EditProfileScreen';
import TopTripsDetails from './screens/TopTripsDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Ionicons
              name="home-outline"
              color="#000000"
              size={30}
              style={tw`flex justify-center items-center h-full mt-4`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="map"
        component={MapScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Ionicons
              name="map-outline"
              color="#000000"
              size={30}
              style={tw`flex justify-center items-center h-full mt-4`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="sharePost"
        component={SharePostScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Ionicons
              name="add-circle-outline"
              color="#000000"
              size={35}
              style={tw`flex justify-center items-center h-full mt-2`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="favPost"
        component={FavoriteScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Ionicons
              name="heart-outline"
              color="#000000"
              size={30}
              style={tw`flex justify-center items-center h-full mt-4`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Ionicons
              name="person-circle-outline"
              color="#000000"
              size={30}
              style={tw`flex justify-center items-center h-full mt-4`}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen">
          {() => <MainTabNavigator />}
        </Stack.Screen>
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="SharePost" component={SharePostScreen} />
        <Stack.Screen name="Favorite" component={FavoriteScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="ViewDetails" component={ViewDetails} />
        <Stack.Screen name="TopTrips" component={TopTripsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
