import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';

function NotificationsScreen() {
  return (
    <View style={tw`flex-1 bg-white`}>
      <View
        style={tw`w-full h-18 top-0 flex-row items-center justify-start px-4 pt-6 bg-black shadow-md z-10`}
      >
        <TouchableOpacity style={tw`flex-row items-center ml-2`}>
          <FontAwesome name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-white font-bold text-lg ml-4`}>Notifications</Text>
      </View>
      <ScrollView style={tw`flex-1 px-4 py-4`}>
        <View style={tw`flex-row items-center p-4 bg-gray-100 rounded-lg mb-4`}>
          <View style={tw`p-2 bg-red-200 rounded-full`}>
            <FontAwesome name="bell" size={20} color="red" />
          </View>
          <View style={tw`ml-4 flex-1`}>
            <Text style={tw`text-sm font-bold text-black`}>
              New comment on your post!
            </Text>
            <Text style={tw`text-xs text-gray-500 mt-1`}>5 minutes ago</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default NotificationsScreen;
