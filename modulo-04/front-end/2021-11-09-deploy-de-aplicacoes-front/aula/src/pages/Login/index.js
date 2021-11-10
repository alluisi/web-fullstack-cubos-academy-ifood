import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Typography,
  Backdrop,
  CircularProgress
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import useStyles from './styles';

import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

import useAuth from '../../hook/useAuth';
import { post } from '../../services/ApiClient';
import InputSenha from '../../components/InputSenha';
import useLoja from '../../hook/useLoja';

function Login() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const { atualizar } = useLoja();
  const { logar } = useAuth();

  async function onSubmit(data) {
    setCarregando(true);
    setErro('');

    try {
      const { dados, erro } = await post('login', data);

      if (erro) {
        setErro(dados);
        return;
      }

      logar(dados.token);
      atualizar(dados.usuario.nome_loja)

      history.push('/produtos');
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <form 
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Typography variant="h4">Login</Typography>
            <TextField className={classes.email} label="E-mail" {...register('email', { required: true })} />
            <InputSenha className={classes.senha} label="Senha" register={() => register('senha', { required: true })} />
            {erro && <Alert severity="error">{erro}</Alert>}
            <Button className={classes.botao} type="submit">
              Entrar 
            </Button>
            <Typography variant="body2">Primeira vez aqui? <Link to='/cadastro'>CRIE UMA CONTA</Link></Typography>
            <Backdrop className={classes.backdrop} open={carregando}>
              <CircularProgress color="inherit" />
            </Backdrop>
          </form>     
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;