import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MapView, { Marker, Callout } from 'react-native-maps';
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

  const [markers, setMarkers] = useState([
    {
      id: 1,
      title: 'Pamukkale, Denizli',
      description: 'This is a description of favorite place 1.',
      coordinate: {
        latitude: 37.9242,
        longitude: 29.1187,
      },
    },
    {
      id: 2,
      title: 'Denizli, Turkey',
      description: 'This is a description of favorite place 2.',
      coordinate: {
        latitude: 37.7765,
        longitude: 29.0864,
      },
    },
  ]);

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
      <MapView style={styles.map} region={mapRegion}>
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          >
            <Callout>
              <View style={tw`p-2`}>
                <View style={tw`flex-row items-center mr-2 `}>
                  <FontAwesome name="map-marker" size={16} color="red" />
                  <Text style={tw`font-bold ml-2`}>{marker.title}</Text>
                </View>
                <Text style={tw`mt-2`}>{marker.description}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View
        style={tw`absolute top-12 left-8 right-8 flex-row items-center p-2 rounded-md shadow-md bg-white`}
      >
        <TouchableOpacity>
          <FontAwesome name="search" size={16} color="black" />
        </TouchableOpacity>
        <TextInput
          placeholder="Search on map..."
          style={tw`flex-1 text-black ml-2`}
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
});

export default MapScreen;
