import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Card, Button, Subheading, Paragraph, Title, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { colorVerdePadrao } from '../../Colors/Paleta_cores';



export default function CardCampeonato({ data }) {

    const navega = useNavigation();

    const css = StyleSheet.create({
        card: {
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 5,
            marginTop: 15
        },

        headerTitle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 5,
            paddingRight: 5,
            marginTop: 10
        },

        body: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 5,
            paddingTop: 20,
            paddingRight: 5,
        },

        bodyPremio: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 5,
            paddingRight: 5,
        },


        img: {
            width: '100%',
            height: 200
        },

        botao: {
            paddingLeft: 15,
            paddingRight: 15,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: colorVerdePadrao
        },


        txtStatusFinalizada: { color: "red", fontWeight: 'bold', fontSize: 14 },

        txtStatus: { color: "green", fontSize: 13 },

        txtBotao: { fontSize: 16, color: 'white' },

        txtPadrao: {fontSize: 14}

    });



    let nomeLiga = ""
    let statusLiga = ""
    let bannerLiga = ""
    let valorEntrada = ""
    let valorPremio = ""



    if (data != undefined) {
        nomeLiga = data.titulo;
        statusLiga = data.status;
        bannerLiga = data.banner;
        valorEntrada = data.valorEntrada;
        valorPremio = data.valorPremio;

        if (statusLiga == 1) {
            statusLiga = "Inscrições abertas"
        } else if (statusLiga == 2) {
            statusLiga = "Em andamento"
        } else if (statusLiga == 3) {
            statusLiga = "Finalizada"
        }

    }






    function irTela() {
        navega.navigate('DetalhesLiga', data);
    }


    return (
        <Card mode='elevated' elevation={10} style={css.card}>
            <Card.Cover style={css.img} resizeMode="contain" source={{ uri: bannerLiga }} />
            <Card.Content>
                <View style={css.headerTitle}>
                    <Title>{nomeLiga}</Title>

                    {statusLiga == "Finalizada" 
                    ? 
                    <Subheading style={css.txtStatusFinalizada}>{statusLiga}</Subheading>
                    :
                    <Subheading style={css.txtStatus}>{statusLiga}</Subheading>
                    }


                </View>

                <View style={css.body}>
                    <Subheading style={css.txtPadrao}>Entrada</Subheading>
                    <Subheading style={css.txtPadrao}>R$ {valorEntrada},00</Subheading>
                </View>
                
                <View style={css.bodyPremio}>
                    <Subheading style={css.txtPadrao}>Prêmio total</Subheading>
                    <Subheading style={css.txtPadrao}>R$ {valorPremio},00</Subheading>
                </View>

                <View style={css.bodyPremio}>
                    <Subheading style={css.txtPadrao}>Total palpiteiros</Subheading>
                    <Subheading style={css.txtPadrao}>20</Subheading>
                </View>

            </Card.Content>
            <Card.Actions>
                <TouchableOpacity onPress={() => irTela()} style={css.botao}>
                    <Text style={css.txtBotao}>Ver mais</Text>
                </TouchableOpacity>
            </Card.Actions>
        </Card>
    );
}