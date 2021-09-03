import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import MainScreen from './components/MainScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen />
      <StatusBar barStyle="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});