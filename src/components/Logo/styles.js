import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    $smallContainerSize: imageWidth / 2,
    $smallImageSize: imageWidth / 2,
    $largeContainerSize: imageWidth,
    $largeImageSize: imageWidth,
    container: {
        alignItems: 'center',
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '$largeContainerSize',
        height: '$largeContainerSize',
        marginTop: 30
    },
    logo: {
        width: '$largeImageSize'
    },
    text: {
        color: '$white',
        fontSize: 28,
        letterSpacing: -0.5,
        marginTop: 1,
        fontWeight: '600',
    },
});