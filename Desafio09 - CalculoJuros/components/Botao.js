import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Header({ texto, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
      >
        <Text style={styles.text}>{texto}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    backgroundColor: "#ED145B",
    padding: 10,
    borderRadius: 18,
    color: 'white',
  }
})