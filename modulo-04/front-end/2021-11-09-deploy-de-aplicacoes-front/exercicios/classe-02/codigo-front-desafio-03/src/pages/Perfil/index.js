import React, { useEffect, useState } from 'react';
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
import { useHistory } from 'react-router';
import Alert from '@material-ui/lab/Alert';
import { get } from '../../services/ApiClient';
import useAuth from '../../hook/useAuth';

function Perfil() {
  const classes = useStyles();
  const history = useHistory();
  const { token } = useAuth();
  const [usuario, setUsuario] = useState({ nome: '', nome_loja: '', email: '' });
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    async function carregarUsuario() {
      try {  
        setCarregando(true);
        setErro('');

        const { dados, erro } = await get('perfil', token);
        
        if(erro) {
          setErro(dados);
          return;
        }

        setUsuario(dados);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    }

    carregarUsuario();
  }, [token]);

  return (
    <>
      <Typography variant="h4">Perfil</Typography>
      <div className={classes.formContainer}>
        <TextField label="Seu nome" disabled value={usuario.nome} />
        <TextField label="Nome da loja" disabled value={usuario.nome_loja} />
        <TextField label="E-mail" disabled value={usuario.email} />
      </div>
      <Divider className={classes.divider} />
      <Button 
        className={classes.botao}
        onClick={() => history.push('/perfil/editar')}
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
    </>
  )
}

export default Perfil;
