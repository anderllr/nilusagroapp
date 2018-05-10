import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, StatusBar, TextInput, Button, FlatList } from 'react-native';
import { Dropdown } from '../components/Dropdown';
import { Header } from '../components/Header';
import { Container } from '../components/Container';
import { InputWithLabel } from '../components/InputText';
import { GroupBox } from '../components/GroupBox';
import { GridAplicacaoProd, CabecalhoAplicacaoProd, Separator } from '../components/Grid';
import { InputWithTitle } from '../components/InputText';
import { RoundButton } from '../components/Button';

//import actions
import {
	changeTalhao,
	changeProduto,
	changeEmpresa,
	changeFazenda,
	changeDose,
	changeQtde,
	addProduto,
} from '../store/actions';

//import data:
import { companies, farms, products } from '../data';

import styles from './styles';

class Aplicacao extends Component {
	static propTypes = {
		empresa: PropTypes.string,
		fazenda: PropTypes.string,
		talhao_area: PropTypes.string,
		talhoes: PropTypes.array,
		id_produto: PropTypes.string,
		desc_produto: PropTypes.string,
		qt_dose: PropTypes.string,
		qtde: PropTypes.string,
		aplicacao: PropTypes.object,
	};

	addProduto = () => {
		//Aqui vai adicionar os dados do state à grade (objeto da aplicação)
		if (this.state.id_produto !== 'SELECIONE UM PRODUTO' && this.state.qt_dose !== '' && this.state.qtde !== '') {
			let produto = {
				id: this.state.id_produto,
				descProd: this.state.desc_produto,
				qtDose: this.state.qt_dose,
				qtTotal: this.state.qtde,
			};

			this.props.addProduto(produto);
		}
	};

	render() {
		return (
			<Container>
				<GroupBox flex={1}>
					<View style={styles.lineForm}>
						<View style={{ flex: 1 }}>
							<Dropdown
								data={companies}
								title="Empresa"
								value={this.props.aplicacao.descEmpresa}
								onChange={this.props.onChangeEmpresa}
							/>
						</View>
						<View style={{ flex: 1 }}>
							<Dropdown
								data={farms}
								title="Fazenda"
								value={this.props.aplicacao.descFazenda}
								onChange={this.props.onChangeFazenda}
							/>
						</View>
					</View>
					<View style={styles.lineForm}>
						<View style={{ flex: 1 }}>
							<Dropdown
								data={this.props.talhoes}
								title="Talhão"
								value={this.props.aplicacao.descTalhao}
								onChange={this.props.onChangeTalhao}
							/>
						</View>
						<View style={{ flex: 1 }}>
							<InputWithTitle title="Área" editable={false} value={this.props.aplicacao.talhao_area} />
						</View>
					</View>
				</GroupBox>
				<GroupBox flex={4}>
					<View style={{ flex: 1, flexDirection: 'row', height: 10 }}>
						<View style={{ flex: 5 }}>
							<Dropdown
								data={products}
								title="Produto"
								value={this.props.desc_produto}
								onChange={this.props.onChangeProduto}
							/>
						</View>
						<View style={{ flex: 2 }}>
							<InputWithTitle
								title="Dose"
								editable={true}
								keyboardType="numeric"
								onChangeText={this.props.onChangeDose}
								value={this.props.qt_dose}
							/>
						</View>
						<View style={{ flex: 3 }}>
							<InputWithTitle
								title="Qtde"
								editable={true}
								keyboardType="numeric"
								onChangeText={this.props.onChangeQtde}
								value={this.props.qtde}
							/>
						</View>
						<View style={{ flex: 2, marginTop: 20 }}>
							<RoundButton text="Add" onPress={this.addProduto} />
						</View>
					</View>
					<View style={{ flex: 5 }}>
						<CabecalhoAplicacaoProd />
						<FlatList
							data={this.props.aplicacao.aplicacaoProd}
							renderItem={({ item }) => <GridAplicacaoProd data={item} />}
							keyExtractor={item => item.id.toString()}
							ItemSeparatorComponent={Separator}
						/>
					</View>
				</GroupBox>
				<GroupBox flex={0.3}>
					<View style={{ alignItems: 'center' }}>
						<View style={{ width: '50%' }}>
							<RoundButton text="Salvar e Enviar a Aplicação" onPress={() => null} />
						</View>
					</View>
				</GroupBox>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	empresa: state.aplicacao.empresa,
	fazenda: state.aplicacao.fazenda,
	talhao_area: state.aplicacao.talhao_area,
	talhoes: state.aplicacao.talhoes,
	id_produto: state.aplicacao.id_produto,
	desc_produto: state.aplicacao.desc_produto,
	qt_dose: state.aplicacao.qt_dose,
	qtde: state.aplicacao.qtde,
	aplicacao: state.aplicacao.aplicacao,
});

const mapDispatchToProps = dispatch => {
	return {
		onChangeTalhao: option => dispatch(changeTalhao(option)),
		onChangeProduto: option => dispatch(changeProduto(option)),
		onChangeEmpresa: option => dispatch(changeEmpresa(option)),
		onChangeFazenda: option => dispatch(changeFazenda(option)),
		onChangeDose: value => dispatch(changeDose(value)),
		onChangeQtde: value => dispatch(changeQtde(value)),
		addProduto: obj => dispatch(addProduto(obj)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Aplicacao);
