import React from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const Check = props => (
	<View>
		<CheckBox
			containerStyle={styles.checkContainer}
			textStyle={styles.text}
			title={props.title}
			checked={props.checked}
			{...props}
		/>
	</View>
);

Check.propTypes = {
	title: PropTypes.string,
	checked: PropTypes.bool,
};

export default Check;
