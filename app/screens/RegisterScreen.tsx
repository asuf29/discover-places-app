import React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View, // Add this line
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

function RegisterScreen() {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  const handleCreateAccount = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={tw`text-2xl font-medium`}>Sign up now!</Text>
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
        placeholder="Email"
        placeholderTextColor="#A0A0A0"
        autoCapitalize="none"
      />
      <TextInput
        style={tw`bg-gray-200 rounded-lg mt-5 w-80 h-12 p-2 `}
        placeholder="Password"
        placeholderTextColor="#A0A0A0"
        autoCapitalize="none"
      />
      <TextInput
        style={tw`bg-gray-200 rounded-lg mt-5 w-80 h-12 p-2 `}
        placeholder="Confirm Password"
        placeholderTextColor="#A0A0A0"
        autoCapitalize="none"
      />
      <TouchableOpacity
        onPress={handleCreateAccount}
        style={tw`rounded-lg mt-5 w-80 h-12 p-2 items-center justify-center bg-[#03A9F4]`}
      >
        <Text style={tw`text-white font-bold`}>Create Account</Text>
      </TouchableOpacity>
      <View style={tw`flex flex-row gap-x-2 justify-center items-center mt-6`}>
        <Text style={tw`text-gray-400 text-base`}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={handleSignIn} style={tw`text-gray-700`}>
          <Text style={tw`text-base text-red-700`}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
