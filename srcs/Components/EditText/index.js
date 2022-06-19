import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorAmarelo, colorCinza, colorVerdeClaro, colorVerdePadrao } from '../../Colors/Paleta_cores';

export default function EditText({ titulo, valor, funcao, senha, max, tipoKeyboard }) {
    return (
        <TextInput
            style={{ marginTop: 10, backgroundColor: '#f2f2f2' }}
            activeUnderlineColor={colorVerdeClaro}
            label={titulo}
            value={valor}
            onChangeText={funcao}
            secureTextEntry={senha}
            maxLength={max}
            keyboardType={tipoKeyboard}
        />

    );
}

const css = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        marginTop: 26,
        borderRadius: 12,
        padding: 3
    },
    row: {
        flexDirection: 'row',
    },
    input: {
        height: 60,
        marginBottom: 5,
        backgroundColor: '#ffffff',
        fontSize: 22,
        marginLeft: 14,
        marginRight: 14

    },
    titulo: {
        marginLeft: 14,
        marginTop: 12,
        fontSize: 18
    },
    icon: {
        marginLeft: 14,
        marginTop: 14
    }
});