import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';

const PhotoDetailScreen = ({ navigation }) => {
  const route = useRoute();
  const { photo } = route.params;

  return (
    <ScrollView contentContainerStyle={tw`flex-grow`}>
      <View style={tw`flex-1 bg-white`}>
        <ImageBackground
          source={photo.image}
          style={tw`w-full h-110`}
          resizeMode="cover"
        >
          <View style={tw`flex-row justify-between items-center p-4`}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={tw`absolute top-10 left-4 z-10`}
            >
              <FontAwesome name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`absolute top-10 right-4 z-10`}>
              <FontAwesome name="heart-o" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={tw`rounded-t-3xl bg-white -mt-6 p-6`}>
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-2xl font-bold`}>{photo.title}</Text>
            <Image
              source={require('../assets/images/woman.png')}
              style={tw`w-10 h-10 rounded-full`}
            />
          </View>
          <View style={tw`flex-row justify-between items-center my-4`}>
            <View style={tw`flex-row items-center`}>
              <FontAwesome
                name="map-marker"
                size={20}
                color="red"
                style={tw``}
              />
              <Text style={tw`text-base text-gray-500 ml-2`}>
                {photo.location}
              </Text>
            </View>
            <View style={tw`flex-row items-center mx-1`}>
              <FontAwesome name="star" size={16} color="#f59e0b" />
              <Text style={tw`ml-2 text-sm text-yellow-500`}>4.7 (2498)</Text>
            </View>
          </View>
          <View style={tw``} />
          <View>
            <Text style={tw`text-lg font-bold`}>About Photo</Text>
            <Text style={tw`text-gray-500 mt-2`}>{photo.description}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PhotoDetailScreen;
