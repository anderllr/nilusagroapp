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
	id_produto: 0,
	desc_produto: 'SELECIONE UM PRODUTO',
	qt_dose: '',
	qtde: '',
	aplicacao: {
		id: 0,
		id_empresa: '1',
		descEmpresa: 'GRUPO XYZ',
		id_fazenda: '1',
		descFazenda: 'FAZENDA ABC DE GOIAS',
		descTalhao: 'SELECIONE UM TALHAO',
		dtAplicacao: '',
		talhao_area: '',
		aplicacaoProd: [],
	},
	aplicacoes: [
		{
			id: 722,
			descEmpresa: 'GRUPO XYZ',
			descFazenda: 'FAZENDA ABC DE GOIAS',
			descTalhao: 'TALHAO SUL',
			dtAplicacao: '28/04/2018',
			aplicacoProd: [
				{ id: 722, descProd: 'SEMENTE DE SOJA M8210 I PRO', qtDose: 2.3, qtTotal: 145 },
				{ id: 686, descProd: 'YARAVITA GLYTREL MNP', qtDose: 2.3, qtTotal: 145 },
				{ id: 8, descProd: 'CEFANOL', qtDose: 2.3, qtTotal: 145 },
				{ id: 521, descProd: 'DIMILIN', qtDose: 2.3, qtTotal: 145 },
				{ id: 763, descProd: 'DERMACOR', qtDose: 2.3, qtTotal: 99 },
				{ id: 703, descProd: 'PRIME 200', qtDose: 2.3, qtTotal: 145 },
				{ id: 415, descProd: 'FOX', qtDose: 2.3, qtTotal: 145 },
				{ id: 303, descProd: 'SOLUPOTASSE SULFATO K', qtDose: 2.3, qtTotal: 124 },
				{ id: 422, descProd: 'TRIUNFO FLEX', qtDose: 2.3, qtTotal: 1560 },
			],
		},
		{
			id: 721,
			descEmpresa: 'GRUPO XYZ',
			descFazenda: 'FAZENDA ABC DE GOIAS',
			descTalhao: 'TALHAO NORTE',
			dtAplicacao: '25/04/2018',
			aplicacoProd: [
				{ id: 424, descProd: 'PROFOL NICOMO DRY', qtDose: 2.3, qtTotal: 145 },
				{ id: 727, descProd: 'EXALT', qtDose: 2.3, qtTotal: 145 },
				{ id: 475, descProd: 'PROFOL SUPERA', qtDose: 2.3, qtTotal: 145 },
				{ id: 149, descProd: 'DANIMEN 300 CE', qtDose: 2.3, qtTotal: 145 },
			],
		},
		{
			id: 720,
			descEmpresa: 'GRUPO XYZ',
			descFazenda: 'FAZENDA ABC DE GOIAS',
			descTalhao: 'TALHAO SUDOESTE',
			dtAplicacao: '24/04/2018',
			aplicacoProd: [],
		},
		{
			id: 719,
			descEmpresa: 'GRUPO XYZ',
			descFazenda: 'FAZENDA ABC DE GOIAS',
			descTalhao: 'TALHAO VARJAO',
			dtAplicacao: '23/04/2018',
			aplicacoProd: [],
		},
		{
			id: 718,
			descEmpresa: 'GRUPO XYZ',
			descFazenda: 'FAZENDA ABC DE GOIAS',
			descTalhao: 'TALHAO NORTE',
			dtAplicacao: '20/04/2018',
			aplicacoProd: [],
		},
		{
			id: 717,
			descEmpresa: 'GRUPO XYZ',
			descFazenda: 'FAZENDA ABC DE GOIAS',
			descTalhao: 'TALHAO PORTEIRA',
			dtAplicacao: '19/04/2018',
			aplicacoProd: [],
		},
	],
};

const setProduct = (state, action) => {
	let aplicacaoProd = state.aplicacao.aplicacaoProd.filter(val => {
		return val.id !== action.produto.id;
	});

	//Agora adiciona
	aplicacaoProd = aplicacaoProd.concat(action.produto);

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
				id_produto: 0,
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
