import { useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current = countRef.current + 1;

    console.log(`Eu cliquei ${countRef.current} vezes`)
  }

  const handleClick2 = () => {
    setCount(count + 1);
  }

  console.log("renderizei");
  console.log(countRef);

  return (
    <div className="App">
      <button onClick={handleClick}>Clique aqui</button>
      <button onClick={handleClick2}>Clique aqui 2</button>
    </div>
  );
}


// REFERÊNCIAS DE ELEMENTOS
// function App() {
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");
//   const [erros, setErros] = useState({ email: false, senha: false });
//   const senhaRef = useRef();

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (senha.length < 8) {
//       setErros({ ...erros, senha: true });
//       senhaRef.current.focus();
//       return;
//     }

//     console.log({ email, senha })
//   }

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email <br />
//           <input
//             className={`${erros.email ? 'erro' : ''}`}
//             type="text"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//         </label>
//         <label>
//           Senha <br />
//           <input
//             ref={senhaRef}
//             className={`${erros.senha ? 'erro' : ''}`}
//             type="password"
//             value={senha}
//             onChange={e => setSenha(e.target.value)}
//           />
//         </label>
//         <button type="submit">Enviar</button>
//       </form>
//     </div>
//   );
// }

export default App;
