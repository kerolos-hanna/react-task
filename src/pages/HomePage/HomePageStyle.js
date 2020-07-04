/** @format */

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	list: {
		'&  *': {
			marginTop: theme.spacing(2),
		},
	},
	heroText: {
		textAlign: 'center',
		padding: theme.spacing(3),
	},
}));

export default useStyles;
