import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Input, Card, CardSection, Botao, Cabecalho, Spinner } from './lib';
import firebase from 'firebase';

class Registro extends Component {
    state = { email: '', password: '', passwordRepeat: '', error: '', loading: false };
    enviarFormulario() {
        this.setState({ loading: true });
        const { email, password, passwordRepeat } = this.state;
        if (password === passwordRepeat) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.registroSucesso.bind(this))
                .catch(this.registroErro.bind(this));
        } else this.setState({ error: 'As senhas não coincidem', loading: false });
    }
    registroErro() {
        this.setState({ error: 'Ocorreu um erro ao efetura o registro', loading: false });
    }
    registroSucesso() {
        this.setState({ loading: false });
        console.log('registered');
    }

    mostrarBotao() {
        if (this.state.loading) {
            return <Spinner />;
        }
        return (
            <Botao onPress={this.enviarFormulario.bind(this)}>
                <Text>Enviar</Text>
            </Botao>
        );
    }
    render() {
        return (
            <View>
                <Card addStyle={styles.cardStyle}>
                    <CardSection>
                        <Input
                            texto={'Email:'}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeholder={'usuario@mail.com'}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            texto={'senha:'}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder='senha'
                            secureTextEntry
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            texto={'Confirme a senha:'}
                            value={this.state.passwordRepeat}
                            onChangeText={passwordRepeat => this.setState({ passwordRepeat })}
                            placeholder='senha'
                            secureTextEntry
                        />
                    </CardSection>

                    <Text style={styles.errorMsgStyle}>{this.state.error}</Text>

                    <CardSection>
                        <Botao>
                        {this.mostrarBotao()}
                        </Botao>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    errorMsgStyle: {
        fontSize: 17,
        color: 'red',
        alignSelf: 'center'
    },
    cardStyle: {
        marginTop: 130,
        marginLeft: 20,
        marginRight: 20
    }
};

export default Registro;
