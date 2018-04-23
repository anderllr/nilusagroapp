import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { 
    TouchableWithoutFeedback, 
    View, 
    TextInput,
    Text,
    StatusBar
} from 'react-native';
import color from 'color';
import ModalSelector from 'react-native-modal-selector';

import styles from './styles';

class Dropdown extends Component {
    static propTypes = {
        data: PropTypes.array,
        title: PropTypes.string
    };

    constructor() {
        super();
  
        this.state = {
            textInputValue: ''
        }
    }

    componentDidMount() {
        this.setState({textInputValue: this.props.selected});
    }


  render() {
      return (
        <View>
            <Text style={styles.text}>{this.props.title}</Text>
            <View style={styles.container}>
                <ModalSelector
                    data={this.props.data}
                    initValue={this.state.textInputValue}
                    cancelText={'Sair'}
                    onChange={option => { this.setState({textInputValue:option.label}) }}>
                    <View >
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.input}
                        editable={false}
                        placeholder={this.state.textInputValue}
                        value={this.state.textInputValue} />
                    </View>
                </ModalSelector>
            </View>
        </View>

      );
  }
}

export default Dropdown;