import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import tw from 'twrnc';

const MapScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    };

    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion} />
      <View
        style={tw`absolute top-12 left-8 right-8 flex-row items-center p-2 rounded-md shadow-md h-10 bg-transparent border border-gray-200`}
      >
        <TouchableOpacity style={tw``}>
          <FontAwesome name="search" size={16} color="white" />
        </TouchableOpacity>
        <TextInput
          placeholder="Search for places..."
          style={tw`flex-1 text-stone-950 ml-2`}
          value={searchQuery}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
  },
});

export default MapScreen;
