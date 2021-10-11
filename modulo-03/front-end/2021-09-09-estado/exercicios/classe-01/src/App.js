import close from './assets/close.svg';
import cookie from './assets/cookie.svg';
import { useState } from 'react';

function App() {
  const [classe, setClasse] = useState('card');

  function esconder() {
    const novaClasse = classe === 'card' ? 'hidden' : 'card';

    setClasse(novaClasse);
  }

  return (
    <div className="App">
      <div className={'card ' + classe}>
        <img src={close} alt='Close' onClick={esconder} className='close-button' />
        <img src={cookie} alt='cookie' className='icon' />
        <p>
          Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.
        </p>
        <button onClick={esconder} className='card button'>
          Tudo Bem!
        </button>
      </div>
    </div>
  );
}

export default App;

