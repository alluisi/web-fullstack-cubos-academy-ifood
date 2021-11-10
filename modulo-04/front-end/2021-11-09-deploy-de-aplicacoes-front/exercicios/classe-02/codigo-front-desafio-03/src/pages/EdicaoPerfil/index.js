import React, { useState, useEffect } from 'react';
import { 
  Divider, 
  Typography, 
  Button,
  TextField,
  Snackbar,
  Backdrop,
  CircularProgress,
} from '@material-ui/core'
import useStyles from './styles';
import { Link, useHistory } from 'react-router-dom';
import InputSenha from '../../components/InputSenha';

import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';
import { put } from '../../services/ApiClient';
import useAuth from '../../hook/useAuth';
import useLoja from '../../hook/useLoja';

function EdicaoPerfil() {
  const classes = useStyles();
  const history = useHistory();
  const [empty, setEmpty] = useState([]);
  const { token } = useAuth();
  const { atualizar } = useLoja();
  const { handleSubmit, register } = useForm();
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  
  useEffect(() => {

  },[]);

  async function onSubmit(data) {
    if (data.senha !== data.senhaRepetida) {
      setErro('As senhas devem ser iguais!');
      return;
    }

    try {
      setCarregando(true);
      setErro('');

      const dadosAtualizados = Object.fromEntries(Object.entries(data).filter(([, value]) => value));

      const { dados, erro } = await put('perfil', dadosAtualizados, token);

      if (erro) {
        setErro(dados);
        return; 
      }

      if (dadosAtualizados.nome_loja) {
        atualizar(dadosAtualizados.nome_loja);
      }

      history.push('/perfil');
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4">Editar Perfil</Typography>
      <div className={classes.formContainer}>
        <TextField label="Seu nome" {...register('nome')} />
        <TextField label="Nome da loja" {...register('nome_loja')} />
        <TextField label="E-mail"  {...register('email')} />
        <InputSenha label="Nova senha" register={() => register('senha')}/>
        <InputSenha label="Repita a nova senha" register={() => register('senhaRepetida')} />
      </div>
      <Divider className={classes.divider} />
      <Link to="/perfil" className={classes.link}>CANCELAR</Link>
      <Button 
        className={classes.botao}
        type="submit"
      >EDITAR PERFIL</Button>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={3000}
        open={!!erro}
        key={erro}
      >
        <Alert onClose={() => setErro('')} severity="error">
          {erro}
        </Alert>
      </Snackbar>
      <Backdrop className={classes.backdrop} open={carregando}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </form>
  )
}

export default EdicaoPerfil;
