import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import formatCurrency from '../utils/mask';

export default class ValueInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "0.00"
    }
  }

  handleChangeText = (text) => {
    const value = formatCurrency(text);
    this.setState({ value });
    this.props.onValueChange(value);
  }

  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.text}>Valor</Text>
        <TextInput
          style={styles.input}
          value={this.state.value}
          keyboardType="numeric"
          onChangeText={this.handleChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    flex: 4,
    backgroundColor: 'dodgerblue',
    color: 'white',
    paddingHorizontal: 10,
    height: 30,
    fontSize: 20,
  },
  text: {
    flex: 1,
    textAlign: 'right',
    marginRight: 10,
    fontSize: 20,
  },
});