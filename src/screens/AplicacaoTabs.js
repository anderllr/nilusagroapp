import React from 'react';
import { PixelRatio } from 'react-native';

class AplicacaoTabs extends React.Component {
	static navigatorStyle = {
		topTabTextColor: '#ffffff',
		selectedTopTabTextColor: '#35a788',

		// Tab indicator
		selectedTopTabIndicatorHeight: PixelRatio.get() * 2,
		selectedTopTabIndicatorColor: '#35a788',

		navBarBackgroundColor: '#00482F',
		navBarTextColor: '#ffffff',
		navBarButtonColor: '#ffffff',
	};
}

export default AplicacaoTabs;
