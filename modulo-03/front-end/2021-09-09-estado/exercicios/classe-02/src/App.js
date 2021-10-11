import kelvin from './assets/kelvin-costa.png';
import { useState } from 'react';

function App() {
  const [seguidores, setSeguidores] = useState(140);
  const [follow, setFollow] = useState('button-dark');

  function seguir() {
    setSeguidores(() => follow === 'button-dark' ? seguidores + 1 : seguidores - 1);
    const novaClasse = follow === 'button-dark' ? 'button-clear' : 'button-dark';
    setFollow(novaClasse);
  }

  return (
    <div className="App">
      <div className='card'>
        <img src={kelvin} alt='Kelvin Costa' />
        <h2>Kelvin Costa</h2>
        <span className='username'>
          @costa
        </span>
        <span className='stats'>
          {seguidores} seguidores<br />
          207 seguindo
        </span>
      </div>
      <button className={`button-follow ${follow}`} onClick={seguir}>{follow === 'button-dark' ? 'SEGUIR' : 'SEGUINDO'}</button>
    </div>
  );
}

export default App;
