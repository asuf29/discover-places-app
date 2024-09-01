import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('HomeScreen');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/images/explorer.gif')}
          style={tw`w-40 h-40 mt-20`}
        />
      </View>
      <Text style={tw`text-5xl font-bold mt-10 mr-20`}>Welcome, explorer!</Text>
      <TextInput
        style={tw`border rounded-full mt-10 w-80 h-12 p-2 `}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        placeholderTextColor="#A0A0A0"
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={tw`border rounded-full mt-5 w-80 h-12 p-2 `}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        placeholderTextColor="#A0A0A0"
        value={password}
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={[
          tw`border rounded-full bg-black text-white px-4 py-2 w-80 h-12 mt-5 items-center`,
        ]}
        onPress={handleLogin}
      >
        <Text style={tw`text-white text-base`}>Log in</Text>
      </TouchableOpacity>
      <View style={tw`flex flex-row gap-x-2 justify-center items-center mt-6`}>
        <Text style={tw`text-gray-400 text-base`}>Don't Have Account?</Text>
        <TouchableOpacity onPress={handleRegister} style={tw`text-gray-700`}>
          <Text style={tw`text-base`}>Sign Up</Text>
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
