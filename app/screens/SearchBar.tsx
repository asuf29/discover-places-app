import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import SearchBarComponent from '../components/SearchBarComponent';

function SearchBar() {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  return (
    <View style={tw`flex-1 items-center mt-5`}>
      <SearchBarComponent onSearch={handleSearch} />
    </View>
  );
}

export default SearchBar;
