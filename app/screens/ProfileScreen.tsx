import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import tw from 'twrnc';

const photos = [
  {
    id: 1,
    image: require('../assets/images/beach.jpeg'),
  },
  {
    id: 2,
    image: require('../assets/images/Cappadocia.jpeg'),
  },
  {
    id: 3,
    image: require('../assets/images/santorini.jpeg'),
  },
  {
    id: 4,
    image: require('../assets/images/pamukkale.jpeg'),
  },
  {
    id: 5,
    image: require('../assets/images/beach.jpeg'),
  },
  {
    id: 6,
    image: require('../assets/images/Cappadocia.jpeg'),
  },
];

function ProfileScreen() {
  const renderItem = ({ item }: { item: any }) => (
    <View style={tw`w-1/2 p-1`}>
      <Image source={item} style={tw`w-full h-60 rounded-lg`} />
    </View>
  );

  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        source={require('../assets/images/beach.jpeg')}
        style={tw`w-full h-40`}
      >
        <View style={tw`items-end mt-8 px-5`}>
          <TouchableOpacity>
            <FontAwesome name="ellipsis-v" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={tw`items-center mt-10`}>
          <View style={tw`items-center justify-between w-full px-10`}>
            <Image
              source={require('../assets/images/asuf.jpg')}
              style={tw`w-32 h-32 rounded-full border-4 border-white`}
            />
            <View>
              <Text style={tw`text-lg font-bold`}>Asu Kosar</Text>
              <Text style={tw`text-base text-gray-500`}>@asukosar</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={tw`flex-row items-center mt-30 justify-around px-2`}>
        <View style={tw`items-center`}>
          <Text style={tw`text-lg mt-1 font-bold`}>29</Text>
          <Text style={tw`text-base text-gray-500`}>Following</Text>
        </View>
        <View style={tw`items-center mr-4`}>
          <Text style={tw`text-lg mt-1 font-bold`}>10</Text>
          <Text style={tw`text-base text-gray-500`}>Followers</Text>
        </View>
        <View style={tw`items-center`}>
          <Text style={tw`text-lg mt-1 font-bold`}>2001</Text>
          <Text style={tw`text-base text-gray-500`}>Photos</Text>
        </View>
      </View>
      <View style={tw`mt-5 px-8`}>
        <FlatList
          data={photos.map((photo) => photo.image)}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          numColumns={2}
        />
      </View>
    </View>
  );
}

export default ProfileScreen;
