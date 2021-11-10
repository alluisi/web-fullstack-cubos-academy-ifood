import React, { useState, useEffect } from 'react';
import { 
  Divider, 
  Typography, 
  Grid,
  Button,
  Snackbar,
  Backdrop,
  CircularProgress,
} from '@material-ui/core'
import Produto from '../../components/Produto';
import useStyles from './styles';
import { useHistory } from 'react-router';
import { get } from '../../services/ApiClient';
import useAuth from '../../hook/useAuth';
import Alert from '@material-ui/lab/Alert';

function Produtos() {
  const classes = useStyles();
  const history = useHistory();
  const { token } = useAuth();
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [carregar, setCarregar] = useState(false);

  useEffect(() => {
    setCarregar(false);

    async function carregarProdutos() {
      try {
        setCarregando(true);
        setErro('');

        const { dados, erro } = await get('produtos', token);

        if (erro) {
          setErro(dados);
          return;
        }

        setProdutos(dados);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    }

    carregarProdutos();
  }, [token, carregar]);

  return (
    <>
      <Typography variant="h4">Seus produtos</Typography>
      <Grid container spacing={4}>
        {produtos.map(produto => (
          <Grid className={classes.produto} item key={produto.id}>
            <Produto {...produto} recarregar={() => setCarregar(true)} />
          </Grid>
        ))}
      </Grid>
      <Divider className={classes.divider} />
      <Button 
        className={classes.botao}
        onClick={() => history.push('/produtos/novo')}
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
    </>
  )
}

export default Produtos;
