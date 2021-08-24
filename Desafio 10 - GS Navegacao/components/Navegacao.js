import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaHoteis from './ListaHoteis';
import Detalhes from './Detalhes'

const Stack = createNativeStackNavigator();

export default function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ListaHoteis"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ED145B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="ListaHoteis"
          component={ListaHoteis}
          options={{ title: "Hotéis" }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={({ route }) => ({ title: route.params.item.nome })}
        />
      </Stack.Navigator>
      <StatusBar barStyle="default" />
    </NavigationContainer>
  );
}

