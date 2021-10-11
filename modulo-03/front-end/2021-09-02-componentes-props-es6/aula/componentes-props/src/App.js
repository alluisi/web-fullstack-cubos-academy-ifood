function Botao(props) {
  return (
    <button>
      {props.texto}
    </button>
  );
}

function Botao2(props) {
  return (
    <button>
      {props.children}
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <Botao texto='Olá' />
      <Botao texto='Mundo' />
      <Botao2>Cubos <b>Academy</b></Botao2>
    </div>
  );
}

export default App;
