import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Rotas from './srcs/Rotas/Rotas'


export default function App() {
  return (
    <NavigationContainer>
    <StatusBar hidden={true}/>

      <Rotas/>
    </NavigationContainer>
  
  );
}

