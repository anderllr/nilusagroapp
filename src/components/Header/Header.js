import React from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Image,
    Text
} from 'react-native';

import styles from './styles';
import Line from './Line';

const Header = ({ title }) => (
        <View>
            <View style={styles.container}>
                <Image resizeMode='contain' style={styles.logo} source={require('./images/logohorizontal.png')} />
                <View style={styles.containerText}>
                    <Text style={styles.text}>{title}</Text>
                </View>    
            </View>
            <Line />
        </View>
);

Header.propTypes = {
    title: PropTypes.string
}

export default Header;