import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const photos = [
  {
    id: 1,
    image: require('../assets/images/beach.jpeg'),
    title: 'Beach',
    location: 'Antalya, Turkey',
    description: 'This is a description of the beach.',
  },
  {
    id: 2,
    image: require('../assets/images/Cappadocia.jpeg'),
    title: 'Cappadocia',
    location: 'Nevsehir, Turkey',
    description: 'This is a description of Cappadocia.',
  },
  {
    id: 3,
    image: require('../assets/images/santorini.jpeg'),
    title: 'Santorini',
    location: 'Thira, Greece',
    description: 'This is a description of Santorini.',
  },
  {
    id: 4,
    image: require('../assets/images/pamukkale.jpeg'),
    title: 'Pamukkale',
    location: 'Denizli, Turkey',
    description: 'This is a description of Pamukkale.',
  },
  {
    id: 5,
    image: require('../assets/images/beach.jpeg'),
    title: 'Beach',
    location: 'Antalya, Turkey',
    description: 'This is a description of the beach.',
  },
  {
    id: 6,
    image: require('../assets/images/Cappadocia.jpeg'),
    title: 'Cappadocia',
    location: 'Nevsehir, Turkey',
    description: 'This is a description of Cappadocia.',
  },
];

function ProfileScreen() {
  const navigation = useNavigation();

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const handlePhotoPress = (photo: any) => {
    navigation.navigate('PhotoDetail', { photo });
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={tw`w-1/2 p-1`}>
      <TouchableOpacity onPress={() => handlePhotoPress(item)}>
        <Image source={item.image} style={tw`w-full h-60 rounded-lg`} />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={tw`flex-grow`}>
      <View style={tw`flex-1`}>
        <ImageBackground
          source={require('../assets/images/beach.jpeg')}
          style={tw`w-full h-40`}
          resizeMode="cover"
        >
          <View style={tw`items-end mt-8 px-5`}>
            <TouchableOpacity onPress={handleEditProfile}>
              <FontAwesome name="ellipsis-v" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={tw`items-center mt-10`}>
            <View style={tw`items-center w-full px-10`}>
              <Image
                source={require('../assets/images/asuf.jpg')}
                style={tw`w-32 h-32 rounded-full border-4 border-white`}
              />
              <View style={tw`items-center mt-2`}>
                <Text style={tw`text-lg font-bold`}>Asu Kosar</Text>
                <Text style={tw`text-base text-gray-500`}>@asukosar</Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        <View style={tw`flex-row items-center mt-34 justify-around px-2`}>
          <View style={tw`items-center`}>
            <Text style={tw`text-base font-bold`}>29</Text>
            <Text style={tw`text-sm text-gray-500`}>Following</Text>
          </View>
          <View style={tw`items-center mr-4`}>
            <Text style={tw`text-base font-bold`}>10</Text>
            <Text style={tw`text-sm text-gray-500`}>Followers</Text>
          </View>
          <View style={tw`items-center`}>
            <Text style={tw`text-base font-bold`}>2001</Text>
            <Text style={tw`text-sm text-gray-500`}>Photos</Text>
          </View>
        </View>

        <View style={tw`mt-2 px-4 pb-10`}>
          <FlatList
            data={photos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default ProfileScreen;
