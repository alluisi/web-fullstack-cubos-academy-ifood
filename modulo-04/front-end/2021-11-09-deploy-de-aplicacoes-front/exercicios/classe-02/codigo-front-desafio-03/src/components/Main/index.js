import React, { useEffect } from 'react'

import { 
  Typography, 
} from '@material-ui/core'
import useStyles from './styles';
import Sidebar from '../Sidebar';
import useAuth from '../../hook/useAuth';
import { get } from '../../services/ApiClient';
import useLoja from '../../hook/useLoja';

function Main({ children }) {
  const classes = useStyles();
  const { token } = useAuth();
  const { nomeLoja, atualizar } = useLoja();

  useEffect(() => {
    async function carregarUsuario() {
      const { dados } = await get('perfil', token);

      atualizar(dados.nome_loja);
    }

    carregarUsuario();
  // eslint-disable-next-line
  }, [token]);

  return (
    <div className={classes.root}>
      <Sidebar/>
      <div className={classes.container}>
        <Typography variant="h2">{nomeLoja}</Typography>
        {children}
      </div>
    </div>
  )
}

export default Main;
