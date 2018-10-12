import React from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import Inicio from './componentes/Inicio';
import Frequentes from './componentes/Frequentes';
import Acoes from './componentes/Acoes';
import Login from './componentes/Login';
import Registro from './componentes/Registro';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
            <Scene
                key="Inicio"
                component={Inicio}
                title="Início"
                initial
            />
            <Scene
                key="Frequentes"
                component={Frequentes}
                title="Movimientações Frequentes"
            />
            <Scene
                key="Acoes"
                component={Acoes}
                title="Ações"
            />
            <Scene
                key="Login"
                component={Login}
                title="Iniciar Sessão"
                rightTitle="Registre-se"
                onRight={() => Actions.Registro()}
            />
            <Scene
                key="Registro"
                component={Registro}
                title="Registre-se"
            />
            </Stack>
        </Router>
    );
};

export default RouterComponent;
