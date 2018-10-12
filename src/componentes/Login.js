import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Input, Card, CardSection, Botao, Cabecalho, Spinner } from './lib';

class Login extends Component {
    state = { email: '', password: '', error: '', loading: false };

    enviarFormulario() {
        const { email, password } = this.state;
        this.setState({ loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.loginSucesso.bind(this))
            .catch(this.loginError.bind(this));
    }
    loginError() {
        this.setState({ error: 'Error de autenticação', loading: false });
    }
    loginSucesso() {
        this.setState({ loading: false });
        console.log('logged in');
    }
    mostrarBotao() {
        if (this.state.loading) {
            return <Spinner />;
        }
        return (
            <Botao onPress={this.enviarFormulario.bind(this)}>
                <Text>Iniciar Sessão</Text>
            </Botao>
        );
    }
    render() {
        return (
            <View>
                <Cabecalho tituloCabecalho="Bem-Vindo" />
                <Card addStyle={styles.cardStyle}>
                    <CardSection>
                        <Input
                            texto={'Email'}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeholder={'usuario@mail.com'}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            texto={'senha'}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
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
        marginTop: 188,
        marginLeft: 20,
        marginRight: 20
    }
};

export default Login;
