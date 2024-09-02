import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';

function EditProfileScreen() {
  const navigation = useNavigation();

  const handleSaveChanges = () => {
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={tw`flex-1 items-center`}>
      <View style={tw`items-center mt-10`}>
        <Image
          source={require('../assets/images/asuf.jpg')}
          style={tw`w-40 h-40 rounded-full`}
        />
        <Text style={tw`text-lg font-bold mt-5`}>Asu Kosar</Text>
        <Text style={tw`text-sm text-pink-700`}>Change Profile Picture</Text>
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
        style={[
          tw`rounded-lg mt-5 w-80 h-12 p-2 items-center justify-center bg-red-700`,
        ]}
      >
        <Text style={tw`text-white font-bold`}>Save Changes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default EditProfileScreen;
