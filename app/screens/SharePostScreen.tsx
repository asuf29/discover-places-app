import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { NavigationProp } from '@react-navigation/native';

function SharePostScreen({ navigation }: { navigation: NavigationProp<any> }) {
  const [image, setImage] = useState<string | null>(null);

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

      <ScrollView style={tw`flex-1 p-4 ml-4`}>
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
      </ScrollView>
      <TextInput
        style={tw`p-4 border-t border-gray-500`}
        placeholder="Write a caption..."
        multiline
      />
    </View>
  );
}

export default SharePostScreen;
