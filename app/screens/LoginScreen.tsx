import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import HomeScreen from './HomeScreen';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={tw`text-5xl font-bold mt-30 mr-20 text-blue-950`}>
        Welcome, explorer!
      </Text>
      <TextInput
        style={tw`border rounded-full border-blue-950 mt-10 w-80 h-12 p-2 `}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        placeholderTextColor="#A0A0A0"
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={tw`border rounded-full border-blue-950 mt-5 w-80 h-12 p-2 `}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        placeholderTextColor="#A0A0A0"
        value={password}
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={[
          tw`border rounded-full bg-blue-950 text-white px-4 py-2 w-80 h-12 mt-5 items-center`,
        ]}
        onPress={handleLogin}
      >
        <Text style={tw`text-white text-base`}>Log in</Text>
      </TouchableOpacity>
      <View style={tw`flex flex-row gap-x-2 justify-center items-center mt-6`}>
        <Text style={tw`text-gray-400 text-base`}>Don't Have Account?</Text>
        <TouchableOpacity style={tw`text-gray-700`}>
          <Text style={tw`text-base text-blue-950`}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    fontFamily: 'LeagueSpartan-Bold',
  },
});

export default LoginScreen;
