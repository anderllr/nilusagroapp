import { createStore, combineReducers } from 'redux';

import aplicacaoReducer from './reducers/aplicacao';

const rootReducer = combineReducers({
	aplicacao: aplicacaoReducer,
});

const configureStore = () => {
	return createStore(rootReducer);
};

export default configureStore;
