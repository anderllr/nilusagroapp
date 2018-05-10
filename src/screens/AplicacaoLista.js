import React from 'react';
import { View, FlatList, StatusBar } from 'react-native';

import { aplicacao } from '../data';
import { GridAplicacao, CabecalhoAplicacao, Separator } from '../components/Grid';

const AplicacaoLista = () => {
	return (
		<View style={{ flex: 1 }}>
			<StatusBar barStyle="default" translucent={false} />
			<CabecalhoAplicacao />
			<FlatList
				data={aplicacao}
				renderItem={({ item }) => <GridAplicacao data={item} onPress={() => null} />}
				keyExtractor={item => item.id.toString()}
				ItemSeparatorComponent={Separator}
			/>
		</View>
	);
};

export default AplicacaoLista;
