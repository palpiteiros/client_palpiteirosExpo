import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, Dimensions } from 'react-native';
import { Card, Button, Subheading, Paragraph, Title, } from 'react-native-paper';
import CardJogos from '../../Components/CardJogos';


const css = StyleSheet.create({
    bg: {
        flex: 1
    },

    headerTitle: {
        height: 200,
        backgroundColor: 'white',
        width: '100%',
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    card: {
        flexDirection: 'column', height: 50,
        backgroundColor: 'white', marginTop: 5, borderRadius: 5,
        alignItems: 'center', justifyContent: 'center'
    }
})

export default function DetalhesLiga({ route }) {


    var listadejogos = route.params.listaDeJogos;

   



    return (
        <SafeAreaView style={css.bg}>
            <FlatList
                data={listadejogos}
                renderItem={({ item }) => <CardJogos data={item} />}
            />
        </SafeAreaView>
    );
}