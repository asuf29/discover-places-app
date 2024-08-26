import React from 'react';
import { Text, View, Image } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from './SearchBar';
import CategoryList from '../components/CategoryList';

function HomeScreen() {
  return (
    <SafeAreaView style={tw`flex-1 items-center mt-5`}>
      <View style={tw`flex-row items-center justify-between w-80 px-4`}>
        <View style={tw`flex-row items-center`}>
          <Image
            source={require('../assets/images/asuf.jpg')}
            style={tw`w-10 h-10 rounded-full mr-4`}
          />
          <Text style={tw`text-base font-bold`}>Hi, Asu!</Text>
        </View>
        <Ionicons name="notifications" size={24} color="black" />
      </View>
      <View style={tw`flex-1 items-start mt-10 w-80 mb-60`}>
        <Text style={tw`text-2xl font-bold ml-4`}>
          Where do{'\n'}you want to go?
        </Text>
        <SearchBar />
        <View style={tw`w-80 mt-10 ml-4`}>
          <Text style={tw`text-xl font-bold`}>Categories</Text>
          <CategoryList />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
