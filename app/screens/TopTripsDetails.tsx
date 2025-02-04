import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import tw from 'twrnc';
import PlacesToVisit from '../components/PlacesToVisit';

function TopTripsDetails({ route, navigation }) {
  const { trip } = route.params;

  return (
    <View style={tw`flex-1 bg-white`}>
      <ImageBackground
        source={trip.image}
        style={tw`w-full h-110`}
        resizeMode="cover"
      >
        <View style={tw`flex-row justify-between items-center p-4`}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`absolute top-10 left-4 z-10`}
          >
            <FontAwesome name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={tw`absolute top-10 right-4 z-10`}>
            <FontAwesome name="heart-o" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={tw`rounded-t-3xl bg-white -mt-6 p-6`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-2xl font-bold`}>{trip.name}</Text>
          <Image
            source={require('../assets/images/asuf.jpg')}
            style={tw`w-10 h-10 rounded-full`}
          />
        </View>
        <View style={tw`flex-row justify-between items-center my-4`}>
          <View style={tw`flex-row items-center`}>
            <FontAwesome name="map-marker" size={20} color="red" style={tw``} />
            <Text style={tw`text-base text-gray-500 ml-2`}>
              {trip.location}
            </Text>
          </View>
          <View style={tw`flex-row items-center mx-1`}>
            <FontAwesome name="star" size={16} color="#f59e0b" />
            <Text style={tw`ml-2 text-sm text-yellow-500`}>4.7 (2498)</Text>
          </View>
        </View>
        <View style={tw``} />
        <PlacesToVisit />
        <View />

        <View>
          <Text style={tw`text-lg font-bold`}>About Destination</Text>
          <Text style={tw`text-base text-gray-700 mb-4`}>
            {trip.description}
          </Text>
        </View>
        <TouchableOpacity style={tw`bg-blue-500 py-3 rounded-full`}>
          <Text style={tw`text-white text-center text-base font-semibold`}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TopTripsDetails;
