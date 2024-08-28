import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';

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
    <View style={tw`mb-4 w-1/3 p-1`}>
      <Image source={item.source} style={tw`w-full h-40 rounded-lg`} />
    </View>
  );

  return (
    <View style={tw`flex-1`}>
      <TouchableOpacity style={tw`flex-row p-2 bg-black rounded-md mx-4 mt-10`}>
        <FontAwesome name="arrow-left" size={16} color="white" />
        <Text style={tw`text-white text-center font-bold ml-2`}>
          Back to map!
        </Text>
      </TouchableOpacity>
      <Text style={tw`text-xl text-center `}>View Details Screen</Text>
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            style={tw`w-40 h-40 items-center mx-2 mb-4`}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={tw`p-4`}
      />
    </View>
  );
};

export default ViewDetails;
