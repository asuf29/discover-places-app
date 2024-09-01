import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import MapScreen from '../screens/MapScreen';

const BackPageRedirect = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate('Map');
  };

  return (
    <View
      style={tw`absolute w-full h-18 top-0 flex-row items-center justify-start px-4 pt-4 border-b border-gray-300 z-10`}
    >
      <TouchableOpacity
        onPress={handleBack}
        style={tw`flex-row p-2 rounded-md mx-2`}
      >
        <FontAwesome name="arrow-left" size={16} color="black" />
        <Text style={tw`text-black text-center font-bold ml-2`}>
          Back to map!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackPageRedirect;
