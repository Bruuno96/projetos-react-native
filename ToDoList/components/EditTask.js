import React from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class EditTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.item.task,
      changeText: false,
    }
  }

  componentDidUpdate() {
    const { changeText, text } = this.state;
    const { item } = this.props;
    if (item.task != text && !changeText) {
      this.setState({ text: item.task })
    }
  }

  botaoExcluir = () => {
    this.props.onDelete(this.props.item.id);
    this.setState({ texto: '', changeText: false });
  }

  botaoAtualizar = () => {
    const { item, onUpdate } = this.props;
    const { text } = this.state;
    onUpdate(item.id, text);
    this.setState({ text: '', changeText: false });
  }

  botaoCancelar = () => {
    this.props.onCancel();
    this.setState({ text: '', changeText: false });
  }

  render() {
    const { visible } = this.props;
    const { text } = this.state;
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
              <Text style={[styles.modalText, styles.sizeText]}>Editar Tarefa</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.sizeText}>Tarefa: </Text>
                <TextInput
                  value={text}
                  style={styles.input}
                  onChangeText={text => this.setState({ text, changeText: true })} />
              </View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={[styles.button]}
                  onPress={this.botaoExcluir}
                >
                  <Text style={styles.buttonText}>Excluir</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.botaoCancelar}
                >
                  <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.botaoAtualizar}
                >
                  <Text style={styles.buttonText}>Atualizar</Text>
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