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
          apiKey: "AIzaSyBrcHRHnLzlFh788rto5N2U_anpJA9SvRU",
          authDomain: "fire-teste-f4ddb.firebaseapp.com",
          databaseURL: "https://fire-teste-f4ddb.firebaseio.com",
          projectId: "fire-teste-f4ddb",
          storageBucket: "fire-teste-f4ddb.appspot.com",
          messagingSenderId: "265933217720"
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
