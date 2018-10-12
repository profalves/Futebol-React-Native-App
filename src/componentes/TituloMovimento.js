import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TituloMovimento extends Component {
    iconColorMov() {
        if (this.props.isIngress) {
            return '#ABFF4F';
        }
        return '#F0687F';
    }
    iconMov() {
        if (this.props.isIngress) {
            return 'check-circle';
        }
        return 'times-circle';
    }
    textColorMov() {
        if (this.props.isIngress) {
            return { color: '#ABFF4F' };
        }
        return { color: '#F0687F' };
    }
    render() {
        return (
            <View style={styles.subtituloStyle}>
                <Icon name={this.iconMov()} size={30} color={this.iconColorMov()} />
                <Text style={[styles.textoStyle, this.textColorMov()]}>{this.props.texto}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    subtituloStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },
    textoStyle: {
        paddingLeft: 5
    }
});
