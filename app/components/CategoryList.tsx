import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

const categories = [
  { id: '1', name: 'Camping', icon: require('../assets/images/camping.png') },
  {
    id: '2',
    name: 'Beach',
    icon: require('../assets/images/swimming.png'),
  },
  {
    id: '3',
    name: 'Hiking',
    icon: require('../assets/images/hiking.png'),
  },
  {
    id: '4',
    name: 'Mountain',
    icon: require('../assets/images/mountain.png'),
  },
  { id: '5', name: 'City', icon: require('../assets/images/buildings.png') },
];

const CategoryList = () => {
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={tw`items-center p-4`}>
      <Image source={item.icon} style={tw`w-10 h-10`} />
      <Text style={tw`text-sm mt-2`}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={tw`h-30 items-center `}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryList;
