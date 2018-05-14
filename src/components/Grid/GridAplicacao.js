import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import Icon from './Icon';

const GridAplicacao = ({ data, onPress }) => (
	<TouchableHighlight underlayColor={styles.$underlayColor} onPress={onPress}>
		<View style={styles.rowLista}>
			<View style={{ flex: 4 }}>
				<Text style={styles.text}>{data.descFazenda}</Text>
			</View>
			<View style={{ flex: 4 }}>
				<Text style={styles.text}>{data.descTalhao}</Text>
			</View>
			<View style={{ flex: 2 }}>
				<Text style={styles.text}>{data.dtAplicacao}</Text>
			</View>
			<View style={{ flex: 1 }}>
				<Icon visible={data.status === 'INTEGRADO'} />
			</View>
		</View>
	</TouchableHighlight>
);

GridAplicacao.propTypes = {
	data: PropTypes.object,
	onPress: PropTypes.func,
};

export default GridAplicacao;
