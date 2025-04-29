import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaHome from './src/telas/home';
import { CORES } from './src/constants/Cores';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/rotas/StackNavigator';

export default function App() {
  return (
    <>
      <StatusBar style={'auto'} backgroundColor={CORES.MAGALU} />
      <NavigationContainer
      >

        <StackNavigator />
      </NavigationContainer>
    </>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
