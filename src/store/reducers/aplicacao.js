import {
	ADD_APLICACAO,
	ADD_PRODUTO,
	DELETE_PRODUTO,
	SELECT_TALHAO,
	SELECT_PRODUTO,
	SELECT_EMPRESA,
	SELECT_FAZENDA,
	CHANGE_DOSE,
	CHANGE_QTDE,
} from '../actions/actionTypes';

const initialState = {
	talhoes: [
		{ key: 0, section: true, label: 'TALHÕES', area: '0 HA' },
		{ key: 1, label: 'TALHAO SUL', area: '120 HA' },
		{ key: 2, label: 'TALHAO NORTE', area: '145 HA' },
		{ key: 3, label: 'TALHAO SUDOESTE', area: '182 HA' },
		{ key: 4, label: 'TALHAO VARJAO', area: '132 HA' },
		{ key: 5, label: 'TALHAO PORTEIRA', area: '163 HA' },
	],
	id_produto: '',
	desc_produto: 'SELECIONE UM PRODUTO',
	qt_dose: '',
	qtde: '',
	aplicacao: {
		id: '',
		id_empresa: '1',
		descEmpresa: 'GRUPO XYZ',
		id_fazenda: '1',
		descFazenda: 'FAZENDA ABC DE GOIAS',
		descTalhao: 'SELECIONE UM TALHAO',
		dtAplicacao: '',
		talhao_area: '',
		aplicacaoProd: [],
	},
};

const setProduct = (state, action) => {
	let aplicacao = state.aplicacao;
	let aplicacaoProd = aplicacao.aplicacaoProd.filter(prod => {
		return prod.id !== this.state.id_produto;
	});
	//Agora adiciona
	aplicacaoProd = aplicacaoProd.concat(produto);

	return {
		...state.aplicacao,
		aplicacaoProd,
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_APLICACAO:
			return {
				...state,
				empresa: action.payLoad,
			};
		case ADD_PRODUTO:
			return {
				...state,
				id_produto: '',
				desc_produto: 'SELECIONE UM PRODUTO',
				qt_dose: '',
				qtde: '',
				aplicacao: setProduct(state, action),
			};
		case SELECT_TALHAO:
			return {
				...state,
				aplicacao: {
					...state.aplicacao,
					talhao_area: state.talhoes[action.option.key].area,
					descTalhao: action.option.label,
				},
			};
		case SELECT_PRODUTO:
			return {
				...state,
				id_produto: action.option.key,
				desc_produto: action.option.label,
			};
		case SELECT_EMPRESA:
			return {
				...state,
				aplicacao: {
					...state.aplicacao,
					id_empresa: action.option.key,
					descEmpresa: action.option.label,
				},
			};
		case SELECT_FAZENDA:
			return {
				...state,
				aplicacao: {
					...state.aplicacao,
					id_fazenda: action.option.key,
					descFazenda: action.option.label,
				},
			};
		case CHANGE_DOSE:
			return {
				...state,
				qt_dose: action.value,
			};
		case CHANGE_QTDE:
			return {
				...state,
				qtde: action.value,
			};
		default:
			return state;
	}
};

export default reducer;
