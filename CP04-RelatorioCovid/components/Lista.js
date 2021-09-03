import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

export default function Lista({ navigation, dados }) {
  return (
    <View>
      <FlatList
        data={dados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View >
            <TouchableOpacity style={styles.itemContainer}
              onPress={() => navigation.navigate("RegistroAtendimento", {
                dados: item
              })}
            >
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.texto}>{item.nome}</Text>
                <FontAwesome
                  name="circle"
                  size={15}
                  color={getColor(item.statuscovid)}
                  style={{ marginRight: 10, alignSelf: 'center' }} 
                />
              </View>
              <View style={styles.infoContainer}>
                <Text>Sexo: {item.sexo} </Text>
                <Text>Data de Nascimento: {item.data_nasc}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderRadius: 20,
    margin: 2,
    padding: 5,
    justifyContent: 'center',
  },
  infoContainer: {
    paddingHorizontal: 5,
  },
  texto: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 5,
    fontWeight: 'bold'
  },
});