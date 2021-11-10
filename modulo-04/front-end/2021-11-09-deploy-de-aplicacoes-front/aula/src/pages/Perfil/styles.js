import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'grid',
    gridAutoFlow: 'row',
    gap: 48,

    "& > *": {
      maxWidth: 392
    },

    "& > :last-child": {
      marginBottom: 168
    }
  },
  divider: {
    marginTop: 15,
    marginBottom: 48,
    maxWidth: '80%',
  },
  botao: {
    color: '#FFF',
    backgroundColor: theme.palette.primary.main,
    boxShadow: 'none',  
    marginLeft: 'auto'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default useStyles;