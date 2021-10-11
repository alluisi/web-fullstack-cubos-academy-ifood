import './App.css';
import jenny from './assets/jenny.png';
import usuario from './assets/icone-usuario.svg';
import design1 from './assets/design1.png';
import design2 from './assets/design2.png';
import design3 from './assets/design3.png';
import design4 from './assets/design4.png';
import design5 from './assets/design5.png';
import design6 from './assets/design6.png';

function App() {
  return (
    <div className="App">
      <div className="seguir">
        <div className="perfil1">
          <div className="info">
            <img className="img-perfil1" src={jenny} />
            <div className="nome">
              <h1>Jenny Molla</h1>
              <p>UX Designer</p>
            </div>
          </div>
          <button>
            <img className="img-btn1" src={usuario} />
            Seguir
          </button>
        </div>
        <div className="galeria1">
          <img src={design1} />
          <img src={design2} />
          <img src={design3} />
        </div>
      </div>
      <div className="seguindo">
        <div className="perfil2">
          <div className="usuario">
            <img src={jenny} />
            <div className="ux">
              <h1>Usuário</h1>
              <p>UX Designer</p>
            </div>
          </div>
          <button>
            <img className="img-btn2" src={usuario} />
            Seguindo
          </button>
        </div>
        <div className="galeria2">
          <img src={design4} />
          <img src={design5} />
          <img src={design6} />
        </div>
      </div>
    </div>
  );
}

export default App;
