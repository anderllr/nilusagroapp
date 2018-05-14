import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, FlatList, Platform, StatusBar, Alert, Keyboard } from 'react-native';

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
	limpaAplicacao,
	delProduto,
	addAplicacao,
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
		id_produto: PropTypes.number,
		desc_produto: PropTypes.string,
		qt_dose: PropTypes.string,
		qtde: PropTypes.string,
		aplicacao: PropTypes.object,
		produto: PropTypes.array,
	};

	constructor(props) {
		super(props);

		this.state = { barHidden: false };
	}

	componentDidMount() {
		const name = Platform.OS === 'ios' ? 'Will' : 'Did';
		this.keyboardDidShowListener = Keyboard.addListener(`keyboard${name}Show`, this.keyboardWillShow);
		this.keyboardDidHideListener = Keyboard.addListener(`keyboard${name}Hide`, this.keyboardWillHide);
	}

	keyboardWillShow = () => {
		this.setState({ barHidden: true });
	};

	keyboardWillHide = () => {
		this.setState({ barHidden: false });
	};

	componentWillUnmount() {
		this.keyboardDidShowListener.remove();
		this.keyboardDidHideListener.remove();
	}

	addProduto = () => {
		//Aqui vai adicionar os dados do state à grade (objeto da aplicação)
		if (this.props.id_produto !== 0 && this.props.qt_dose !== '' && this.props.qtde !== '') {
			let produto = {
				id: this.props.id_produto,
				descProd: this.props.desc_produto,
				qtDose: this.props.qt_dose,
				qtTotal: this.props.qtde,
			};

			this.props.addProduto(produto);
		}
	};

	handleDeleteProd = item => {
		this.props.onPushBtnExcluir(item.id);
	};

	pushBtnSalvar = () => {
		if (this.props.aplicacao.status !== 'ATIVO') {
			Alert.alert('Aplicação!', 'Aplicação já integrada!', [{ text: 'Sair', onPress: () => null }]);
		} else {
			let msg = '';
			//TODO: Regras de salvamento
			if (this.props.aplicacao.descTalhao === 'SELECIONE UM TALHAO') {
				msg = 'Talhão';
			}
			if (!this.props.aplicacao.aplicacaoProd.length > 0) {
				msg += ' | Produtos!';
			}
			if (msg !== '') {
				Alert.alert('Aplicação!', 'Você precisa informar: ' + msg, [{ text: 'Sair', onPress: () => null }]);
			} else {
				this.props.onPushBtnSalvar();
				this.props.navigator.switchToTopTab({
					tabIndex: 0,
				});
			}
		}
	};

	pushBtnNovo = () => {
		Alert.alert(
			'Nova Aplicação?',
			'Continuar irá limpar os dados atuais?',
			[
				{ text: 'Sim', onPress: () => this.props.onPushBtnNovo() },
				{ text: 'Não', onPress: () => console.log('Não Pressed'), style: 'cancel' },
			],
			{ cancelable: false }
		);
	};

	render() {
		return (
			<Container>
				<StatusBar hidden={this.state.barHidden} translucent={false} barStyle="light-content" />
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
							renderItem={({ item }) => (
								<GridAplicacaoProd data={item} onPress={() => this.handleDeleteProd(item)} />
							)}
							keyExtractor={item => item.id.toString()}
							ItemSeparatorComponent={Separator}
						/>
					</View>
				</GroupBox>
				<GroupBox flex={0.3} style={{ marginBottom: 10 }}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<View style={{ width: '40%' }}>
							<RoundButton text="Nova Aplicação" onPress={this.pushBtnNovo} />
						</View>
						<View style={{ width: '40%' }}>
							<RoundButton text="Salvar e Enviar" onPress={this.pushBtnSalvar} />
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
	estado: state,
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
		onPushBtnNovo: () => dispatch(limpaAplicacao()),
		onPushBtnExcluir: id => dispatch(delProduto(id)),
		onPushBtnSalvar: () => dispatch(addAplicacao()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Aplicacao);
