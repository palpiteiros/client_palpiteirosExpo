import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, Dimensions, Image, Alert } from 'react-native';
import { Card, Button, Subheading, Paragraph, Headline, Title, } from 'react-native-paper';
import Botao from '../Botao';
import { SvgUri } from 'react-native-svg';
import { colorVerdePadrao } from '../../Colors/Paleta_cores';



const css = StyleSheet.create({

    container: {
        margin: 10,
        borderRadius: 5,
    },

    txt: {
        fontSize: 14
    },

    row: {
        flexDirection: 'row',
        flex: 1
    },

    containerColuna: {
        height: 150,
        paddingTop: 5,
        width: 100,
        height: '100%',
        margin: 10
    },

    cardItens: {
        padding: 2,
        width: '100%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 18
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        padding: 5,
        paddingLeft: 30
    },

    containerTimes: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 16,
        marginBottom: 16
    },

    colunas: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    colunaMeio: {
        height: '100%',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        paddingTop: 9,
        backgroundColor: 'white',
        width: 40,
        height: 40
    },

    espaco: {
        height: 2
    },

    headerCard: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        justifyContent: 'space-between',
        height: 40,
        alignItems: 'center',
        paddingLeft: "16%",
        paddingRight: "13%"
    },

    bodyCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: "20%",
        paddingRight: "20%",
        marginTop: 10,
        marginBottom: 5
    },

    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: "15%",
        paddingRight: "15%"
    },

    cardPlacar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: "25%",
        paddingRight: "24%"
    },

    divisor: {
        height: 1,
        backgroundColor: "#f3f3f3",
        paddingLeft: 20,
        paddingRight: 20
    },


    cardInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    txtPadrao: { fontSize: 15 },


    columLeft: { flexDirection: 'column', width: '40%', height: 150, alignItems: 'center', justifyContent: 'center' },

    columMeio: { flexDirection: 'column', width: '20%', height: 150, alignItems: 'center', justifyContent: 'center' },

    columRight: { flexDirection: 'column', width: '40%', height: 150, alignItems: 'center', justifyContent: 'center' }

});



export default function CardJogos({ data }) {

    let escudoTimeMandante = data.escudoTimeMandante
    let timeMandante = data.nomeMandante;
    let placar_mandante = data.placar_mandante;

    let timeVisitante = data.nomeVisitante;
    let escudoTimeVisitante = data.escudoTimeVisitante;
    let placar_visitante = data.placar_visitante;

    let data_realizacao = data.dateRealizacao;
    let hora_realizacao = data.timestampRealizacao;

    let status = data.status;


    if(status == "Not Started"){
        status = "Agendado"
    }



    const palpitar = () => {

        if (status != "Not Started") {
            Alert.alert("Impedimento!", "Você não pode palpitar em jogos finalizados.");
            return;
        } else { 
            if(data_realizacao+hora_realizacao == new Date()){
            Alert.alert("Impedimento!", "Está partida foi fechada para palpites.");
            return;
            } else {
                //abre modal
            }

            console.log(data_realizacao+hora_realizacao == new Date());
        }


    }



    return (
        <Card elevation={8} mode="elevated" style={css.container}>

            <View style={css.headerCard}>
                <Title style={{ fontSize: 15 }}>Casa</Title>
                <Title style={{ fontSize: 15 }}>Visitante</Title>
            </View>

            <View style={{ flexDirection: 'row' }} >
                <View style={css.columLeft}>

                    <Image
                        style={css.image}
                        source={{ uri: escudoTimeMandante }}
                    />

                    {placar_mandante == null ?
                        <Title style={css.txtPadrao}>0</Title>
                        :
                        <Title style={css.txtPadrao}>{placar_mandante}</Title>
                    }

                    <Title style={css.txtPadrao}>{timeMandante}</Title>


                </View>


                <View style={css.columMeio}>
                    <Title style={css.txtPadrao}>X</Title>

                </View>


                <View style={css.columRight}>


                    <Image
                        style={css.image}
                        source={{ uri: escudoTimeVisitante }}
                    />
                    {placar_visitante == null ?
                        <Title style={css.txtPadrao}>0</Title>
                        :
                        <Title style={css.txtPadrao}>{placar_visitante}</Title>
                    }

                    <Title style={css.txtPadrao}>{timeVisitante}</Title>

                </View>


            </View>


            <View style={css.divisor} />



            <View style={css.cardInfo}>
                <View >
                    <Title style={{ fontSize: 13, color: '#888888' }}>Data do jogo </Title>
                    <Title style={{ fontSize: 13, color: '#888888', marginTop: -10 }}>Horário do jogo </Title>
                    <Title style={{ fontSize: 13, color: '#888888', marginTop: -10, marginBottom: -10 }}>Status </Title>
                </View>

                <View >
                    <Title style={{ fontSize: 13 }}>{data_realizacao}</Title>
                    <Title style={{ fontSize: 13, marginTop: -10 }}>{hora_realizacao}</Title>

                    {status == "Agendado" ?
                        <Title style={{ fontSize: 13, marginTop: -10, marginBottom: -10, color: 'green' }}>{String(status).toUpperCase()}</Title>

                        :
                        <Title style={{ fontSize: 13, marginTop: -10, marginBottom: -10, color: 'red' }}>{String(status).toUpperCase()}</Title>

                    }

                </View>
            </View>


            {status == "finalizado" ?
                <Botao
                    acao={palpitar}
                    TituloBotao={'Você não pode mais palpitar neste jogo'}
                />
                :
                <Botao
                    acao={palpitar}
                    TituloBotao={'Palpitar neste jogo'}
                />
            }



        </Card>
    );
}