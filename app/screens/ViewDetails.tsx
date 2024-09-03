import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';
import BackPageRedirect from '../components/BackPageRedirect';

const ViewDetails = () => {
  const photos = [
    {
      id: 1,
      source: require('../assets/images/pamukkale.jpeg'),
    },
    {
      id: 2,
      source: require('../assets/images/pamukkale.jpeg'),
    },
    {
      id: 3,
      source: require('../assets/images/pamukkale.jpeg'),
    },
    {
      id: 4,
      source: require('../assets/images/pamukkale.jpeg'),
    },
    {
      id: 5,
      source: require('../assets/images/pamukkale.jpeg'),
    },
    {
      id: 6,
      source: require('../assets/images/pamukkale.jpeg'),
    },
  ];

  const renderItem = ({ item }: { item: any }) => (
    <View style={tw`w-1/2 p-1`}>
      <Image source={item.source} style={tw`w-full h-60 rounded-lg`} />
    </View>
  );

  return (
    <View style={tw`flex-1`}>
      <BackPageRedirect />
      <View style={tw`mt-20 px-8`}>
        <FlatList
          data={photos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default ViewDetails;
