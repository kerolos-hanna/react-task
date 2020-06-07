import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardImage: {
    boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
  },
  paper: {
    maxWidth: '55rem',
    boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
    padding: theme.spacing(4),
    position: 'absolute',
    top: '30%',
    marginLeft: 'auto',
    wordBreak: 'break-word',
    textAlign: 'justify',
  },
  paperSmallScreen: {
    boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
    padding: theme.spacing(4),
    wordBreak: 'break-word',
    textAlign: 'justify',
    margin: '-60px 0px 0px',
  },
  
}));

export default useStyles;