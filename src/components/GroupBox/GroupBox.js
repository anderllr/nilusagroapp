import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const GroupBox = ({ children, flex }) => {
    const styleBox = [styles.box];

    if (flex) {
        styleBox.push({ flex });
    }

    return (
        <View style={ styleBox }>
            { children }
        </View>
    );
}

GroupBox.propTypes = {
    children: PropTypes.any,
    flex: PropTypes.number
}

export default GroupBox;