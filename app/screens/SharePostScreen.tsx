import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { NavigationProp } from '@react-navigation/native';
import axios from 'axios';
import * as Location from 'expo-location';

function SharePostScreen({ navigation }: { navigation: NavigationProp<any> }) {
  const [image, setImage] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');
  const [location, setLocation] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
      console.log('Selected Image URI:', result.assets[0].uri);
    }
  };

  const handlePost = () => {
    console.log('Image:', image);
    console.log('Description:', description);
    console.log('Location:', location);
  };

  const pickLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let { coords } = await Location.getCurrentPositionAsync({});
    setLocation(`Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <View
        style={tw`flex-row justify-between items-center p-4 border-b border-gray-200 mt-4`}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={tw`text-lg font-semibold ml-8`}>New Post</Text>
        <TouchableOpacity onPress={handlePost}>
          <Text style={tw`text-blue-500 text-lg font-semibold`}>Share</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={tw`flex-1 p-4`}>
        <View style={tw`items-center`}>
          {image ? (
            <TouchableOpacity onPress={pickImage}>
              <Image source={{ uri: image }} style={tw`w-50 h-50 rounded-lg`} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={pickImage}
              style={tw`w-50 h-50 bg-gray-300 rounded-lg justify-center items-center`}
            >
              <Text style={tw`text-gray-500`}>Add Image</Text>
            </TouchableOpacity>
          )}
        </View>
        {/* <View style={tw`flex-row justify-between items-end`}>
          <FlatList
            data={image ? [{ uri: image }] : []}
            keyExtractor={(item) => item.uri}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.uri }}
                style={tw`w-40 h-40 rounded-lg`}
              />
            )}
          />
          <TouchableOpacity
            onPress={pickImage}
            style={tw`bg-blue-500 p-2 w-10 h-10 rounded-full mt-4 items-center justify-center`}
          >
            <Text style={tw`text-white font-bold text-lgr`}>+</Text>
          </TouchableOpacity>
        </View> */}
        <View style={tw`mt-4 p-4`}>
          <Text style={tw`text-sm font-semibold`}>Description</Text>
          <TextInput
            placeholder="Add a description..."
            value={description}
            onChangeText={setDescription}
            multiline
            style={tw`p-2 mt-4 text-gray-500`}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: 'gray',
          }}
        />
        <View style={tw`flex-row justify-between items-center mt-2 p-4`}>
          <View style={tw`flex-row items-center`}>
            <FontAwesome name="map-marker" size={24} color="black" />
            <TouchableOpacity onPress={pickLocation}>
              <Text style={tw`font-medium ml-2`}>Add Location</Text>
            </TouchableOpacity>
          </View>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </View>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: 'gray',
          }}
        />
      </ScrollView>
    </View>
  );
}

export default SharePostScreen;
