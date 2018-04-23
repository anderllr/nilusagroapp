import React, { Component } from 'react';
import { Text, View, StatusBar, TextInput } from 'react-native';
import { Dropdown } from '../components/Dropdown';
import { Header } from '../components/Header';
import { Container } from '../components/Container';

//import data:
import companies from '../data/companies';
import farms from '../data/farms';

class Aplicacao extends Component {

  render() {
      return (
          <Container>
                <Header title='Aplicação' />
                <View style={{flex:1, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row'}}>
                    <Dropdown 
                        data={companies}
                        title='Empresa' 
                        selected='SELECIONE UMA EMPRESA'/>

                    <Dropdown 
                        data={farms}
                        title='Fazenda' 
                        selected='SELECIONE UMA FAZENDA'/>                        
                </View>
          </Container>
      )
  }
}
export default Aplicacao;
