import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const getImagens = (imagem) => {
  switch (imagem) {
    case "IBIS":
      return require("../assets/ibis_anhembi.jpeg");
    case "IBIRA":
      return require("../assets/comfort_ibira.jpeg");
    case "MORUMBI":
      return require('../assets/blue_morumbi.jpeg');
  }
}

export default function Detalhes({ route, navigation }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.detalheTitulo}>
        {/* <Text style={[styles.detalheNome, { fontSize: 20 }]}>{item.nome}</Text> */}
        <Text style={styles.detalheNome}>{`${item.estrelas} estrelas`}</Text>
      </View>

      <Image
        source={getImagens(item.imagem)}
        style={{ height: 300, width: '100%', alignSelf: 'center', resizeMode: 'cover', marginBottom: 10 }}
      />
      <View style={{ flexDirection: 'row', marginBottom: 10, paddingHorizontal: 10 }}>
        <Text style={{ flex: 1, fontWeight: 'bold' }}>Endereço: </Text>
        <Text style={{ flex: 4, flexWrap: "wrap" }}>{item.endereco}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, paddingHorizontal: 10 }}>
        <Text style={{ flex: 1, fontWeight: 'bold' }}>Telefone: </Text>
        <Text style={{ flex: 4 }}>{item.telefone}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, paddingHorizontal: 10 }}>
        <Text style={{ flex: 1, fontWeight: 'bold' }}>Preço: </Text>
        <Text style={{ flex: 4 }}>{item.preco.toFixed(2)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.button}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detalheTitulo: {
    height: 30,
    backgroundColor: "#ED143B",
    textAlign: 'center',
    justifyContent: 'center',
  },
  detalheNome: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: "#ED145B",
    color: 'white',
    fontSize: 18,
    padding: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
  },
});
