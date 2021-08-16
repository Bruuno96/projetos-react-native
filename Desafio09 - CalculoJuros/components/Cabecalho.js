import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cálculo de Juros</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:  {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ED145B",
    height: 40,
    borderRadius: 15
  },
  text: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  }
});