import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome, explorer!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
