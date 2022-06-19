import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import {colorVerdePadrao} from '../../../srcs/Colors/Paleta_cores';

const css = StyleSheet.create({
    botaostyle: {height: 40, width: '100%', backgroundColor: colorVerdePadrao, alignItems: 'center', marginTop: 20,justifyContent: 'center'},
    tituloBotao:{fontSize: 15, color: 'black' }
})

export default function Botao({TituloBotao, acao}) {
 return (
   <TouchableOpacity style={css.botaostyle} onPress={()=> acao()} >
    <Text style={css.tituloBotao}>{TituloBotao}</Text>
   </TouchableOpacity>
  );
}