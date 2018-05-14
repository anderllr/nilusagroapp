import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = ({ visible }) => {
	const iconStyles = [styles.icon];

	if (visible) {
		iconStyles.push(styles.iconVisible);
	}

	return (
		<View style={iconStyles}>
			<Image style={styles.checkIcon} resizeMode="contain" source={require('./images/check.png')} />
		</View>
	);
};

Icon.propTypes = {
	checkmark: PropTypes.bool,
	visible: PropTypes.bool,
	iconBackground: PropTypes.string,
};

export default Icon;
