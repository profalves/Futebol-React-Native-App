import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

class Botao extends Component {
    render(){
    const {children, onPress} = this.props;
    return (
        <TouchableOpacity style={styles.containerStyle} onPress={onPress}>
            {children}
        </TouchableOpacity>
    );
}
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#08BDBD',
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export { Botao };

