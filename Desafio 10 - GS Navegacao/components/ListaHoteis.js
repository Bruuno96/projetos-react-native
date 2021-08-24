import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DADOS = require("../dados/hoteis.json");

export default function ListaHoteis({ navigation }) {
  return (
    <View>
      <FlatList
        data={DADOS}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity style={{ flexDirection: 'row' }}
              onPress={() => navigation.navigate("Detalhes", { item })}
            >
              <Text style={styles.nomeText}>{item.nome}</Text>
              <Text style={styles.precoText}>{`R$ ${item.preco}`}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    padding: 5,
  },
  title: {
    height: 30,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'red',
    textAlign: 'center',
  },
  nomeText: {
    flex: 1,
    fontSize: 18,
  },
  precoText: {
    fontSize: 18,
  },
});


