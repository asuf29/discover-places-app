import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const TopTripsList = [
  {
    id: '1',
    name: 'Asu',
    location: 'İstanbul, Turkey',
    category: 'camping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/images/travel1.jpeg'),
  },
  {
    id: '2',
    name: 'Asu',
    location: 'Amsterdam, Netherlands',
    category: 'camping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/images/travel3.jpeg'),
  },
  {
    id: '3',
    name: 'Asu',
    location: 'Roma, Italy',
    category: 'camping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/images/travel2.jpeg'),
  },
  {
    id: '4',
    name: 'Asu',
    location: 'Paris, France',
    category: 'camping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/images/travel4.jpeg'),
  },
  {
    id: '5',
    name: 'Asu',
    location: 'İstanbul, Turkey',
    category: 'camping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/images/travel5.jpeg'),
  },
];

function TopTrips() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const handleTopTripDetails = () => {
      navigation.navigate('TopTrips', { trip: item });
    };

    return (
      <TouchableOpacity
        onPress={handleTopTripDetails}
        style={tw`items-start p-4`}
      >
        <Image source={item.image} style={tw`w-30 h-30 rounded-lg`} />
        <Text style={tw`text-sm mt-2 font-bold`}>{item.name}</Text>
        <Text style={tw`text-sm text-gray-400`}>{item.category}</Text>
      </TouchableOpacity>
    );
  };

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
