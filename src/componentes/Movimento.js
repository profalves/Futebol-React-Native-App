import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardSection, Botao } from './lib';

class Movimento extends Component {
    tipoMov() {
        if (this.props.isIngress) {
            return { backgroundColor: '#ABFF4F' };
        }
        return { backgroundColor: '#F0687F' };
    }

    checkIfRender() { 
        const { titulo, dataPagamento, quantia } = this.props;
        let found = false;
        for (const mov of this.props.frequentes) {
            if (mov.titulo === this.props.titulo) {
                found = true;
            }
        }
        if (!found) {
            return <View />;
        }
       
        return (
            <Card addStyle={styles.cardStyle}>
                <CardSection addStyle={this.tipoMov()}>
                    <Text style={styles.tituloStyle}>{titulo}</Text>
                </CardSection>
                <CardSection>
                    <View>
                        <View style={styles.containerStyle}>
                            <View style={styles.textoStyle}>
                                <Text>Data do pagamento:</Text>
                            </View>
                            <View style={styles.textoStyle}>
                                <Text>{dataPagamento}</Text>
                            </View>
                        </View>
                        <View style={styles.containerStyle}>
                            <View style={styles.textoStyle}>
                                <Text>quantia:</Text>
                            </View>
                            <View style={styles.textoStyle}>
                                <Text>{quantia}</Text>
                            </View>
                        </View>
                    </View>
                </CardSection>
                <CardSection style={styles.botoesContainerStyle}>
                    <Botao style={styles.botaoStyle}>
                        <Icon name="edit" size={20} color="#08BDBD" />
                    </Botao>
                    <Botao onPress={() => this.props.eliminarMovimento(titulo)}>
                        <Icon name="trash" size={20} color="#08BDBD" />
                    </Botao>
                </CardSection>
            </Card>
        );
    }
    render() {     
        return (
            this.checkIfRender()
        );
    }
}

const styles = StyleSheet.create({
    tituloStyle: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    containerStyle: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20
    },
    textoStyle: {
        width: '50%'
    },
    botoesContenedorStyle: {
        flexDirection: 'row'
    },
    botaoStyle: {
        flex: 1
    },
    cardStyle: {
        marginBottom: 10
    }
});

const mapStateToProps = state => ({ frequentes: state.frequentes });

export default connect(mapStateToProps, actions)(Movimento);
