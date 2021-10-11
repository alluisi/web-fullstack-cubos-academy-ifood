import './styles.css';
import { useState, useEffect } from "react"
import InputMask from "react-input-mask";

function ModalCarrinho({ carrinho, setCarrinho, setModalCarrinho }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({});

  useEffect(() => {
    const viaCep = async () => {
      if (cep.replace("-", "").length === 8) {
        try {
          let resultado = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
          resultado = await resultado.json();
          console.log(resultado);
          setEndereco(resultado);
        } catch (err) {
          console.log(err.message);
        }
      }
    }
    viaCep();
  }, [cep])


  const removerProduto = (produto) => {
    const resposta = window.confirm("Deseja remover o item " + produto.title)
    if (resposta) {
      let temp = [...carrinho]
      const posicao = temp.indexOf(produto);
      temp.splice(posicao, 1);
      setCarrinho(temp);
    }
  }

  const finalizar = () => {
    setCarrinho([]);
    setModalCarrinho(false);
  }

  return (
    <div className='modal'>
      <img onClick={() => setModalCarrinho(false)} className='cancelar' src="./cancel.png" alt="fechar" width="100" />
      <div className='modal-content'>
        <h1>Carrinho de compras</h1>
        <div className="div-table">
          <div className="div-table-row">
            <div className="div-table-col" align="center">ID</div>
            <div className="div-table-col">Nome</div>
            <div className="div-table-col">Preço</div>
            <div className="div-table-col">Remover</div>
          </div>
          {carrinho.map(item => (
            <div className="div-table-row">
              <div className="div-table-col">{item.id}</div>
              <div className="div-table-col titulo">{item.title}</div>
              <div className="div-table-col">R$ {item.prices[0].price}</div>
              <div style={{ cursor: 'pointer' }} className="div-table-col" onClick={() => removerProduto(item)}>Excluir</div>
            </div>
          ))}
        </div>
        <div className="endereco">
          <div className="endereco-cep">
            <h3>Digite seu CEP</h3>
            <InputMask className="endereco-input" mask="99999-999" value={cep} onChange={(e) => setCep(e.target.value)} />
          </div>
          {endereco.logradouro !== undefined && (
            <>
              <div className="endereco-grupo">
                <div className="endereco-item">Rua: {endereco.logradouro}</div>
                <div className="endereco-item">Bairro: {endereco.bairro}</div>
                <div className="endereco-item">Localidade: {endereco.localidade}/{endereco.uf}</div>
              </div>
              <div className="endereco-finalizar">
                <button className="endereco-btn" onClick={finalizar}>Finalizar</button>
              </div>
            </>
          )}
        </div>




      </div>
    </div>
  );
}

export default ModalCarrinho;
