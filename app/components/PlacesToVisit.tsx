import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

const categories = [
  { id: '1', name: 'cafe', icon: require('../assets/images/cafe.png') },
  {
    id: '2',
    name: 'hotel',
    icon: require('../assets/images/hotel.png'),
  },
  {
    id: '3',
    name: 'bus station',
    icon: require('../assets/images/bus-stop.png'),
  },
  {
    id: '4',
    name: 'atm',
    icon: require('../assets/images/atm-machine.png'),
  },
  { id: '5', name: 'pharmacy', icon: require('../assets/images/pharmacy.png') },
  {
    id: '6',
    name: 'shopping center',
    icon: require('../assets/images/shopping-center.png'),
  },
];

function PlacesToVisit() {
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={tw`items-center p-4`}>
      <Image source={item.icon} style={tw`w-10 h-10`} />
    </TouchableOpacity>
  );

  return (
    <View style={tw`h-20 items-center `}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default PlacesToVisit;
