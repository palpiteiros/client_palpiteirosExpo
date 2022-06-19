import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Inicio from '../../Pages/Inicio/index';
import MeuPerfil from '../../Pages/MeuPerfil';
import MeusPalpites from '../../Pages/MeusPalpites';
import Notificacoes from '../../Pages/Notificacoes';
import Ligas from '../../Pages/Ligas';
import DetalhesLiga from '../../Pages/Ligas/DetalhesLiga';


export default function StackApp() {

    const Stack = createNativeStackNavigator();


    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true
            }}
            initialRouteName='Inicio'>
            <Stack.Screen name='Inicio' component={Inicio} options={{
                headerShown: false
            }} />
            <Stack.Screen name='MeuPerfil' component={MeuPerfil} />
            <Stack.Screen name='MeusPalpites' component={MeusPalpites} options={{
                headerShown: false
            }} />
            <Stack.Screen name='Notificacoes' component={Notificacoes} />
            <Stack.Screen name='DetalhesLiga' component={DetalhesLiga}  
            options={{ headerTitle: "Detalhes da liga" }} />
            <Stack.Screen options={{ headerShown: true }} name='Liga' component={Ligas} />



        </Stack.Navigator>
    );
}