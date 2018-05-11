import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { aplicacao } from '../data';
import { GridAplicacao, CabecalhoAplicacao, Separator } from '../components/Grid';

const AplicacaoLista = props => {
	switchToAplicacao = () => {
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
				renderItem={({ item }) => <GridAplicacao data={item} onPress={switchToAplicacao} />}
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

export default connect(mapStateToProps)(AplicacaoLista);
