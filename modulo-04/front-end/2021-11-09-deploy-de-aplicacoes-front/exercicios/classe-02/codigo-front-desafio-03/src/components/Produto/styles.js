import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    borderRadius: 24,
    position: 'relative',

    "& h6, & p": {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },

    "& p": {
      marginBottom: 10,
      fontSize: 12
    },

    "& span": {
      fontSize: 12,
      fontWeight: 600
    }
  },
  media: {
    height: 240,
  },
  cardInfo: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  botao: {
    color: theme.palette.error.light,
    backgroundColor: theme.palette.error.main,
    borderRadius: '50%',
    minWidth: 'unset',
    padding: 12,
    position: 'absolute',
    zIndex: 1,
    top: 20,
    left: 20,
  },
  botaoCancelarModal: {
    color: '#FFF',
    backgroundColor: theme.palette.primary.main,
  },
  botaoDeletarModal: {
    color: '#FFF',
    backgroundColor: theme.palette.error.main,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default useStyles;