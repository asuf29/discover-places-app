import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from './SearchBar';
import CategoryList from '../components/CategoryList';
import TopTrips from '../components/TopTrips';
import { useNavigation } from 'expo-router';

const posts = [
  {
    id: 1,
    username: 'john_doe',
    fullName: 'John Doe',
    profileImage: require('../assets/images/man.png'),
    postImage: require('../assets/images/santorini.jpeg'),
    description: 'Amazing view from my trip!',
    likes: 120,
    comments: 25,
  },
  {
    id: 2,
    username: 'jane_smith',
    fullName: 'Jane Smith',
    profileImage: require('../assets/images/man.png'),
    postImage: require('../assets/images/pamukkale.jpeg'),
    description: 'Had a great time hiking!',
    likes: 150,
    comments: 30,
  },
];

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
              source={require('../assets/images/woman2.png')}
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

        <View style={tw`w-full mt-5 p-2 rounded-lg`}>
          <Text style={tw`text-base font-bold `}>Top trips</Text>
          <TopTrips />
        </View>

        <View style={tw`w-full mt-5 p-2 rounded-lg mb-20`}>
          <Text style={tw`text-base font-bold mb-2`}>Posts</Text>
          {posts.map((post) => (
            <View key={post.id} style={tw`mb-6`}>
              <View style={tw`flex-row items-center`}>
                <Image
                  source={post.profileImage}
                  style={tw`w-10 h-10 rounded-full mr-2`}
                />
                <View>
                  <Text style={tw`text-base font-semibold`}>
                    {post.fullName}
                  </Text>
                  <Text style={tw`text-gray-400`}>@{post.username}</Text>
                </View>
              </View>

              <View style={tw`relative mt-2`}>
                <Image
                  source={post.postImage}
                  style={tw`w-full h-60 rounded-lg`}
                />
                <View style={tw`absolute bottom-2 right-2 items-center`}>
                  <TouchableOpacity style={tw`p-2 rounded-full mb-2`}>
                    <Ionicons name="heart" size={24} color="white" />
                    <Text style={tw`text-white`}>{post.likes}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={tw`p-2 rounded-full`}>
                    <Ionicons name="chatbubble" size={24} color="white" />
                    <Text style={tw`text-white`}>{post.comments}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={tw`text-base mt-2`}>{post.description}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
