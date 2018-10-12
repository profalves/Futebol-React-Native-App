import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Cabecalho, BarraInferior } from './lib';
import Movimento from './Movimento';
import TituloMovimento from './TituloMovimento';

class Frequentes extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.frequentes);
    }
    mostrarIngreso(movimento) {
        if (movimento.isIngress) {
            return (
                <Movimento
                    titulo={movimento.titulo}
                    dataPagamento={movimento.dataPagamento}
                    quantia={movimento.quantia}
                    isIngress
                />);
        }
        return <View />;
    }
    mostrarEgreso(movimento) {
        if (!movimento.isIngress) {
            return (
                <Movimento
                    titulo={movimento.titulo}
                    dataPagamento={movimento.dataPagamento}
                    quantia={movimento.quantia}
                    isIngress={false}
                />);
        }
        return <View />;
    }
    render() {
        console.log(this.props);
        return (
            <View>
                <View>
                <ScrollView style={styles.mainContainer}>
                    <TituloMovimento texto="Recebíveis" isIngress />
                    <ListView
                        dataSource={this.dataSource}
                        renderRow={this.mostrarIngreso}
                    />

                    <TituloMovimento texto="Pagamentos" isIngress={false} />
                    <ListView
                        dataSource={this.dataSource}
                        renderRow={this.mostrarEgreso}
                    />
                                       
                    </ScrollView>
                    </View>
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
    mainContainer: {
        padding: 10,
        paddingTop: 10,
        marginTop: 10,
        height: 450,
    }
});

const mapStateToProps = state => ({ frequentes: state.frequentes });

export default connect(mapStateToProps)(Frequentes);
