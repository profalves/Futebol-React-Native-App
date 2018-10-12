import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import request from 'superagent';
import { Cabecalho, BarraInferior, Card } from './lib';
import ItemListaAcao from './ItemListaAcao';

class Acoes extends Component {
    state = { actions: [] }
    componentWillMount() {
        request
            .get('https://marketdata.websol.barchart.com/getQuote.json?key=b578734a2602598a43a01cadf7cb847b&symbols=AAPL,ZC*1,IBM,GOOGL,^EURUSD')
            .end((err, res) => {
                this.setState({ actions: res.body.results });
            });
    }
    showActions() {
        return this.state.actions.map(action => 
            <ItemListaAcao
                key={action.volume}
                nome={action.name} 
                cambio={action.percentChange} 
                aumento={action.percentChange > 0} 
            />
        );
    }
    render() {
        return (
            <View >
                <Card addStyle={styles.cardStyles}>
                    <View style={styles.headerStyle}>
                        <Text style={styles.headerNameStyle}>Nome</Text>
                        <Text style={styles.headerItemStyle}>% de Câmbio</Text>
                        <Text style={styles.headerItemStyle}>Tipo</Text>
                    </View>
                    {this.showActions()}
                    
                </Card>
                <BarraInferior
                    primeiro="home" 
                    segundo="refresh" 
                    terceiro="list" 
                    quarto="user" 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardStyles: {
        marginTop: 30,
        minHeight: 420,
        padding: 20,
        marginBottom: 10
    },
    headerStyle: {
        backgroundColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    headerNameStyle: {
        flex: 2
    },
    headerItemStyle: {
        flex: 1,
        textAlign: 'center'
    }
});

export default Acoes;
