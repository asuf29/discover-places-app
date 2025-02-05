import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { registerUser } from '../services/authService';

function RegisterScreen() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const navigation = useNavigation();

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateAccount = async () => {
    try {
      const response = await registerUser(formData);
      console.log(response);
      Alert.alert('Success', 'Register successful! 🎉');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={tw`text-2xl font-bold`}>Sign up now!</Text>

      <TextInput
        style={tw`bg-gray-200 rounded-lg mt-10 w-80 h-12 p-2`}
        placeholder="First Name"
        placeholderTextColor="#A0A0A0"
        autoCapitalize="words"
        onChangeText={(text) => handleChange('first_name', text)}
      />

      <TextInput
        style={tw`bg-gray-200 rounded-lg mt-5 w-80 h-12 p-2`}
        placeholder="Last Name"
        placeholderTextColor="#A0A0A0"
        autoCapitalize="words"
        onChangeText={(text) => handleChange('last_name', text)}
      />

      <TextInput
        style={tw`bg-gray-200 rounded-lg mt-5 w-80 h-12 p-2`}
        placeholder="Username"
        placeholderTextColor="#A0A0A0"
        autoCapitalize="none"
        onChangeText={(text) => handleChange('username', text)}
      />

      <TextInput
        style={tw`bg-gray-200 rounded-lg mt-5 w-80 h-12 p-2`}
        placeholder="Email"
        placeholderTextColor="#A0A0A0"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => handleChange('email', text)}
      />

      <TextInput
        style={tw`bg-gray-200 rounded-lg mt-5 w-80 h-12 p-2`}
        placeholder="Password"
        placeholderTextColor="#A0A0A0"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => handleChange('password', text)}
      />

      <TextInput
        style={tw`bg-gray-200 rounded-lg mt-5 w-80 h-12 p-2`}
        placeholder="Confirm Password"
        placeholderTextColor="#A0A0A0"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => handleChange('password_confirmation', text)}
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
        <TouchableOpacity onPress={handleSignIn}>
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
