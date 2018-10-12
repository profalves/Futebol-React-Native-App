import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Cabecalho extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.tituloCabecalho}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    viewStyle: {
        paddingTop: 10,
        backgroundColor: '#e1e1e1',
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 6,
        paddingRight: 6
    },
    textStyle: {
        color: '#000',
        fontSize: 22
    }
});

export { Cabecalho };
