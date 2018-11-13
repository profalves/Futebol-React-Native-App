import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Cabecalho, BarraInferior } from './lib';
import Resumo from './Resumo';

class Inicio extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
            <View><Resumo /></View>
            <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
              <BarraInferior
                  primeiro="home"
                  segundo="refresh"
                  terceiro="list"
                  quarto="user"
             />
            </View>
            </View>

        );
    }
}

export default Inicio;
