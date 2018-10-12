import React, { Component } from 'react';
import Frequentes from './src/componentes/Frequentes';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyARigkK20qHa42-zckidCtPbg2zhj2yuaY",
            authDomain: "login-400a7.firebaseapp.com",
            databaseURL: "https://login-400a7.firebaseio.com",
            projectId: "login-400a7",
            storageBucket: "login-400a7.appspot.com",
            messagingSenderId: "645803024503"
        });
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
              <Router />
            </Provider>
        );
    }
}

export default App;
