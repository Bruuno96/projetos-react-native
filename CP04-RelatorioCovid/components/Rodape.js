import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Rodape({positivos, negativos, suspeitos}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.texto, styles.corPositivos]}>Positivos: {positivos}</Text>
      <Text style={[styles.texto, styles.corSuspeitos]}>Suspeitos: {suspeitos}</Text>
      <Text style={[styles.texto, styles.corNegativos]}>Negativos: {negativos}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row'
  },
  texto: {
    flex: 1,
    padding: 3,
    fontSize: 14,
    borderWidth: 0.5,
    textAlign: 'center',
    fontWeight: 'bold', 
    borderRadius: 20, 
    margin: 2
  },
  corPositivos: {
    backgroundColor: 'tomato'
  },
  corSuspeitos: {
    backgroundColor: 'khaki'
  },
  corNegativos: {
    backgroundColor: 'lightgreen'
  }

});