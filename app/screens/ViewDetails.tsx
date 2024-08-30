import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';
import BackPageRedirect from '../components/BackPageRedirect';

const ViewDetails = () => {
  const photos = [
    {
      id: 1,
      source: require('../assets/images/asuf.jpg'),
    },
    {
      id: 2,
      source: require('../assets/images/asuf.jpg'),
    },
    {
      id: 3,
      source: require('../assets/images/asuf.jpg'),
    },
    {
      id: 4,
      source: require('../assets/images/asuf.jpg'),
    },
    {
      id: 5,
      source: require('../assets/images/asuf.jpg'),
    },
  ];

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={tw`mb-4 w-1/3 p-1`}>
      <Image source={item.source} style={tw`w-full h-40 rounded-lg`} />
    </TouchableOpacity>
  );

  return (
    <View style={tw`flex-1`}>
      <Text>View Details</Text>
      <BackPageRedirect />
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            style={tw`w-40 h-40 items-center mx-2 mb-2`}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={tw`p-4 pt-20`}
      />
    </View>
  );
};

export default ViewDetails;
