import { InputSenha } from './components/InputSenha'

function App() {
  return (
    <div className="App">
      <form>
        <InputSenha />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}


// INPUT DE SENHA
// function InputSenha() {
//   const [senhaVisivel, setSenhaVisivel] = useState(false);

//   return (
//     <div className="senha">
//       <label htmlFor="senha">Senha:</label>
//       <input type={senhaVisivel ? "text" : "password"} />
//       <input type="checkbox" onChange={() => setSenhaVisivel(!senhaVisivel)} />
//     </div>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <form>
//         <InputSenha />
//         <button type="submit">Enviar</button>
//       </form>
//     </div>
//   );
// }


// GERENCIANDO MULTIPLOS INPUTS
// function App() {
//   const [formulario, setFormulario] = useState({ nome: '', sobrenome: '', idade: 0 });
//   const [erro, setErro] = useState('');

//   function handleSubmit(event) {
//     event.preventDefault();

//     setErro('');

//     if (formulario.nome.length < 3) {
//       setErro('Nome deve ter mais que dois caracteres');
//     }

//     if (formulario.idade < 1) {
//       setErro('Idade deve ser maior que 0');
//     }
//   }

//   function handleChange({ target }) {
//     setFormulario({ ...formulario, [target.name]: target.value })
//   }

//   return (
//     <div className="App">
//       {
//         erro && (
//           <div className="alert">
//             {erro}
//           </div>
//         )
//       }
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="nome">Primeiro Nome: </label>
//           <input
//             id="nome"
//             name="nome"
//             type="text"
//             value={formulario.nome}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="sobrenome">Sobrenome: </label>
//           <input
//             id="sobrenome"
//             name="sobrenome"
//             type="text"
//             value={formulario.sobrenome}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="idade">Idade: </label>
//           <input
//             id="idade"
//             name="idade"
//             type="number"
//             value={formulario.idade}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Enviar</button>
//       </form>
//     </div>
//   );
// }


// EXERCÍCIO 1
// function App() {
//   const [nome, setNome] = useState('');
//   const [idade, setIdade] = useState(0);
//   const [erro, setErro] = useState('');

//   function handleSubmit(event) {
//     event.preventDefault();

//     setErro('');

//     if (nome.length < 3) {
//       setErro('Nome deve ter mais que dois caracteres');
//     }

//     if (idade < 1) {
//       setErro('Idade deve ser maior que 0');
//     }
//   }

//   return (
//     <div className="App">
//       {
//         erro && (
//           <div className="alert">
//             {erro}
//           </div>
//         )
//       }
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="nome">Nome: </label>
//           <input id="nome" type="text" value={nome} onChange={e => setNome(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="idade">Idade: </label>
//           <input id="idade" type="number" value={idade} onChange={e => setIdade(e.target.value)} />
//         </div>
//         <button type="submit">Enviar</button>
//       </form>
//     </div>
//   );
// }


// FORMULÁRIOS NO REACT
// function App() {
//   const [nome, setNome] = useState('');

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(nome);
//   }

//   function handleChange(event) {
//     setNome(event.target.value);
//   }

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <input type="text" onChange={handleChange} value={nome} />
//         <button type="submit">Enviar</button>
//       </form>
//     </div>
//   );
// }

export default App;
