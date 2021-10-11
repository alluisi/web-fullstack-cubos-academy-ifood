import './style.css';

function Card({ item, adicionarProduto }) {
  return (
    <div className="card">
      <img src={item.thumbnail.path + '.' + item.thumbnail.extension} alt="Avatar" style={{ width: '100%', height: '300px' }} />
      <div className="container">
        <h4 className="titulo"><b>{item.title}</b></h4>
        <p>R$ {item.prices[0].price}</p>
        <div className="adicionar">
          <button onClick={() => adicionarProduto(item)} className="btn-adicionar">Adicionar</button>
        </div>
      </div>
    </div>
  );
}

export default Card;