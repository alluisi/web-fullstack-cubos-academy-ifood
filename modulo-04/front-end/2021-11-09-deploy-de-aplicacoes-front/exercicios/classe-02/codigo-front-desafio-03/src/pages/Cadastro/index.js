import React, { useState, useEffect } from 'react';
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

import { post } from '../../services/ApiClient';
import InputSenha from '../../components/InputSenha';

function Cadastro() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const test = "";

  async function onSubmit(data) {
    if (data.senha !== data.senhaRepetida) {
      setErro('As senhas devem ser iguais!');
      return;
    }

    setCarregando(true);
    setErro('');

    try {
      delete data.senhaRepetida;

      const { dados, erro } = await post('usuarios', data);

      if (erro) {
        setErro(dados);
        return;
      }
      
      history.push('/login');
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
            <Typography variant="h4">Criar uma conta</Typography>
            <TextField className={classes.input} label="Nome" {...register('nome', { required: true })} />
            <TextField className={classes.input} label="Nome da loja" {...register('nome_loja', { required: true })} />
            <TextField className={classes.input} label="E-mail" {...register('email', { required: true })} />
            <InputSenha className={classes.senha} label="Senha" register={() => register('senha', { required: true })} />
            <InputSenha className={classes.senha} label="Repita a senha" register={() => register('senhaRepetida', { required: true })} />
            {erro && <Alert severity="error">{erro}</Alert>}
            <Button className={classes.botao} type="submit">
              CRIAR CONTA 
            </Button>
            <Typography variant="body2">Já possui uma conta? <Link to='/login'>ACESSE</Link></Typography>
            <Backdrop className={classes.backdrop} open={carregando}>
              <CircularProgress color="inherit" />
            </Backdrop>
          </form>     
        </CardContent>
      </Card>
    </div>
  );
}

export default Cadastro;