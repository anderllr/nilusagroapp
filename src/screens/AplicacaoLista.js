import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { aplicacao } from '../data';
import { GridAplicacao, CabecalhoAplicacao, Separator } from '../components/Grid';

import { selectAplicacao } from '../store/actions';

const AplicacaoLista = props => {
	switchToAplicacao = item => {
		props.onSelectAplicacao(item.id);
		props.navigator.switchToTopTab({
			tabIndex: 1,
		});
	};

	return (
		<View style={{ flex: 1 }}>
			<StatusBar barStyle="default" translucent={false} />
			<CabecalhoAplicacao />
			<FlatList
				data={props.aplicacoes}
				renderItem={({ item }) => <GridAplicacao data={item} onPress={() => switchToAplicacao(item)} />}
				keyExtractor={item => item.id.toString()}
				ItemSeparatorComponent={Separator}
			/>
		</View>
	);
};

AplicacaoLista.propTypes = {
	aplicacoes: PropTypes.array,
};

const mapStateToProps = state => ({
	aplicacoes: state.aplicacao.aplicacoes,
});

const mapDispatchToProps = dispatch => {
	return {
		onSelectAplicacao: id => dispatch(selectAplicacao(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AplicacaoLista);
