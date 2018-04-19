import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, Keyboard, Animated, Platform, StyleSheet } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            containerImageWidth: new Animated.Value(styles.$largeContainerSize),
            imageWidth: new Animated.Value(styles.$largeImageSize),
        };
    }

    componentDidMount() {
        //Routine to add a listener to detect when keyboard is activate
        //And we have to identificate how platform is because internal names are different in ios and android
        const name = Platform.OS === 'ios' ? 'Will' : 'Did';
        this.keyboardDidShowListener = Keyboard.addListener(
            `keyboard${name}Show`,
            this.keyboardWillShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            `keyboard${name}Hide`,
            this.keyboardWillHide,
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    keyboardWillShow = () => {
        Animated.parallel([
            Animated.timing(this.state.containerImageWidth, {
                toValue: styles.$smallContainerSize,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(this.state.imageWidth, {
                toValue: styles.$smallImageSize,
                duration: ANIMATION_DURATION,
            }),
        ]).start();
    };

    keyboardWillHide = () => {
        Animated.parallel([
            Animated.timing(this.state.containerImageWidth, {
                toValue: styles.$largeContainerSize,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(this.state.imageWidth, {
                toValue: styles.$largeImageSize,
                duration: ANIMATION_DURATION,
            }),
        ]).start();
    };

    render() {
        const imageStyles = [
            styles.logo,
            { width: this.state.imageWidth },
        ];

        return (
            <View style={styles.container}>
                <Animated.View style={styles.containerImage}>
                    <Animated.Image
                        resizeMode="contain"
                        style={imageStyles}
                        source={require('./images/logonilus.png')}
                    />
                </Animated.View>
                <Text style={styles.text}>Nilus Agronegócio</Text>
            </View>
        );
    }
}

export default Logo;