import './style.css';

function Menu({ setModalCarrinho, mostrarFiltro, setMostrarFiltro }) {
  return (
    <nav className="menu">
      <div className="left menu-item"><img src="./logo.png" alt="Alex" width="200" /></div>
      <div className="right menu-item" onClick={() => setModalCarrinho(true)}>Carrinho</div>
      <div className="right menu-item" onClick={() => setMostrarFiltro(!mostrarFiltro)}>Filtro</div>
    </nav>
  );
}

export default Menu;