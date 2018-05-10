import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, TextInput, Text } from 'react-native';

import styles from './styles';

const InputWithTitle = props => {
	const { title, editable = true, size, keyboardType } = props;

	const containerStyle = [styles.sizeContainer];

	if (size) {
		//Calc a width proportional
		const calcWidth = containerStyle[0] * (props.size / 100);
		containerStyle.push({ width: calcWidth });
	}

	return (
		<View style={containerStyle}>
			<Text style={styles.titleText}>{title}</Text>
			<View style={styles.titleContainer}>
				<TextInput
					underlineColorAndroid="transparent"
					style={styles.titleInput}
					editable={editable}
					keyboardType={keyboardType}
					{...props}
				/>
			</View>
		</View>
	);
};

InputWithTitle.propTypes = {
	title: PropTypes.string,
	editable: PropTypes.bool,
	size: PropTypes.number,
	keyboardType: PropTypes.string,
};

export default InputWithTitle;
