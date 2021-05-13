import React from 'react';
import { StyleSheet, View } from 'react-native';

import Quadrado from '../components/Quadrado'

export default class App extends React.Component {
  renderQuadrado(i) {
    return (
      <Quadrado
        value={this.props.quadrados[i]}
        desabilitado={this.props.desabilitado}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <View>
        <View style={styles.rowContainer}>
          {this.renderQuadrado(0)}
          {this.renderQuadrado(1)}
          {this.renderQuadrado(2)}
        </View>
        <View style={styles.rowContainer}>
          {this.renderQuadrado(3)}
          {this.renderQuadrado(4)}
          {this.renderQuadrado(5)}
        </View>
        <View style={styles.rowContainer}>
          {this.renderQuadrado(6)}
          {this.renderQuadrado(7)}
          {this.renderQuadrado(8)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});



