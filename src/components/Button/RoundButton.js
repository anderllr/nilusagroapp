import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';

import styles from './styles';

const RoundButton = ({ text, onPress }) => (
	<TouchableOpacity style={styles.container} onPress={onPress}>
		<View style={styles.wrapper}>
			<Text style={styles.text}>{text}</Text>
		</View>
	</TouchableOpacity>
);

RoundButton.propTypes = {
	text: PropTypes.string,
	onPress: PropTypes.func,
};

export default RoundButton;
