import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CabecalhoAplicacaoProd = () => (
	<View style={styles.title}>
		<View style={{ flex: 6 }}>
			<Text style={styles.titleText}>Descrição</Text>
		</View>
		<View style={{ flex: 2 }}>
			<Text style={styles.titleText}>Dose</Text>
		</View>
		<View style={{ flex: 2 }}>
			<Text style={styles.titleText}>Qtde</Text>
		</View>
		<View style={{ flex: 2 }}>
			<Text style={styles.titleText}>Excluir?</Text>
		</View>
	</View>
);

export default CabecalhoAplicacaoProd;
