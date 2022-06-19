import React from 'react';
import { View, SafeAreaView, Text, FlatList, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default function CardLiga({ nomeCampeonato, nomeLiga, rodadaAtual, valorEntrada, valorPremio }) {


    const css = StyleSheet.create({

        body: {
            padding: 10,
            paddingTop: 20,
        },

        headerRow: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        },

        font: {
            width: 160,
            fontSize: 14
        },

        card: {
            margin: 10,
            marginTop: -0
        },
        divisor: {
            height: 1,
            backgroundColor: '#cfcfcf',
            marginTop: 10,
            marginRight: 20,
            marginLeft: 20
        },

        ContainerMeio: {
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        },

        ContainerJogos: {
            marginTop: 10,
            padding: 10,

        }


    });


    return (
        <Card style={css.card}>
            <View style={css.body}>

                <View style={css.headerRow}>
                    <Text style={css.font}>{nomeCampeonato}</Text>
                    <Text style={css.font}>{nomeLiga}</Text>
                </View>

                <View style={css.headerRow}>
                    <Text style={css.font}>Rodada atual: {rodadaAtual}</Text>
                    <Text style={css.font}>Palpiteiros: 20</Text>
                </View>


                <View style={css.headerRow}>
                    <Text style={css.font}>Entrada: R$ {valorEntrada},00</Text>
                    <Text style={css.font}>Prêmiação: R$ {valorPremio},00</Text>
                </View>


                <View style={css.divisor} />

                <View style={css.ContainerMeio}>
                    <Text style={css.font}>Todos os jogos</Text>
                </View>


                <View style={css.ContainerJogos}>
                    <Text style={css.font}>Todos os jogos</Text>
                </View>

            </View>
        </Card>
    );
}