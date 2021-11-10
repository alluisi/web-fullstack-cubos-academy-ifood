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
      marginBottom: 130
    },

    "& .columns": {
      display: 'grid',
      gridAutoFlow: 'column',
      gap: 24
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
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default useStyles;