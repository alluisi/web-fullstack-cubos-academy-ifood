import React, { useState } from 'react';
import { 
  Divider, 
  Typography, 
  Button,
  TextField,
  InputAdornment,
  Snackbar,
  Backdrop,
  CircularProgress,
} from '@material-ui/core'
import useStyles from './styles';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';
import { post } from '../../services/ApiClient';
import useAuth from '../../hook/useAuth';
import Main from '../../components/Main';

function NovoProduto() {
  const classes = useStyles();
  const history = useHistory();
  const { token } = useAuth();
  const { register, handleSubmit } = useForm();
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [test, setTest] = useState([]);

  console.log("Test");

  async function onSubmit(data) {
    try {
      setCarregando(true);
      setErro('');

      data.categoria = 'nao categorizado';

      const { dados, erro } = await post('produtos', data, token);

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
      <Typography variant="h4">Adicionar produto</Typography>
      <div className={classes.formContainer}>
        <TextField label="Nome do produto" {...register('nome', { required: true })} />
        <div className="columns">
        <TextField
          label="Preço"
          {...register('preco', { required: true })}
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          }}
        />
        <TextField
          label="Estoque"
          {...register('estoque', { required: true })}
          InputProps={{
            startAdornment: <InputAdornment position="start">Un</InputAdornment>,
          }}
        />
        </div>
        <TextField label="Descrição do produto" {...register('descricao', { required: true })} />
        <TextField label="Imagem" {...register('imagem')} />
      </div>
      <Divider className={classes.divider} />
      <Link to="/produtos" className={classes.link}>CANCELAR</Link>
      <Button 
        className={classes.botao}
        type="submit"
      >ADICIONAR PRODUTO</Button>
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

export default NovoProduto;
