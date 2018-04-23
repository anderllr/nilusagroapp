import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar, Dimensions, StyleSheet } from 'react-native';

const imageWidth = Dimensions.get('window').width / 4;
const screenWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 20,
        right: 0,
        top: 20,
        '@media ios': {
            paddingTop: 20
        },
    },
    logo: {
        width: imageWidth
    },
    text : {
        color: '$white',
        fontSize: 28,
        letterSpacing: -0.5,
        fontWeight: '600',
    },
    containerText: {
        alignItems:'center',
        position:'absolute',
        width: screenWidth
    },
    line: {
        marginBottom: 15,
        backgroundColor: '$white',
        height: StyleSheet.hairlineWidth,
        width: '100%'
    },
});

export default styles;