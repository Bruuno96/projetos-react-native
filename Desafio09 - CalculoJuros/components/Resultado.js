import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Resultado({ tipoJuros, valorFinal }) {
  return (
    <View style={{marginTop: 30,}}>
      <View style={styles.container}>
        <Text style={[styles.text, styles.header]}>Tipo de Juros</Text>
        <Text style={[styles.text, styles.header]}>Valor Final</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>{`Juros ${tipoJuros}`}</Text>
        <Text style={styles.text}>{valorFinal.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    flex: 1, 
    textAlign: 'center',
    borderWidth: 0.5,
    padding: 3

  },
  header: {
    fontWeight: 'bold',
    backgroundColor: 'lightgray'
  }
})