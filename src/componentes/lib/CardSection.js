import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class CardSection extends Component {
    render(){
    return (
        <View style={[styles.viewStyles, this.props.addStyle]}>
            {this.props.children}
        </View>
    );
}
}

const styles = StyleSheet.create({
    viewStyles: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        padding: 5,
        position: 'relative',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    }
});

export { CardSection };


