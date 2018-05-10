import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';

import Login from './Login';
import Aplicacao from './Aplicacao';
import AplicacaoLista from './AplicacaoLista';
import AplicacaoTabs from './AplicacaoTabs';
import Home from './Home';

const store = configureStore();

// register all screens of the app (including internal ones)
export function registerScreens() {
	Navigation.registerComponent('nilusagro.Login', () => Login, store, Provider);
	Navigation.registerComponent('nilusagro.Home', () => Home, store, Provider);
	Navigation.registerComponent('nilusagro.Aplicacao', () => Aplicacao, store, Provider);
	Navigation.registerComponent('nilusagro.AplicacaoLista', () => AplicacaoLista, store, Provider);
	Navigation.registerComponent('nilusagro.AplicacaoTabs', () => AplicacaoTabs, store, Provider);
}
