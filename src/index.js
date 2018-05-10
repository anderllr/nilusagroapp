import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { AlertProvider } from './components/Alert';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens/registerScreens';

registerScreens();

console.disableYellowBox = true;

EStyleSheet.build({
	$primaryGreen: '#35a788',
	$darkGreen: '#00482F',
	$mediumGreen: '#00664B',

	$white: '#fff',
	$border: '#CED0CE',
	$inputText: '#008669',
	$lightGray: '#F0F0F0',
	$darkText: '#002B16',
	$gridHead: '#364B44',
	$red: '#ff4c4c',
});

const navigatorStyle = {
	navBarHidden: true,
};

Navigation.startSingleScreenApp({
	screen: {
		screen: 'nilusagro.Login',
		title: 'Login',
		navigatorStyle,
	},
});
