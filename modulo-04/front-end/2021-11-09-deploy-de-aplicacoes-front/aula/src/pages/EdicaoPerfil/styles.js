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
      marginBottom: 10
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
  link: {
    marginRight: 24
  }
}));

export default useStyles;