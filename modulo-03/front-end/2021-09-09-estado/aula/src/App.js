import { useState } from 'react';

// CONTADOR
// function App() {
//   const [contador, setContador] = useState(0);

//   function add() {
//     setContador(contador + 1);
//   }

//   function subtract() {
//     setContador(contador - 1);
//   }

//   function clear() {
//     setContador(0);
//   }

//   return (
//     <div className="App">
//       Contagem {contador}
//       <button onClick={add}>Adicionar</button>
//       <button onClick={subtract}>Decrementar</button>
//       <button onClick={clear}>Zerar</button>
//     </div>
//   );
// }

// TEMA
// function App() {
//   const [tema, setTema] = useState('claro');

//   function trocaTema() {
//     const novoTema = tema === 'claro' ? 'escuro' : 'claro';

//     setTema(novoTema);
//   }

//   return (
//     <div className={'App ' + tema}>
//       <h1>Olá Mundo</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga magnam officia ipsam doloremque impedit praesentium maiores provident illo id excepturi sequi ea dignissimos, quaerat accusamus dolorum. Eveniet, aperiam voluptatem.
//       </p>
//       <button onClick={trocaTema}>Tema {tema === 'claro' ? '🌞' : '🌛'}</button>
//     </div>
//   );
// }

// CALLBACK
// function App() {
//   const [contador, setContador] = useState(0);

//   function contar() {
//     setContador(contadorAnterior => contadorAnterior + 1);
//     setContador(contadorAnterior => contadorAnterior + 1);
//   }

//   return (
//     <div className="App">
//       Contagem {contador}
//       <button onClick={contar}>Adicionar</button>
//     </div>
//   );
// }

// MENSAGEM
// function App() {
//   const [pessoa, setPessoa] = useState({
//     nome: 'Alessandra',
//     idade: 40,
//     mensagem: 'Olá mundo!'
//   });

//   function trocarMensagem() {
//     setPessoa({ ...pessoa, mensagem: 'Teste' });
//   }

//   return (
//     <div className='App'>
//       <h1>{pessoa.nome}</h1>
//       <h1>{pessoa.idade}</h1>
//       <h1>{pessoa.mensagem}</h1>
//       <button onClick={trocarMensagem}>Trocar mensagem</button>
//     </div>
//   );
// }

// CONTAGEM
function App() {
  const [contagem, setContagem] = useState(0);

  function comecarContagem() {
    setInterval(() => {
      setContagem(contadorAnterior => contadorAnterior + 1);
    }, 1000);
  }

  return (
    <div className="App">
      <h1>{contagem}s</h1>
      <button onClick={comecarContagem}>Começar contagem</button>
    </div>
  );
}

export default App;
