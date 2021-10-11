import './App.css';
import produtos from './assets/products.png';
import modelo from './assets/model.png';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="background">
          <div className="card call-to-action">
            <h1>O presente da felicidade</h1>
            <p>
              Demonstre sua gratidão com nosso pacote de presentes, grandes e pequenos, especialmente feito para espalhar alegria para aqueles que você ama.
            </p>
            <a className="btn" href="#">COMPRAR</a>
          </div>
        </div>
        <div className="card produto produto-1">
          <div className="conteudo-card">
            <h1>Pronto para a coleção de outono</h1>
            <p>
              Teste a nossa nova coleção de outono - todas com as maravilhosas cores a sua volta.
            </p>
            <a className="btn" href="#">COMPRAR</a>
          </div>
          <img src={produtos} alt="Produtos" />
        </div>
        <div className="card produto produto-2">
          <div className="conteudo-card">
            <h1>Pronto para a coleção de outono</h1>
            <p>
              Teste a nossa nova coleção de outono - todas com as maravilhosas cores a sua volta.
            </p>
            <a className="btn" href="#">COMPRAR</a>
          </div>
          <img src={modelo} alt="Modelo" />
        </div>
      </div>
    </div>
  );
}

export default App;
