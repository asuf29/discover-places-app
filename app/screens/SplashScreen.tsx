import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Splash Screen');
      navigation.navigate('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Let's <Text style={styles.highlight}>discover</Text> the beautiful
        world!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 70,
    color: '#4B4B4B',
    fontFamily: 'LeagueSpartan-Bold',
  },
  highlight: {
    color: '#0B0241',
    fontStyle: 'italic',
  },
});

export default SplashScreen;
