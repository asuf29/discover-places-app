import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from './SearchBar';
import CategoryList from '../components/CategoryList';
import TopTrips from '../components/TopTrips';
import { useNavigation } from 'expo-router';

function HomeScreen() {
  const navigation = useNavigation();

  const handleNotifications = () => {
    navigation.navigate('Notifications');
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView contentContainerStyle={tw`items-center px-4`}>
        <View style={tw`flex-row items-center justify-between w-full`}>
          <View style={tw`flex-row items-center`}>
            <Image
              source={require('../assets/images/asuf.jpg')}
              style={tw`w-10 h-10 rounded-full mr-4`}
            />
            <Text style={tw`text-base font-semibold`}>Hi, Asu!</Text>
          </View>
          <TouchableOpacity onPress={handleNotifications}>
            <Ionicons name="notifications" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={tw`w-full mt-5 p-2 rounded-lg`}>
          <Text style={tw`text-2xl font-bold`}>
            Where do{'\n'}you want to go?
          </Text>
          <SearchBar />
        </View>
        <View style={tw`w-full mt-5 p-2 rounded-lg`}>
          <Text style={tw`text-base font-bold mb-2`}>Categories</Text>
          <CategoryList />
        </View>
        <View style={tw`w-full mt-5 p-2 rounded-lg mb-20`}>
          <Text style={tw`text-base font-bold `}>Top trips</Text>
          <TopTrips />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
