import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

function NotificationsScreen() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-xl font-bold`}>Notifications Screen</Text>
    </View>
  );
}

export default NotificationsScreen;
