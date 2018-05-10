import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const GridAplicacaoProd = ({ data, onPress }) => (
	<View style={styles.row}>
		<View style={{ flex: 6 }}>
			<Text style={styles.text}>{data.descProd}</Text>
		</View>
		<View style={{ flex: 2 }}>
			<Text style={styles.text}>{data.qtDose.toString()}</Text>
		</View>
		<View style={{ flex: 2 }}>
			<Text style={styles.text}>{data.qtTotal.toString()}</Text>
		</View>
		<View style={{ flex: 2 }}>
			<TouchableOpacity style={styles.button} onPress={onPress}>
				<View style={styles.wrapper}>
					<Text style={styles.textButton}>Excluir</Text>
				</View>
			</TouchableOpacity>
		</View>
	</View>
);

GridAplicacaoProd.propTypes = {
	data: PropTypes.object,
	onPress: PropTypes.func,
};

export default GridAplicacaoProd;
