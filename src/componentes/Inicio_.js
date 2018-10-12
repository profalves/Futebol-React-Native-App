import React, { Component } from 'react';
import { View } from 'react-native';
import { Cabecalho, BarraInferior } from './lib';
import Frequentes from './Frequentes';

class Inicio extends Component {
    render() {
        return (
            <View>
                <Frequentes />
            </View>
        );
    }
}

//export default Inicio;
