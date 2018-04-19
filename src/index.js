import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { AlertProvider } from './components/Alert';
import Home from './screens/Home';
import Aplicacao from './screens/Aplicacao';

EStyleSheet.build({
    $primaryGreen: '#35a788',
    $darkGreen: '#00482F',
    $mediumGreen: '#00664B',

    $white: '#fff',
    $border: '#E2E2E2',
    $inputText: '#008669',
    $lightGray: '#F0F0F0',
    $darkText: '#002B16'
});

export default () => (
    <AlertProvider>
        <Aplicacao />
    </AlertProvider> 
);