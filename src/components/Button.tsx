import React from 'react';
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, TouchableOpacityProps} from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps{
    title: string;
}

export function Button({ title } : ButtonProps){
    return (
        <TouchableOpacity 
            style={styled.button}
            activeOpacity={0.7  }
        >
        <Text style={styled.buttonText}>
            { title }
        </Text>
        </TouchableOpacity>
    )
}

const styled = StyleSheet.create({
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