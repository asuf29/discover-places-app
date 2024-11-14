import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
//import { GEOCODING_API_KEY } from '@env';
const GEOCODING_API_KEY = process.env.GEOCODING_API_KEY;

const myUniqueId = uuidv4();
console.log(myUniqueId);

const MapScreen = () => {
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

  const navigation = useNavigation();

  const handleViewDetails = () => {
    console.log('View Details button pressed');
    navigation.navigate('ViewDetails');
  };

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
              <View style={tw`p-2 mx-2 justify-center mt-2`}>
                <View style={tw`flex-row items-center justify-center`}>
                  <FontAwesome name="map-marker" size={16} color="red" />
                  <Text style={tw`font-bold ml-2 text-center`}>
                    {marker.title}
                  </Text>
                </View>
                <Text style={tw`mt-2 text-center`}>{marker.description}</Text>
                <TouchableOpacity
                  onPress={handleViewDetails}
                  style={tw`mt-2 p-2 bg-red-500 rounded-md`}
                >
                  <Text style={tw`text-white text-center font-bold`}>
                    View Details
                  </Text>
                </TouchableOpacity>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View
        style={tw`absolute top-10 left-6 right-6 p-3 rounded-lg shadow-md bg-white z-10`}
      >
        <GooglePlacesAutocomplete
          placeholder="Search for a place"
          onPress={(data, details = null) => {
            if (details && details.geometry && details.geometry.location) {
              const { lat, lng } = details.geometry.location;
              setMapRegion({
                latitude: lat,
                longitude: lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              });
            }
          }}
          query={{
            key: GEOCODING_API_KEY,
            language: 'en',
          }}
          fetchDetails={true}
          styles={{
            container: {},
            textInput: {
              backgroundColor: '#f1f1f1',
              height: 44,
              borderRadius: 10,
              paddingVertical: 5,
              paddingHorizontal: 15,
              fontSize: 16,
            },
            listView: { backgroundColor: 'white' },
          }}
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
