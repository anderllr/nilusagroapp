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
import { SquareButton } from '../components/Button';
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
                        <View style={{ flex: 1, justifyContent: 'space-between' }}>
                        <View style={{ flex: 1 }}>
                            <Logo />
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={ styles.buttonStyle }>
                                <SquareButton text='Abastecimento' onPress={null} iconType='ABA' />
                                <SquareButton text='Aplicação' onPress={null} iconType='APL'/>
                                <SquareButton text='Financeiro' onPress={null} iconType='FIN' />
                            </View>
                            <View style={ styles.buttonStyle }>
                                <SquareButton text='Inventário' onPress={null} iconType='INV' />
                                <SquareButton text='Máquinas' onPress={null} iconType='MAQ' />
                                <SquareButton text='Pragas' onPress={null} iconType='PRA' />
                            </View>
                        </View>
                        </View>
                    </ImageBackground>
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

export default Login; 
