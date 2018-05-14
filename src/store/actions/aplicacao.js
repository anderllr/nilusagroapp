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
} from './actionTypes';

export const addAplicacao = () => ({
	type: ADD_APLICACAO,
});

export const addProduto = produto => {
	return {
		type: ADD_PRODUTO,
		produto,
	};
};

export const delProduto = id => {
	return {
		type: DELETE_PRODUTO,
		id,
	};
};

export const changeTalhao = option => {
	return {
		type: SELECT_TALHAO,
		option,
	};
};

export const changeProduto = option => {
	return {
		type: SELECT_PRODUTO,
		option,
	};
};

export const changeEmpresa = option => {
	return {
		type: SELECT_EMPRESA,
		option,
	};
};

export const changeFazenda = option => {
	return {
		type: SELECT_FAZENDA,
		option,
	};
};

export const changeDose = value => {
	return {
		type: CHANGE_DOSE,
		value,
	};
};

export const changeQtde = value => {
	return {
		type: CHANGE_QTDE,
		value,
	};
};

export const selectAplicacao = id => {
	return {
		type: SELECT_APLICACAO,
		id,
	};
};

export const limpaAplicacao = () => ({
	type: LIMPA_APLICACAO,
});
