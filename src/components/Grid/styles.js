import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const styles = EStyleSheet.create({
	$underlayColor: '#000',
	row: {
		paddingHorizontal: 20,
		paddingVertical: 3,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '$white',
	},
	title: {
		paddingHorizontal: 20,
		paddingVertical: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '$primaryGreen',
	},
	titleText: {
		fontSize: 16,
		color: '$white',
		fontWeight: 'bold',
	},
	text: {
		fontSize: 18,
		color: '$darkText',
	},
	textRight: {
		textAlign: 'right',
		fontSize: 16,
		color: '$darkText',
		paddingRight: 20,
	},
	textCenter: {
		textAlign: 'center',
		fontSize: 16,
		color: '$darkText',
		paddingRight: 20,
	},
	separator: {
		backgroundColor: '$border',
		flex: 1,
		height: 1.5,
	},
	button: {
		alignItems: 'center',
		backgroundColor: '$red',
		width: '100%',
		borderRadius: 4,
	},
	wrapper: {
		alignItems: 'center',
	},
	textButton: {
		color: '$white',
		fontSize: 14,
		fontWeight: '300',
		paddingVertical: 5,
	},
	rowLista: {
		paddingHorizontal: 20,
		paddingVertical: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '$white',
	},
});

export default styles;
