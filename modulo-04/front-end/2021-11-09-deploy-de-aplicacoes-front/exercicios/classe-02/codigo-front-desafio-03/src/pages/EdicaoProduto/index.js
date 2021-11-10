import React, { useState, useEffect } from 'react';
import { 
  Divider, 
  Typography, 
  Button,
  TextField,
  InputAdornment,
  Snackbar,
  Backdrop,
  CircularProgress
} from '@material-ui/core'
import useStyles from './styles';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import InputSenha from '../../components/InputSenha';

import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';
import useAuth from '../../hook/useAuth';
import { put } from '../../services/ApiClient';

function EdicaoProduto() {
  const classes = useStyles();
  const history = useHistory();
  const { id, nome, imagem } = history.location.state ?? {};
  const { register, handleSubmit } = useForm();
  const { token } = useAuth();
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [old, setOld] = useState([]);

  async function onSubmit(data) {
    try {
      setCarregando(true);
      setErro('');

      const dadosAtualizados = Object.fromEntries(Object.entries(data).filter(([, value]) => value));

      const { dados, erro } = await put(`produtos/${id}`, dadosAtualizados, token);

      if (erro) {
        setErro(dados);
        return; 
      }

      history.push('/produtos');
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4">Editar produto</Typography>
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <TextField label="Nome do produto" {...register('nome')} />
          <div className="columns">
          <TextField
            label="Preço"
            {...register('preco')}
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>,
            }}
          />
          <TextField
            label="Estoque"
            {...register('estoque')}
            InputProps={{
              startAdornment: <InputAdornment position="start">Un</InputAdornment>,
            }}
          />
          </div>
          <TextField label="Descrição do produto" {...register('descricao')} />
          <TextField label="Imagem" {...register('imagem')} />
        </div>
        <img src={imagem} alt={nome} />
      </div>
      <Divider className={classes.divider} />
      <Link to="/produtos" className={classes.link}>CANCELAR</Link>
      <Button 
        className={classes.botao}
        type="submit"
      >SALVAR ALTERAÇÕES</Button>
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

export default EdicaoProduto;
