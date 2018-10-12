import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Resumo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTexto}>Suas Economias</Text>
                    <View style={styles.itemNumeroEconomias}>
                        <Icon name="lock" size={40} color="#fff" />
                        <Text style={styles.itemNumeroTexto}>R$860.00</Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTexto}>Débitos</Text>
                    <View style={styles.itemNumeroDividas}>
                        <Icon name="copy" size={40} color="#fff"/>
                        <Text style={styles.itemNumeroTexto}>R$320.00</Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTexto}>Lista de desejos</Text>
                    <View style={styles.itemNumeroDesejos}>
                        <Icon name="star" size={40} color="#fff" />
                        <Text style={styles.itemNumeroTexto}>R$190.00</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        marginTop: 30,
        minHeight: 300,
        justifyContent: 'space-around'
    },
    itemTexto: {
        height: 20,
        fontSize: 14
    },
    itemNumeroEconomias: {
        height: 70,
        padding: 10,
        borderWidth: 2,
        borderColor: '#bff8bf',
        backgroundColor: '#2f812f',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    itemNumeroDividas: {
        height: 70,
        padding: 10,
        borderWidth: 2,
        borderColor: '#f8bfbf',
        backgroundColor: '#cd2d2d',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    itemNumeroDesejos: {
        height: 70,
        padding: 10,
        borderWidth: 2,
        borderColor: '#f8f6bf',
        backgroundColor: '#ead92d',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    itemNumeroTexto: {
        fontSize: 30,
        color: '#fff'
    },
    itemContainer: {
        paddingBottom: 10,
    }
});

export default Resumo;
