import { useEffect, useState } from 'react';

function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false`)
      .then(resposta => resposta.json())
      .then(data => setFilmes(data.results))
  }, [])

  return (
    <div className="App">
      {filmes.map(filme => (
        <div className="filme" key={filme.title}>
          <img src={filme.poster_path} alt={filme.title} />
          <h1>{filme.title}</h1>
          <p>{filme.overview}</p>
        </div>
      ))}
    </div>
  );
}


// ARRAY DE DEPENDÊNCIAS VAZIO
// function App() {
//   const [repos, setRepos] = useState([]);

//   useEffect(() => {
//     fetch(`https://api.trending-github.com/github/repositories`)
//       .then(resposta => resposta.json())
//       .then(data => setRepos(data))
//   }, [])

//   return (
//     <div className="App">
//       {repos.map(repo => (
//         <div className="repo" key={repo.name}>
//           <h1>{repo.name}</h1>
//           <p>{repo.description}</p>
//           <a href={repo.url}>{repo.url}</a>
//         </div>
//       ))}
//     </div>
//   );
// }


// EXERCÍCIO 1 - CEP
// function App() {
//   const [cep, setCep] = useState('');
//   const [endereco, setEndereco] = useState();

//   useEffect(() => {
//     if (cep.length === 8) {
//       fetch(`https://viacep.com.br/ws/${cep}/json`)
//         .then(resposta => resposta.json())
//         .then(dados => setEndereco(dados));
//     }
//   }, [cep])

//   return (
//     <div className="App">
//       <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
//       {endereco && (
//         <>
//           <h1>{endereco.logradouro}, {endereco.bairro}</h1>
//           <h2>{endereco.localidade} - {endereco.uf}</h2>
//         </>
//       )}
//     </div>
//   );
// }


// EFEITOS
// function App() {
//   const [pessoas, setPessoas] = useState([
//     { nome: 'Ana' },
//     { nome: 'José' },
//     { nome: 'Mário' },
//     { nome: 'Bianca' }
//   ]);
//   const [indice, setIndice] = useState(0);

//   useEffect(() => {
//     if (indice < 0) {
//       setIndice(pessoas.length - 1);
//     }

//     if (indice > pessoas.length - 1) {
//       setIndice(0);
//     }
//   }, [indice, pessoas]);

//   return (
//     <div className="App">
//       <button onClick={() => setIndice(indice - 1)}>Anterior</button>
//       <h1>
//         {pessoas.map((pessoa, indiceAtual) => indiceAtual === indice ? pessoa.nome : '')}
//       </h1>
//       <button onClick={() => setIndice(indice + 1)}>Posterior</button>
//     </div>
//   );
// }

export default App;
