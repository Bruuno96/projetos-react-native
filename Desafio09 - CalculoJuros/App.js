import React, { useReducer, useState } from 'react';
import { Alert, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Entrada from './components/Entrada'
import Cabecalho from './components/Cabecalho'
import BotaoCalcular from './components/Botao'
import Resultado from './components/Resultado'
import { calcularJurosCompostos, calcularJurosSimples } from './util/CalculoJuros'
import { formatarMoeda, formatarNumero } from './util/mascara'

const ACOES = {
  JUROS_SIMPLES: "Simples",
  JUROS_COMPOSTO: "Composto",
  ZERAR: "Zerar"
}

const calcularJuros = (state, action) => {
  switch (action.type) {
    case ACOES.JUROS_SIMPLES:
      return calcularJurosSimples(action.payload.valor, action.payload.meses, action.payload.taxa);
    case ACOES.JUROS_COMPOSTO:
      return calcularJurosCompostos(action.payload.valor, action.payload.meses, action.payload.taxa);
    case ACOES.ZERAR:
      return 0;
    default:
      return state;
  }
}

export default function App() {
  const [textValor, setTextValor] = useState('0.00');
  const [textMeses, setTextMeses] = useState('1');
  const [textTaxa, setTextTaxa] = useState('0.00');
  const [tipoJuros, setTipoJuros] = useState(ACOES.JUROS_SIMPLES);
  const [valorFinal, dispatch] = useReducer(calcularJuros, 0);

  const botaoCalcular = () => {
    // valida os campos
    const valor = parseFloat(textValor);
    if (valor === 0.00) {
      Alert.alert(
        "Valor Inválido",
        "O valor deve ser maior que zero."
      );
      return;
    }
    const meses = parseFloat(textMeses);
    if (Number.isNaN(meses) || meses <= 0) {
      Alert.alert(
        "Número de Meses Inválido",
        "O número de meses deve ser maior que zero."
      );
      return;
    }
    const taxa = parseFloat(textTaxa);
    // aciona o função do useReducer
    dispatch({ type: tipoJuros, payload: { valor, meses, taxa } });
  }

  const botaoNovoCalculo = () => {
    setTextValor('0.00');
    setTextMeses('1');
    setTextTaxa('0.00');
    setTipoJuros(ACOES.JUROS_SIMPLES);
    dispatch({ type: ACOES.ZERAR });
  }

  return (
    <View style={styles.container}>
      <Cabecalho />
      <View style={{ padding: 10 }}>
        <Entrada
          titulo="Valor"
          valor={textValor}
          onChange={texto => setTextValor(formatarMoeda(texto))}
        />
        <Entrada
          titulo="N° de Meses"
          valor={textMeses}
          onChange={(texto) => setTextMeses(formatarNumero(texto))}
        />
        <Entrada
          titulo="Taxa de Juros (%)"
          valor={textTaxa}
          onChange={(texto) => setTextTaxa(formatarMoeda(texto))}
        />
        <View style={styles.containerPicker}>
          <Text style={styles.text}>Tipo de Juros</Text>
          <Picker style={styles.picker}
            selectedValue={tipoJuros}
            onValueChange={(itemValue) =>
              setTipoJuros(itemValue)
            }>
            <Picker.Item label="Simples" value={ACOES.JUROS_SIMPLES} />
            <Picker.Item label="Composto" value={ACOES.JUROS_COMPOSTO} />
          </Picker>
        </View>
        {valorFinal <= 0 && <BotaoCalcular texto="Calcular" onPress={botaoCalcular} />}
        {valorFinal > 0 &&
          <View>
            <BotaoCalcular texto="Novo Cálculo" onPress={botaoNovoCalculo} />
            <Resultado tipoJuros={tipoJuros} valorFinal={valorFinal} />
          </View>
        }
      </View>
      <StatusBar barStyle="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerPicker:  {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  text: {
    flex: 2,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 10
  },
  picker: {
    flex: 3,
    fontSize: 16,
    paddingHorizontal: 12,
  }
});


