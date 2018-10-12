import { combineReducers } from 'redux';
import frequentesReducer from './frequentesReducer';

export default combineReducers({
    frequentes: frequentesReducer
});
