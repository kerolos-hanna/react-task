import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    width: '100%',
    height: '500px',
    backgroundSize: 'contain',
  },
  list: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  paging: {
    '& > *': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
    },
  },

  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '120vh',
    backgroundColor: '#F6F6F8',
  },
  heroText: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  progress: {
    left: '50%',
    top: '300px',
    marginLeft: '-4em',
    position: 'absolute',
  },
}));

export default useStyles;