import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Intro from '../../Pages/Intro';
import Cadastro from '../../Pages/Cadastro';
import Login from '../../Pages/Login';

export default function AuthStack() {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName='Inicio'>

      <Stack.Screen name='Intro' component={Intro} options={{
        headerShown: false
      }} />

      <Stack.Screen name='Cadastro' component={Cadastro} options={{
        headerShown: true,
        headerTransparent: true,
        headerTitle: "Crie sua conta", 
        headerTintColor: '#fff',
      }} />

<Stack.Screen name='Login' component={Login} options={{
        headerShown: true,
        headerTransparent: true,
        headerTitle: "Acesse sua conta", 
        headerTintColor: '#fff',
      }} />


    </Stack.Navigator>
  );
}