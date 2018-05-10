import { Navigation } from 'react-native-navigation';

const startMainMenu = () => {
	Navigation.startSingleScreenApp({
		screen: {
			screen: 'nilusagro.Home',
			title: 'Principal',
			navigatorStyle: {
				navBarHidden: true,
			},
		},
	});
};

export default startMainMenu;
