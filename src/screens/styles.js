import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width;
const imageHeight = Dimensions.get('window').height;

const styles = EStyleSheet.create({
    imageBackground: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageHeight
    },
    buttonStyle: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
});

export default styles;
