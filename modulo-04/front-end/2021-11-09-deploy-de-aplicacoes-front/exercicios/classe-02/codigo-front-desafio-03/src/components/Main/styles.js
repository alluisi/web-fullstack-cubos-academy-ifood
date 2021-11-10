import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  container: {
    padding: '78px 0 48px 74px',
    minWidth: '80%',

    "& h2": {
      marginBottom: 85
    },
    "& h4": {
      marginBottom: 60
    }
  }
}));

export default useStyles;