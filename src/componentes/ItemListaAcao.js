import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ItemListaAcao extends Component {

    iconType() {
        if (this.props.aumento) {
            return <Icon style={styles.itemStyle} name="arrow-up" size={20} color="#42A93B" />;
        }
        return <Icon style={styles.itemStyle} name="arrow-down" size={20} color="#FA3636" />;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.nomeStyle}>{this.props.nome}</Text>
                <Text style={styles.itemStyle}>{this.props.cambio.toString()}</Text>
                {this.iconType()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        padding: 5
    },
    nomeStyle: {
        flex: 2
    },
    itemStyle: {
        textAlign: 'center',
        flex: 1
    }
});

export default ItemListaAcao;
