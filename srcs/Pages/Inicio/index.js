import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Alert, StyleSheet, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import CardCampeonato from '../../Adapters/CardCampeonato';
import Header from '../../Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAppIfNecessary } from '../../../FirebaseConfig';
import { getFirestore, collection, getDocs, doc, setDoc, getDoc, addDoc, updateDoc, query, where, deleteDoc, orderBy, onSnapshot } from 'firebase/firestore';


initializeAppIfNecessary();
export default function Inicio({ navigation }) {


    const db = getFirestore();
    const [ligas, setLigas] = useState([]);


    useEffect(() => {

        async function recupera_ligas() {

            const q = query(collection(db, "ligas"));
            const querySnapshot = onSnapshot(q, (querySnap) => {

                const lista = ([]);

                querySnap.forEach(doc => {

                    lista.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });


                setLigas(lista);

            });

        }

        recupera_ligas();

    }, []);





    return (
        <SafeAreaView style={{ flex: 1}}>
            <Header />
 
            <FlatList
                data={ligas}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CardCampeonato data={item} title={item.group} subtitle={item.description} />}
            />



        </SafeAreaView>
    );
}