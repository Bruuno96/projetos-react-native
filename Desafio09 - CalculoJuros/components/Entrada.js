import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Input({ titulo, valor, onChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{titulo}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={valor}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:  {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  text: {
    flex: 2,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 10
  },
  input: {
    flex: 3,
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 18,
    paddingHorizontal: 12,
    textAlign: 'right'
  }
})