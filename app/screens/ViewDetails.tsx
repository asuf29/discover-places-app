import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import tw from 'twrnc';

const ViewDetails = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-xl`}>View Details Screen</Text>
    </View>
  );
};

export default ViewDetails;
