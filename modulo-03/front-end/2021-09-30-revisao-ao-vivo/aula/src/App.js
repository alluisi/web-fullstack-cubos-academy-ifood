import "./app.css";
import { useRef, useState, useEffect } from "react";
import Menu from "./components/Menu";
import Card from "./components/Card";
import ModalCarrinho from "./components/ModalCarrinho";

function App() {
  const [modalCarrinho, setModalCarrinho] = useState(false);
  const [mostrarFiltro, setMostrarFiltro] = useState(false);
  const [modalDetalhe, setModalDetalhe] = useState(false);
  const [mostrarQuadrinho, setMostrarQuadrinho] = useState(false);
  const [quadrinhos, setQuadrinhos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [carrinho, setCarrinho] = useState([])
  const quadrinhoRef = useRef([])

  useEffect(() => {
    const carregarQuadruinho = async () => {
      const retorno = await fetch("https://gateway.marvel.com/v1/public/comics?ts=1564620172&apikey=388349e2bff871d84fbae2691852e3e1&hash=44731f957b13dcff517d498a11985f0f");
      const resultado = await retorno.json();
      quadrinhoRef.current = resultado.data.results;
      setQuadrinhos(quadrinhoRef.current);
      setMostrarQuadrinho(true);
    }
    carregarQuadruinho()
  }, [])

  useEffect(() => {
    if (filtro.length === 0) {
      setQuadrinhos(quadrinhoRef.current);
    } else {
      const temp = quadrinhoRef.current.filter((item) => {
        return item.title.toUpperCase().indexOf(filtro.toUpperCase()) >= 0 ? true : false;
      })
      setQuadrinhos(temp)
    }
  }, [filtro])

  const adicionarProduto = (produto) => {
    if (!carrinho.includes(produto)) {
      const temp = [...carrinho, produto];
      setCarrinho(temp);
      alert('Item adicionado...')
    } else {
      alert('Item já inserido...')
    }
  }

  return (
    <div className="container">
      <Menu
        setModalCarrinho={setModalCarrinho}
        mostrarFiltro={mostrarFiltro}
        setMostrarFiltro={setMostrarFiltro} />

      <div className="filtro">
        {mostrarFiltro && (
          <input
            type="text"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            placeholder="Digite o nome do quadrinho" />
        )}

      </div>

      <div className="cards">
        {(mostrarQuadrinho && !modalCarrinho) && quadrinhos.map(item => <Card item={item} adicionarProduto={adicionarProduto} />)}
      </div>

      {
        modalCarrinho &&
        (<ModalCarrinho
          carrinho={carrinho}
          setCarrinho={setCarrinho}
          setModalCarrinho={setModalCarrinho}
        />
        )
      }

    </div>

  );
}

export default App;
