import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { loginUser } from '../services/authService';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await loginUser({ email, password });

      if (response?.token) {
        Alert.alert('Success', 'Login successful! 🎉');
        navigation.navigate('HomeScreen');
      } else {
        setError('Invalid email or password');
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Login failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/explorer.gif')}
        style={tw`w-40 h-40 mt-20`}
      />

      <Text style={tw`text-5xl font-bold mt-10 mr-20`}>Welcome, explorer!</Text>

      <TextInput
        style={tw`bg-gray-200 rounded-lg mt-10 w-80 h-12 p-2`}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#A0A0A0"
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={tw`bg-gray-200 rounded-lg mt-5 w-80 h-12 p-2`}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="#A0A0A0"
        value={password}
        autoCapitalize="none"
        secureTextEntry
      />

      <TouchableOpacity
        style={tw`rounded-lg mt-5 w-80 h-12 p-2 items-center justify-center bg-[#03A9F4]`}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={tw`text-white text-base font-bold`}>Log in</Text>
        )}
      </TouchableOpacity>

      {error ? <Text style={tw`text-red-500 mt-2`}>{error}</Text> : null}

      <View style={tw`flex flex-row gap-x-2 justify-center items-center mt-6`}>
        <Text style={tw`text-gray-400 text-base`}>Don't Have an Account?</Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={tw`text-base text-red-700`}>Sign Up</Text>
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
