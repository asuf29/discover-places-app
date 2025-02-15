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
        <Text style={tw`text-lg font-bold ml-2`}>New Post</Text>
        <TouchableOpacity onPress={handlePost}>
          <Text style={tw`text-blue-500 text-lg font-bold px-2`}>Share</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={tw`flex-1 p-4`}>
        <View style={tw`items-center`}>
          {images.length > 0 ? (
            <ScrollView horizontal>
              {images.map((uri, index) => (
                <View key={index} style={tw`relative mr-2`}>
                  <Image source={{ uri }} style={tw`w-50 h-50 rounded-lg`} />
                  <TouchableOpacity
                    onPress={() =>
                      setImages(images.filter((_, i) => i !== index))
                    }
                    style={tw`absolute top-2 right-2 bg-white p-1 rounded-full`}
                  >
                    <Ionicons name="close" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          ) : (
            <TouchableOpacity
              onPress={pickImages}
              style={tw`w-50 h-50 bg-gray-100 rounded-lg justify-center items-center`}
            >
              <Image
                source={require('../assets/images/gallery.png')}
                style={tw`w-20 h-20`}
                resizeMode="contain"
              />
              <Text style={tw`text-gray-500 mt-2`}>Add Image</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={tw`mt-2 rounded-t-3xl p-6`}>
          <Text style={tw`text-lg font-bold`}>Title</Text>
          <TextInput
            placeholder="Add a title..."
            placeholderTextColor={'#ccc'}
            value={title}
            onChangeText={setTitle}
            multiline
            style={tw`flex-row items-center bg-white p-3 rounded-lg shadow-md mt-2`}
          />
        </View>

        <View style={tw`mt-2 rounded-t-3xl p-6`}>
          <Text style={tw`text-lg font-bold`}>Description</Text>
          <TextInput
            placeholder="Add a description..."
            placeholderTextColor={'#ccc'}
            value={description}
            onChangeText={setDescription}
            multiline
            style={tw`flex-row items-center bg-white p-3 rounded-lg shadow-md mt-2`}
          />
        </View>

        <View style={tw`mt-2 rounded-t-3xl p-6`}>
          <View>
            <TouchableOpacity onPress={pickLocation}>
              <Text style={tw`font-bold text-lg`}>Add Location</Text>
            </TouchableOpacity>
          </View>

          {location && (
            <View
              style={tw`flex-row items-center bg-white p-3 rounded-lg shadow-md mt-2`}
            >
              <FontAwesome name="map-marker" size={24} color="red" />
              <Text style={tw`text-gray-600 ml-2`}>{location}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

export default SharePostScreen;
