import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    placeContent: 'center',
    minHeight: '100vh',
    padding: 20,
  },
  card: {
    maxWidth: 392,
    padding: "88px 86px",
    borderRadius: 16,
    boxShadow: "0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)",

    "& > div": {
      padding: 0
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',

    "& h4": {
      width: 'max-content',
      marginBottom: 88,
    },

    "& p": {
      fontSize: 12
    },

    "& div[role=alert]": {
      marginBottom: 40,
    }
  },
  input: {
    marginBottom: 48,
  },
  senha: {
    marginBottom: 40,
  },
  botao: {
    color: '#FFF',
    backgroundColor: theme.palette.primary.main,
    boxShadow: 'none',
    alignSelf: 'center',
    marginBottom: 24,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default useStyles;