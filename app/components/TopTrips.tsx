import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const TopTripsList = [
  {
    id: '1',
    name: 'Asu',
    category: 'camping',
    image: require('../assets/images/asuf.jpg'),
  },
  {
    id: '2',
    name: 'Asu',
    category: 'camping',
    image: require('../assets/images/asuf.jpg'),
  },
  {
    id: '3',
    name: 'Asu',
    category: 'camping',
    image: require('../assets/images/asuf.jpg'),
  },
  {
    id: '4',
    name: 'Asu',
    category: 'camping',
    image: require('../assets/images/asuf.jpg'),
  },
  {
    id: '5',
    name: 'Asu',
    category: 'camping',
    image: require('../assets/images/asuf.jpg'),
  },
];

function renderItem({ item }: { item: any }) {
  return (
    <TouchableOpacity style={tw`items-start p-4`}>
      <Image source={item.image} style={tw`w-25 h-25 rounded-lg`} />
      <Text style={tw`text-sm mt-2 font-bold`}>{item.name}</Text>
      <Text style={tw`text-sm text-gray-400`}>{item.category}</Text>
    </TouchableOpacity>
  );
}

function TopTrips() {
  return (
    <View style={tw`h-50 items-center`}>
      <FlatList
        data={TopTripsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default TopTrips;
