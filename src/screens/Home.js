import React, { Component } from 'react';
import { ImageBackground, View, StatusBar, KeyboardAvoidingView, Text } from 'react-native';

import styles from './styles';
import { Container } from '../components/Container';
import { InputWithLabel } from '../components/InputText';
import { Logo } from '../components/Logo';
import { SquareButton } from '../components/Button';
import { Check } from '../components/CheckBox';

class Home extends Component {
	handleAplicacao = () => {
		console.log(this.props);
		/*
		 */
	};
	pushAplicacaoTabsScreen = () => {
		this.props.navigator.push({
			screen: 'nilusagro.AplicacaoTabs',
			title: 'Aplicação Tabs',
			navBarBackgroundColor: 'blue',
			topTabs: [
				{
					screenId: 'nilusagro.AplicacaoLista',
					title: 'Lista de Aplicações',
				},
				{
					screenId: 'nilusagro.Aplicacao',
					title: 'Lançar Aplicação',
				},
			],
		});
	};
	render() {
		return (
			<Container backgroundColor={null}>
				<StatusBar translucent={false} barStyle="light-content" />

				<ImageBackground
					resizeMode="cover"
					style={styles.imageBackground}
					source={require('./images/background.png')}
				>
					<KeyboardAvoidingView behavior="padding" style={styles.container}>
						<View>
							<Logo />
						</View>
						<View>
							<View style={styles.buttonStyle}>
								<SquareButton text="Abastecimento" onPress={null} iconType="ABA" />
								<SquareButton text="Aplicação" onPress={this.pushAplicacaoTabsScreen} iconType="APL" />
								<SquareButton text="Financeiro" onPress={null} iconType="FIN" />
							</View>
							<View style={styles.buttonStyle}>
								<SquareButton text="Inventário" onPress={null} iconType="INV" />
								<SquareButton text="Máquinas" onPress={null} iconType="MAQ" />
								<SquareButton text="Pragas" onPress={null} iconType="PRA" />
							</View>
						</View>
					</KeyboardAvoidingView>
				</ImageBackground>
			</Container>
		);
	}
}

export default Home;
