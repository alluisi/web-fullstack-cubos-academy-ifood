import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import './styles.css';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#007DFF',
    },
    error: {
      main: '#FF505F',
      light: 'rgb(0, 0, 0, 0.7)',
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,  
  document.getElementById('root')
);
