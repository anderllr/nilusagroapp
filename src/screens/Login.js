import React, { Component } from 'react';
import { 
    ImageBackground, 
    View, 
    StatusBar, 
    KeyboardAvoidingView
} from 'react-native';

import styles from './styles';
import { Container } from '../components/Container';
import { InputWithLabel } from '../components/InputText';
import { Logo } from '../components/Logo';
import { RoundButton } from '../components/Button';
import { Check } from '../components/CheckBox';

class Login extends Component {
    render () {
        return (
            <Container backgroundColor={null}>
                <StatusBar translucent={false} barStyle="light-content" />
                <KeyboardAvoidingView behavior='padding'>
                    <ImageBackground
                        resizeMode='cover' 
                        style={styles.imageBackground}
                        source={require('./images/background.png')}
                    >
                        <Logo />
                        <InputWithLabel labelText='E-mail' editable={true}></InputWithLabel>
                        <InputWithLabel labelText='Senha' editable={true}></InputWithLabel>
                        <Check title='Lembrar meus dados neste dispositivo?' />
                        <RoundButton text='Entrar' onPress={null} />
                    </ImageBackground>
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

export default Login; 
