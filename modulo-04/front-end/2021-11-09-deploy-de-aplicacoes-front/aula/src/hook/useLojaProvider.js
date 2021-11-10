import { useState } from "react";
import { useLocalStorage } from 'react-use';

export default function useLojaProvider() {
  // eslint-disable-next-line
  const [nomePersistido, setNomePersistido, removeNomePersistido] = useLocalStorage('NOME_LOJA', '');

  const [nomeLoja, setNomeLoja] = useState(nomePersistido);

  const atualizar = (nome) => {
    setNomeLoja(nome)
    setNomePersistido(nome);
  }
 
  return {
    nomeLoja,
    atualizar,
  };
}
