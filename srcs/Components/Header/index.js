import React from 'react';
import { View, StyleSheet, Text } from 'react-native'; 
import { colorVerdePadrao } from '../../Colors/Paleta_cores';


export default function Header({quantdPC}) {


    const css = StyleSheet.create({
        container: {
            height: 50,
            backgroundColor: "white" ,
            flexDirection: 'row', 
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },

        font:{
            fontSize: 15,
            paddingTop: 5
        }
    })

    const[saldoAtual, setSaldoAtual] = React.useState();

    React.useEffect(()=>{

        setSaldoAtual(quantdPC);
        
    },[quantdPC]);


    return (
        <View style={css.container}>
            <View>
                <Text style={css.font}>PC R$ {saldoAtual},00</Text>
            </View>

            <View>
                <Text style={css.font}>Pontuação 150</Text>
            </View>

          
        </View>
    );
}