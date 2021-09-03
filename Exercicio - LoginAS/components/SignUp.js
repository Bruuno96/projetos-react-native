import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Header from './Header';

export default function SignUp({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Header>Cadastrar</Header>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => onRegister(name, email, password)}>
          <Text style={styles.button}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 2,
    alignItems: 'center',
    margin: 10
  },
  button: {
    marginTop: 30,
    backgroundColor: 'steelblue',
    padding: 10,
    color: 'white',
    borderRadius: 10,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  input: {
    alignSelf: 'stretch',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10
  },
});