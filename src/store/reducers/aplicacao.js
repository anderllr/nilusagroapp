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
	SELECT_APLICACAO,
	LIMPA_APLICACAO,
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
		id_fazenda: '1',
		descEmpresa: 'GRUPO XYZ',
		descFazenda: 'FAZENDA ABC DE GOIAS',
		descTalhao: 'SELECIONE UM TALHAO',
		dtAplicacao: '14/05/2018',
		talhao_area: '',
		status: 'ATIVO',
		aplicacaoProd: [],
	},
	aplicacoes: [
		{
			id: 722,
			id_empresa: '1',
			id_fazenda: '1',
			descEmpresa: 'GRUPO XYZ',
			descFazenda: 'FAZENDA ABC DE GOIAS',
			descTalhao: 'TALHAO SUL',
			dtAplicacao: '28/04/2018',
			talhao_area: '120 HA',
			status: 'ATIVO',
			aplicacaoProd: [
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
			id_empresa: '1',
			id_fazenda: '1',
			descEmpresa: 'GRUPO XYZ',
			descFazenda: 'FAZENDA ABC DE GOIAS',
			descTalhao: 'TALHAO NORTE',
			talhao_area: '145 HA',
			dtAplicacao: '25/04/2018',
			status: 'INTEGRADO',
			aplicacaoProd: [
				{ id: 424, descProd: 'PROFOL NICOMO DRY', qtDose: 2.3, qtTotal: 145 },
				{ id: 727, descProd: 'EXALT', qtDose: 2.3, qtTotal: 145 },
				{ id: 475, descProd: 'PROFOL SUPERA', qtDose: 2.3, qtTotal: 145 },
				{ id: 149, descProd: 'DANIMEN 300 CE', qtDose: 2.3, qtTotal: 145 },
			],
		},
		{
			id: 720,
			id_empresa: '1',
			id_fazenda: '1',
			descEmpresa: 'GRUPO XYZ',
			descFazenda: 'FAZENDA ABC DE GOIAS',
			descTalhao: 'TALHAO SUDOESTE',
			talhao_area: '182 HA',
			dtAplicacao: '24/04/2018',
			status: 'ATIVO',
			aplicacaoProd: [],
		},
		{
			id: 719,
			id_empresa: '1',
			id_fazenda: '1',
			descEmpresa: 'GRUPO XYZ',
			descFazenda: 'FAZENDA ABC DE GOIAS',
			descTalhao: 'TALHAO VARJAO',
			talhao_area: '132 HA',
			dtAplicacao: '23/04/2018',
			status: 'INTEGRADO',
			aplicacaoProd: [],
		},
		{
			id: 718,
			id_empresa: '1',
			id_fazenda: '1',
			descEmpresa: 'GRUPO XYZ',
			descFazenda: 'FAZENDA ABC DE GOIAS',
			descTalhao: 'TALHAO NORTE',
			talhao_area: '145 HA',
			dtAplicacao: '20/04/2018',
			status: 'INTEGRADO',
			aplicacaoProd: [],
		},
		{
			id: 717,
			id_empresa: '1',
			id_fazenda: '1',
			descEmpresa: 'GRUPO XYZ',
			descFazenda: 'FAZENDA ABC DE GOIAS',
			descTalhao: 'TALHAO PORTEIRA',
			talhao_area: '163 HA',
			dtAplicacao: '19/04/2018',
			status: 'INTEGRADO',
			aplicacaoProd: [],
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

const delProduct = (state, action) => {
	let aplicacaoProd = state.aplicacao.aplicacaoProd.filter(val => {
		return val.id !== action.id;
	});

	return {
		...state.aplicacao,
		aplicacaoProd,
	};
};

const setAplicacao = (state, action) => {
	let aplicacao = state.aplicacao;

	//Significa que é nova
	if (aplicacao.id === 0) {
		aplicacao.id = Math.random();
	}

	let aplicacoes = state.aplicacoes.filter(val => {
		return val.id !== aplicacao.id;
	});

	//Agora adiciona
	aplicacoes = aplicacoes.concat(aplicacao);

	return aplicacoes;
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_APLICACAO:
			return {
				...state,
				aplicacao: initialState.aplicacao,
				aplicacoes: setAplicacao(state, action),
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
		case DELETE_PRODUTO:
			return {
				...state,
				aplicacao: delProduct(state, action),
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
		case SELECT_APLICACAO:
			return {
				...state,
				aplicacao: state.aplicacoes.find(val => {
					return val.id === action.id;
				}),
			};
		case LIMPA_APLICACAO:
			return {
				...state,
				aplicacao: initialState.aplicacao,
			};
		default:
			return state;
	}
};

export default reducer;
