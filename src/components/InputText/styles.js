import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Dimensions } from 'react-native';

const INPUT_HEIGHT = 40;
const BORDER_RADIUS = 20;

const styles = EStyleSheet.create({
	sizeContainer: {
		width: '100%',
	},
	container: {
		backgroundColor: '$white',
		width: '100%',
		height: INPUT_HEIGHT,
		borderRadius: BORDER_RADIUS,
		flexDirection: 'row',
		alignItems: 'center',
	},
	containerDisabled: {
		backgroundColor: '$lightGray',
	},
	labelContainer: {
		height: INPUT_HEIGHT,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '$white',
		borderTopLeftRadius: BORDER_RADIUS,
		borderBottomLeftRadius: BORDER_RADIUS,
	},
	labelText: {
		fontWeight: '600',
		fontSize: 20,
		paddingHorizontal: 16,
		color: '$primaryGreen',
	},
	input: {
		height: INPUT_HEIGHT,
		flex: 1,
		fontSize: 18,
		paddingHorizontal: 8,
		color: '$inputText',
	},
	border: {
		height: INPUT_HEIGHT,
		width: StyleSheet.hairlineWidth,
		backgroundColor: '$border',
	},
	titleContainer: {
		backgroundColor: '$white',
		height: INPUT_HEIGHT,
		borderRadius: 4,
		justifyContent: 'center',
		marginRight: 10,
	},
	titleInput: {
		fontSize: 16,
		paddingLeft: 10,
		justifyContent: 'center',
		marginRight: 20,
		fontWeight: '400',
		color: '$darkText',
	},
	titleText: {
		color: '$white',
		fontSize: 16,
		fontWeight: '300',
	},
});

export default styles;
