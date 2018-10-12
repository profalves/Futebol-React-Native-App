import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

class BarraInferior extends Component {
    render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item} onPress={() => Actions.Inicio()}>
                <Icon name={this.props.primeiro} size={40} color='#000'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => Actions.Frequentes()}>
                <Icon name={this.props.segundo} size={40} color='#000'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => Actions.Acoes()}>
                <Icon name={this.props.terceiro} size={40} color='#000'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => Actions.Login()}>
                <Icon name={this.props.quarto} size={40} color='#000'/>
            </TouchableOpacity>
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: '#e1e1e1',
        flexDirection: 'row',
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#fff'
    }
});

export { BarraInferior };
