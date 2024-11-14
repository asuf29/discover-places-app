import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const photos = [
  {
    id: 1,
    image: require('../assets/images/beach.jpeg'),
    name: 'Beach',
    location: 'Turkey',
  },
  {
    id: 2,
    image: require('../assets/images/Cappadocia.jpeg'),
    name: 'Cappadocia',
    location: 'Turkey',
  },
  {
    id: 3,
    image: require('../assets/images/santorini.jpeg'),
    name: 'Santorini',
    location: 'Greece',
  },
  {
    id: 4,
    image: require('../assets/images/pamukkale.jpeg'),
    name: 'Pamukkale',
    location: 'Turkey',
  },
  {
    id: 5,
    image: require('../assets/images/beach.jpeg'),
    name: 'Beach',
    location: 'Turkey',
  },
  {
    id: 6,
    image: require('../assets/images/Cappadocia.jpeg'),
    name: 'Cappadocia',
    location: 'Turkey',
  },
  {
    id: 7,
    image: require('../assets/images/santorini.jpeg'),
    name: 'Santorini',
    location: 'Greece',
  },
  {
    id: 8,
    image: require('../assets/images/pamukkale.jpeg'),
    name: 'Pamukkale',
    location: 'Turkey',
  },
  {
    id: 9,
    image: require('../assets/images/beach.jpeg'),
    name: 'Beach',
    location: 'Turkey',
  },
  {
    id: 10,
    image: require('../assets/images/Cappadocia.jpeg'),
    name: 'Cappadocia',
    location: 'Turkey',
  },
];

function FavoriteScreen() {
  const renderItem = ({ item }: { item: any }) => (
    <View style={tw`w-1/2 p-1`}>
      <View style={tw`relative`}>
        <Image source={item.image} style={tw`w-full h-40 rounded-lg`} />
        <TouchableOpacity style={tw`absolute bottom-2 right-2`}>
          <FontAwesome name="heart" size={14} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={tw`text-sm font-semibold mt-2`}>{item.name}</Text>
      <View style={tw`flex-row items-center mt-1`}>
        <FontAwesome name="map-marker" size={14} color="red" />
        <Text style={tw`text-xs text-gray-700 ml-1`}>{item.location}</Text>
      </View>
    </View>
  );

  return (
    <View style={tw`flex-1 items-center justify-center mt-15`}>
      <Text style={tw`font-semibold text-lg`}>Your favorite posts</Text>
      <View style={tw`mt-5 px-8`}>
        <FlatList
          data={photos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
}

export default FavoriteScreen;
