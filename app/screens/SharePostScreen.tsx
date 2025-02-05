import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { NavigationProp } from '@react-navigation/native';
import * as Location from 'expo-location';

function SharePostScreen({ navigation }: { navigation: NavigationProp<any> }) {
  const [images, setImages] = useState<string[]>([]);
  const [description, setDescription] = useState<string>('');
  const [location, setLocation] = useState<string | null>(null);
  const [title, setTitle] = useState<string>('');

  const pickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (result.assets) {
      setImages(result.assets.map((asset) => asset.uri));
    }
  };

  const handlePost = () => {
    console.log('Images:', images);
    console.log('Description:', description);
    console.log('Location:', location);
  };

  const pickLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }
    let { coords } = await Location.getCurrentPositionAsync({});
    setLocation(`Lat: ${coords.latitude}, Lon: ${coords.longitude}`);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`flex-row justify-between items-center p-4 mt-4`}>
        <Text style={tw`text-lg font-semibold ml-8`}>New Post</Text>
        <TouchableOpacity onPress={handlePost}>
          <Text style={tw`text-blue-500 text-lg font-bold`}>Share</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={tw`flex-1 p-4`}>
        <View style={tw`items-center`}>
          {images.length > 0 ? (
            <ScrollView horizontal>
              {images.map((uri, index) => (
                <Image
                  key={index}
                  source={{ uri }}
                  style={tw`w-40 h-40 mr-2 rounded-lg`}
                />
              ))}
            </ScrollView>
          ) : (
            <TouchableOpacity
              onPress={pickImages}
              style={tw`w-50 h-50 bg-gray-300 rounded-lg justify-center items-center`}
            >
              <Text style={tw`text-gray-500`}>Add Image</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={tw`mt-2 rounded-t-3xl p-6`}>
          <Text style={tw`text-lg font-bold`}>Title</Text>
          <TextInput
            placeholder="Add a title..."
            value={title}
            onChangeText={setTitle}
            multiline
            style={tw`p-2 mt-4 text-gray-500 border rounded-lg border-gray-300`}
          />
        </View>

        <View style={tw`mt-2 rounded-t-3xl p-6`}>
          <Text style={tw`text-lg font-bold`}>Description</Text>
          <TextInput
            placeholder="Add a description..."
            value={description}
            onChangeText={setDescription}
            multiline
            style={tw`p-2 mt-4 text-gray-500 border rounded-lg border-gray-300`}
          />
        </View>

        <View
          style={tw`flex-row justify-between items-center p-6 rounded-t-3xl mt-2`}
        >
          <View style={tw`flex-row items-center`}>
            <FontAwesome name="map-marker" size={24} color="red" />
            <TouchableOpacity onPress={pickLocation}>
              <Text style={tw`font-bold text-lg ml-2`}>Add Location</Text>
            </TouchableOpacity>
          </View>
        </View>

        {location && (
          <Text style={tw`text-gray-600 text-center mt-2`}>{location}</Text>
        )}
      </ScrollView>
    </View>
  );
}

export default SharePostScreen;
