import React from 'react';
import { Alert, FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CEDULAS = [50, 20, 10];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantidade: Array(CEDULAS.length).fill(0),
      txtValor: '',
    }
  }

  calcular = () => {
    const { quantidade, txtValor } = this.state;
    let valor = parseInt(txtValor);
    if (Number.isNaN(valor)) {
      Alert.alert("Erro", "Valor Inválido!")
      return;
    }
    if (valor % 10 != 0) {
      Alert.alert("Erro", "O valor deve ser múltiplo de 10!");
      return;
    }
    let qtde = [];
    CEDULAS.forEach((cedula) => {
      qtde.push(Math.floor(valor / cedula));
      valor = valor % cedula;
    });
    this.setState({ quantidade: qtde, txtValor: '' });
  }

  renderItem = ({ index, item }) => {
    return (
      <View style={styles.resultContanier}>
        <Text style={styles.bankNoteText}>{`R$ ${CEDULAS[index]}`}</Text>
        <Text style={styles.amountText}>{`${item}`}</Text>
      </View>
    );
  }

  render() {
    const { quantidade } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Valor: </Text>
          <TextInput
            style={styles.input}
            onChangeText={txtValor => this.setState({ txtValor })}
          />
          <TouchableOpacity onPress={this.calcular}>
            <Text style={styles.button}>Calcular</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={quantidade}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 30
  },
  resultContanier: {
    flexDirection: 'row',
    margin: 3,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    height: 30,
    paddingHorizontal: 5,
    fontSize: 18,
  },
  button: {
    backgroundColor: 'steelblue',
    color: 'white',
    marginLeft: 10,
    height: 30,
    textAlignVertical: 'center',
    textAlign: 'center',
    padding: 3,
    fontSize: 18,
  },
  text: {
    fontSize: 18,
  },
  bankNoteText: {
    flex: 2,
    paddingHorizontal: 15,
    fontSize: 18,
    borderWidth: 1,
    marginRight: 3,
  },
  amountText: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 18,
    borderWidth: 1,
    textAlign: 'center'
  }
});
