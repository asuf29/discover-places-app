import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';

function SearchBarComponent({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View
      style={tw`flex-row items-center bg-white p-2 rounded-lg border border-gray-200`}
    >
      <View style={tw`flex-row items-center flex-1`}>
        <TouchableOpacity onPress={handleSearch} style={tw`p-2`}>
          <FontAwesome name="search" size={20} color="gray" />
        </TouchableOpacity>
        <TextInput
          placeholder="Search for places..."
          style={tw`flex-1 text-stone-950`}
          value={searchQuery}
          autoCapitalize="none"
          autoFocus={false}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      <TouchableOpacity style={tw`ml-2 p-2 bg-[#03A9F4] rounded-lg`}>
        <MaterialIcons name="filter-list" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default SearchBarComponent;
