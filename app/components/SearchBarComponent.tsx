import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBarComponent = ({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for places..."
        value={searchQuery}
        autoCapitalize="none"
        autoFocus={true}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Ionicons name="search" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 15,
    width: '90%',
  },
  input: {
    flex: 1,
    padding: 10,
  },
  button: {
    borderTopRightRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SearchBarComponent;
