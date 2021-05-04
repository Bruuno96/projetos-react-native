import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Slider from '@react-native-community/slider';

import ResultValues from './components/ResultValues';
import ValueInput from './components/ValueInput';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueText: "0.00",
      customPercent: 15,
    }
  }

  handleChangeText = (value) => {
    this.setState({ valueText: value })
  }

  render() {
    const { customPercent, valueText } = this.state
    return (
      <View style={styles.container}>
        <ValueInput onValueChange={this.handleChangeText} />

        <View style={styles.rowContainer}>
          <Text style={styles.text}>%</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={30}
            step={1}
            value={customPercent}
            onValueChange={value => this.setState({ customPercent: value })} />
        </View>

        <ResultValues
          defaultPercent={10}
          customPercent={customPercent}
          value={parseFloat(valueText)}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  text: {
    flex: 1,
    textAlign: 'right',
    marginRight: 10,
    fontSize: 20
  },
  slider: {
    flex: 4,
  }
});