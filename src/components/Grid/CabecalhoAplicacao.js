import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CabecalhoAplicacaoProd = () => (
	<View style={styles.title}>
		<View style={{ flex: 4 }}>
			<Text style={styles.titleText}>Fazenda</Text>
		</View>
		<View style={{ flex: 4 }}>
			<Text style={styles.titleText}>Talhão</Text>
		</View>
		<View style={{ flex: 2 }}>
			<Text style={styles.titleText}>Data</Text>
		</View>
		<View style={{ flex: 1 }}>
			<Text style={styles.titleText}>Status</Text>
		</View>
	</View>
);

export default CabecalhoAplicacaoProd;
