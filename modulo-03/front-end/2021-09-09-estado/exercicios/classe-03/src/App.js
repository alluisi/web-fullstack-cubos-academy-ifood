import hamburguer from './assets/hamburguer.png';
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  function adicionar() {
    setContador(contador + 1);
  }

  function remover() {
    setContador(contador - 1);
  }

  return (
    <div className="App">
      <div className='card'>
        <img src={hamburguer}></img>
        <div className='descricao'>
          <h2>Hamburguer</h2>
          <p>
            Arcu, sagittis, ut lectus congue dapibus semper odio a, lobortis.
          </p>
        </div>
        <div className='botoes'>
          <button onClick={remover}>-</button>
          <span>{contador}</span>
          <button onClick={adicionar}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
