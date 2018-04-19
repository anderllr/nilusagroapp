import React from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';


const Check = ({ title, checked=false}) => (
    <View>
       <CheckBox
           containerStyle={styles.checkContainer}
           textStyle={styles.text}
           title={title}
           checked={checked}
       />
    </View>
);

Check.propTypes = {
    title: PropTypes.string,
    checked: PropTypes.bool
};

export default Check;
