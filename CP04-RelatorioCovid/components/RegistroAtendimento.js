import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const getColor = (status) => {
  switch (status) {
    case "positivo":
      return "tomato";
    case "negativo":
      return "lightgreen";
    case "suspeito":
      return "khaki";
  }
}

export default function RegistroAtendimento({ route, navigation }) {
  const { dados } = route.params
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.nome}>{dados.nome}</Text>
        <Text style={styles.texto}>Data de Atendimento: {dados.data_atendimento}</Text>
        <Text style={styles.texto}>Sintomas: {dados.sintomas}</Text>
        <Text style={styles.texto}>Doenças Pré-existentes: {dados.doenca_preexitente}</Text>
        <Text style={styles.texto}>Status COVID: 
          <Text style={{color: getColor(dados.statuscovid)}}> {dados.statuscovid}</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    alignSelf: 'stretch',
    borderWidth: 1,
    padding: 5,
    margin: 5
  },
  nome: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center'
  },
  texto: {
    fontStyle: 'italic',
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: 'steelblue',
    alignSelf: 'stretch',
    margin: 5,
    marginTop: 20,
    borderRadius: 20,
    padding: 5,
    alignItems: 'center'
  }, 
  buttonText: {
    color: 'white',
    fontSize: 18,
  }
})