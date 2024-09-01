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
];

function ProfileScreen() {
  const renderItem = ({ item }: { item: any }) => (
    <View style={tw`w-1/2 p-1`}>
      <Image source={item} style={tw`w-full h-32 rounded-lg`} />
    </View>
  );

  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        source={require('../assets/images/turk.jpeg')}
        style={tw`w-full h-40`}
      >
        <View style={tw`flex-row items-center ml-5 mt-28`}>
          <Image
            source={require('../assets/images/asuf.jpg')}
            style={tw`w-32 h-32 rounded-full border-4 border-white`}
          />
          <View style={tw`flex-row ml-10 mt-8`}>
            <TouchableOpacity
              style={tw`bg-[#03A9F4] px-4 py-2 rounded-lg flex-row items-center mr-2`}
            >
              <Text style={tw`text-sm font-bold text-white`}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`bg-[#03A9F4] px-4 py-2 rounded-lg flex-row items-center`}
            >
              <FontAwesome name="envelope" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={tw`flex-row items-center mt-20 justify-between px-10`}>
        <View style={tw``}>
          <Text style={tw`text-lg font-bold`}>Asu Kosar</Text>
          <Text style={tw`text-base text-gray-500`}>@asukosar</Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <View style={tw`items-center mr-6`}>
            <Text style={tw`text-lg mt-1 font-bold`}>29</Text>
            <Text style={tw`text-base text-gray-500`}>Following</Text>
          </View>
          <View style={tw`items-center`}>
            <Text style={tw`text-lg mt-1 font-bold`}>10</Text>
            <Text style={tw`text-base text-gray-500`}>Followers</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={tw`justify-between`}
        style={tw`p-4 bg-red-100`}
      />
    </View>
  );
}

export default ProfileScreen;
