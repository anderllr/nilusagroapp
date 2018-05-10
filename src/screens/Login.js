import React, { Component } from 'react';
import { ImageBackground, View, StatusBar, KeyboardAvoidingView } from 'react-native';

import styles from './styles';
import { Container } from '../components/Container';
import { InputWithLabel } from '../components/InputText';
import { Logo } from '../components/Logo';
import { RoundButton } from '../components/Button';
import { Check } from '../components/CheckBox';

import startMainMenu from './startMainMenu';

class Login extends Component {
	loginHandler = () => {
		startMainMenu();
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
						<Logo />
						<View style={styles.fields}>
							<InputWithLabel labelText="E-mail" editable={true} />
						</View>
						<View style={styles.fields}>
							<InputWithLabel labelText="Senha" editable={true} />
						</View>

						<Check title="Lembrar meus dados neste dispositivo?" />
						<View style={styles.loginButton}>
							<RoundButton text="Entrar" onPress={this.loginHandler} />
						</View>
					</KeyboardAvoidingView>
				</ImageBackground>
			</Container>
		);
	}
}

export default Login;
