import React from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  botaoCancelar = () => {
    this.props.onCancel();
    this.setState({ text: '' });
  }

  botaoAdicionar = () => {
    const { text } = this.state;
    if (!text) return;
    this.props.onAdd(text);
    this.setState({ text: '' });
  }

  render() {
    const { visible } = this.props;
    return (
      <View>
        <Modal
          animationType='slide'
          visible={visible}
          transparent={true}
          onRequestClose={this.botaoCancelar}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={[styles.modalText, styles.sizeText]}>Nova Tarefa</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.sizeText}>Tarefa: </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => this.setState({ text })} />
              </View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.botaoCancelar}
                >
                  <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.botaoAdicionar}
                >
                  <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 15,
    height: 25,
    paddingHorizontal: 5,
    borderRadius: 3,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    marginTop: 20,
    marginLeft: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontWeight: 'bold',
  },
  sizeText: {
    fontSize: 15,
  }
});