import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 40;
const BORDER_RADIUS = 4;

const inputWidth = Dimensions.get('window').width * 0.45;

const styles = EStyleSheet.create({
    container: {
        backgroundColor: '$white',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        marginVertical: 11,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center'
    },
    input: {
        fontSize: 14,
        paddingLeft: 10
    },
    text : {
        color: '$white',
        marginLeft: 20,
        fontSize: 16,
        fontWeight: '300',
        width: inputWidth,
    }
    
});

export default styles;