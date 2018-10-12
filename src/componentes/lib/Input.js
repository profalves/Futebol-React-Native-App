import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const Input = ({ texto, value, onChangeText, placeholder, secureTextEntry, autoCorrect }) => {
    const { viewStyle, etiquetaStyle, inputStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={etiquetaStyle}>{texto}</Text>
            <TextInput
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                autoCorrect={autoCorrect}
                autoCapitalize={'none'}
            />
        </View>
    );
};


const styles ={
    viewStyle: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 15,
        paddingLeft: 15,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        width: 100,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 19,
        lineHeight: 24,
        flex: 2
    }
}

export { Input };
