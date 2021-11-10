import React, { useState } from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Backdrop,
  CircularProgress
} from '@material-ui/core';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import useStyles from './styles';
import { del } from '../../services/ApiClient';
import { useHistory } from 'react-router';
import useAuth from '../../hook/useAuth';
import Alert from '@material-ui/lab/Alert';

function Produto({ descricao, estoque, id, imagem, nome, preco, recarregar }) {
  const classes = useStyles();
  const history = useHistory();
  const { token } = useAuth();
  const [modalAberto, setModalAberto] = useState(false);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  function handleClose() {
    setModalAberto(false);
  }

  async function handleDelete() {
    setModalAberto(false);
    setCarregando(true);
    setErro('');

    const { dados, erro } = await del(`produtos/${id}`, token);
    if (erro) {
      setErro(dados);
    }

    setCarregando(false);
    recarregar();
  }

  return (
    <>
      <Card className={classes.root}>
        <Button className={classes.botao} onClick={() => setModalAberto(true)} ><DeleteSweepIcon/></Button>
        <CardActionArea onClick={() => history.push(`/produtos/${id}/editar`, { id, nome, imagem })}>
          <CardMedia
            className={classes.media}
            image={imagem}
            title={nome}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {nome}
            </Typography>
            <Typography variant="body2" component="p">
              {descricao}
            </Typography>
            <div className={classes.cardInfo}>
              <Typography variant="body2" color="textSecondary" component="span">
                {estoque} UNIDADE(S)
              </Typography>
              <Typography variant="body2" component="span">
                R$ {preco / 100}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        open={modalAberto}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Remover produto do catálogo?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Esta ação não pode ser desfeita
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={classes.botaoCancelarModal} onClick={handleClose}>
            MANTER PRODUTO
          </Button>
          <Button className={classes.botaoDeletarModal} onClick={handleDelete} autoFocus>
            REMOVER
          </Button>
        </DialogActions>
      </Dialog>
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
  );
}

export default Produto;