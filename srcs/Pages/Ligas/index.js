import React from 'react';
import { View, SafeAreaView, Text, FlatList, StyleSheet } from 'react-native';
import CardLiga from '../../Components/CardLiga';



export default function Ligas(props) {

  const data = props.route.params;

  let nomeCap = data.campe;
  let nomeLiga = data.Liga.nomeLiga;
  let Rodada = data.Liga.rodada;
  let valorEntrada = data.Liga.entrada;
  let valorPremio = data.Liga.premio;

 


  console.log(data);



  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 10 }}>

      <CardLiga nomeCampeonato={nomeCap} nomeLiga={nomeLiga} rodadaAtual={Rodada} valorEntrada={valorEntrada} valorPremio={valorPremio}/>

    </SafeAreaView>
  );
}