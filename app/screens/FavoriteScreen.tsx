import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const photos = [
  {
    id: 1,
    image: require('../assets/images/beach.jpeg'),
    title: 'Beach',
    location: 'Turkey',
    description:
      'A beautiful beach in Turkey with clear waters and golden sand.',
  },
  {
    id: 2,
    image: require('../assets/images/Cappadocia.jpeg'),
    title: 'Cappadocia',
    location: 'Turkey',
    description:
      'Cappadocia, famous for its fairy chimneys and hot air balloons.',
  },
  {
    id: 3,
    image: require('../assets/images/santorini.jpeg'),
    title: 'Santorini',
    location: 'Greece',
    description:
      'Santorini, known for its stunning sunsets and whitewashed buildings.',
  },
  {
    id: 4,
    image: require('../assets/images/pamukkale.jpeg'),
    title: 'Pamukkale',
    location: 'Turkey',
    description:
      'Pamukkale, famous for its hot springs and terraces of white mineral-rich deposits.',
  },
];

function FavoriteScreen() {
  const navigation = useNavigation();

  const handlePhotoPress = (photo: any) => {
    navigation.navigate('PhotoDetail', { photo });
  };

  const renderItem = ({ item }) => (
    <View style={tw`w-1/2 p-1`}>
      <View style={tw`relative`}>
        <TouchableOpacity onPress={() => handlePhotoPress(item)}>
          <Image source={item.image} style={tw`w-full h-60 rounded-lg`} />
        </TouchableOpacity>
        <TouchableOpacity style={tw`absolute bottom-2 right-2`}>
          <FontAwesome name="heart" size={14} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={tw`text-sm font-semibold mt-2`}>{item.title}</Text>
      <View style={tw`flex-row items-center mt-1`}>
        <FontAwesome name="map-marker" size={14} color="red" />
        <Text style={tw`text-xs text-gray-700 ml-1`}>{item.location}</Text>
      </View>
    </View>
  );

  return (
    <View style={tw`flex-1 items-center justify-center mt-15`}>
      <Text style={tw`font-semibold text-lg`}>Your favorite posts</Text>
      <View style={tw`mt-5`}>
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
