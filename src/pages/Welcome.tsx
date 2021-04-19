import React from 'react';
import { View, Text, Image,TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

import wateringImg from '../assets/watering.png'
import { Button } from '../components/Button';
import colors from '../styles/colors';

export function Welcome(){
    return(
        <SafeAreaView style={styled.container}>
            <Text style={styled.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            <Image source={wateringImg} style={styled.image}/>

            <Text style={styled.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title=">"/>

        </SafeAreaView>
    )   
}

let currentHeightScreen = StatusBar.currentHeight;

const styled = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === "android" ? currentHeightScreen : 0
    },
    title:{
        marginTop:20,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
    },
    subtitle:{
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        
    },
    image: {
        width: 292,
        height: 284,
    },
    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 16,
        height: 56,
        width: 56,
    },
    buttonText: {
        fontSize: 24,
        color: colors.white,
    }
});