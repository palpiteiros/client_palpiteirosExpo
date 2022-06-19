import React, { useState, useContext } from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, ImageBackground, Alert } from 'react-native';
import { Headline } from 'react-native-paper';
import { colorBranco, colorCinza, colorPreto, colorVerde, colorVerdeClaro } from '../../Colors/Paleta_cores';
import EditText from '../../Components/EditText';
import BotaoPadrao from '../../Components/BotaoPadrao';
import Pb from '../../Components/Pb';



const gramado = require('../../Img/gramado.jpg');

const BottomComponent = ({ isLoading, click }) => {
  if (isLoading) {
    return <Pb />
  } else {
    return (
      <BotaoPadrao
        titulo={'Entrar'}
        click={click}
        cor={colorVerdeClaro}
      />
    );
  }


};

export default function Login({ navigation }) {

  const [email, setEmail] = useState('raphael12@gmail.com'); 
  const [senha, setSenha] = useState('12345678'); 
  const [isLoading, setIsLoading] = useState(false);

  async function clickCadastro() {
    if (email.length < 6) {
      Alert.alert('Email Incorreto', 'Insira seu email completo para efetuar o seu cadastro');
      return;
    }
    if (senha.length < 6) {
      Alert.alert('Senha Curta', 'Insira uma senha de no minimo 6 digitos');
      return;
    }
    setIsLoading(true);
    const result = await criarUser(email, senha);

    if (!result.sucess) {
      Alert.alert('Erro ao entrar', `${result.msg}`);
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={css.container}>
      <ImageBackground source={gramado} style={css.back}>
        <ScrollView>
          <View style={{ padding: 10, paddingTop: 30 }}>

            <Headline style={css.headline}>
              Comece a palpitar nos seus jogos favoritos...
            </Headline>

            

            <EditText
              titulo={'Email'}
              valor={email}
              funcao={setEmail}
            />

            <EditText
              titulo={'Senha'}
              valor={senha}
              funcao={setSenha}
              senha={true}
            />
 
            <View style={css.spacing} />


            <View style={css.containerBtn}>
              <BottomComponent isLoading={isLoading} click={'clickCadastro'} />
            </View>

          </View>

        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}


const css = StyleSheet.create({
  container: {
    flex: 1
  },
  back: {
    flex: 1,
    padding: 10
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 2,
    marginRight: 8,
    marginTop: 80,
    marginBottom: 10,
    color: colorBranco
  },
  spacing: {
    height: 16
  }
});