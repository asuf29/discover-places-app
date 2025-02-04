import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';

function EditProfileScreen() {
  const navigation = useNavigation();
  const [profileImage, setProfileImage] = useState(
    require('../assets/images/asuf.jpg')
  );

  const handleSaveChanges = () => {
    navigation.navigate('Profile');
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage({ uri: result.assets[0].uri });
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 items-center`}>
      <View style={tw`items-center mt-10`}>
        <TouchableOpacity onPress={pickImage}>
          <Image source={profileImage} style={tw`w-40 h-40 rounded-full`} />
        </TouchableOpacity>
        <Text style={tw`text-lg font-bold mt-5`}>Asu Kosar</Text>
        <TouchableOpacity onPress={pickImage}>
          <Text style={tw`text-sm text-pink-700`}>Change Profile Picture</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={tw`bg-gray-200 rounded-lg mt-10 w-80 h-12 p-2 `}
        placeholder="First Name"
        placeholderTextColor="#A0A0A0"
        autoCapitalize="none"
      />
      <TextInput
        style={tw`bg-gray-200 rounded-lg mt-5 w-80 h-12 p-2 `}
        placeholder="Last Name"
        placeholderTextColor="#A0A0A0"
        autoCapitalize="none"
      />
      <TextInput
        style={tw`bg-gray-200 rounded-lg mt-5 w-80 h-12 p-2 `}
        placeholder="Username"
        placeholderTextColor="#A0A0A0"
        autoCapitalize="none"
      />
      <TextInput
        style={tw`bg-gray-200 rounded-lg mt-5 w-80 h-12 p-2 `}
        placeholder="Location"
        placeholderTextColor="#A0A0A0"
        autoCapitalize="none"
      />
      <TouchableOpacity
        onPress={handleSaveChanges}
        style={tw`rounded-lg mt-5 w-80 h-12 p-2 items-center justify-center bg-red-700`}
      >
        <Text style={tw`text-white font-bold`}>Save Changes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default EditProfileScreen;
