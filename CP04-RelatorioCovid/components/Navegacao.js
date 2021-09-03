import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './Principal';
import RegistroAtendimento from './RegistroAtendimento';

const Stack = createNativeStackNavigator();

export default function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'steelblue', 
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "bold"
          }
        }}
      >
        <Stack.Screen 
          name="Principal"
          component={Principal}
          options={{title: "Relatório COVID-19"}}
        />
        <Stack.Screen
          name="RegistroAtendimento"
          component={RegistroAtendimento}
          options={{title: "Registro de Atendimento"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}