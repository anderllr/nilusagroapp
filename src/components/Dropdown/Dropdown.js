import React, { Component } from 'react';
import { 
    TouchableWithoutFeedback, 
    View, 
    TextInput,
    Text,
    StatusBar
} from 'react-native';
import color from 'color';
import ModalSelector from 'react-native-modal-selector';

import companies from '../../data/companies';


class Dropdown extends Component {
    constructor() {
        super();
  
        this.state = {
            textInputValue: ''
        }
    }


  render() {
      return (
          <View style={{ flex: 1, justifyContent: 'space-around', padding: 50 }}>

              { /* Default mode: a clickable button will re rendered */ }
              <ModalSelector
                  data={companies}
                  initValue="Select something yummy!"
                  onChange={option => { alert(`${option.label} (${option.key}) nom nom nom`) }} />

              { /*
                  Wrapper mode: just wrap your existing component with ModalSelector.
                  When the user clicks on your element, the modal selector is shown.
               */ }
              <ModalSelector
                  data={companies}
                  initValue="Select something yummy!"
                  onChange={option => { this.setState({textInputValue:option.label}) }}>

                  <TextInput
                      style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
                      editable={false}
                      placeholder="Select something yummy!"
                      value={this.state.textInputValue} />

              </ModalSelector>
          </View>
      );
  }
}

export default Dropdown;