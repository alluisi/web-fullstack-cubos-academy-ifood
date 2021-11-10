import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
  produto: {
    flexGrow: 1,
    flexBasis: 233,
    maxWidth: 233
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default useStyles;