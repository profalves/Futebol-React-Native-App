import data from './data.json';

export default (state, action) => {
    switch (action.type) {
        case 'eliminarMovimento':
            return state.filter(movimento => movimento.titulo !== action.payload);
        default: return data;
    }
};