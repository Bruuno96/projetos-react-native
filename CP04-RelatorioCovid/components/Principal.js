import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Rodape from './Rodape';
import Lista from './Lista';
import { computar } from '../util/relatorio';

const DADOS = require('../dados/dados_covid.json');

const somatorio = computar(DADOS);

export default function Principal({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, margin: 2 }}>
        <Lista dados={DADOS.sort((a, b) => a.nome > b.nome)} navigation={navigation}/>
      </View>
      <View style={{ paddingTop: 3, borderTopWidth: 1.5 }}>
        <Rodape 
          positivos={somatorio.somaPositivo} 
          negativos={somatorio.somaNegativo} 
          suspeitos={somatorio.somaSuspeito} />
      </View>
      <StatusBar barStyle="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

