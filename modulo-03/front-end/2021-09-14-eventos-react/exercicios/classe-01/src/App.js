import { useState } from 'react';

const Formulario = ({ tarefas, mudarTarefas }) => {
  const [texto, mudarTexto] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        mudarTarefas(
          tarefas.concat({
            nome: texto,
            completada: false,
            id: proximoIdDeTarefa++,
          }),
        );
        mudarTexto("");
      }}
    >
      <input
        className="input-filter"
        placeholder="Criar uma nova tarefa"
        aria-label="Criar uma nova tarefa"
        value={texto}
        onInput={(event) => {
          const input = event.target;
          mudarTexto(input.value);
        }}
      ></input>
    </form>
  );
};

const BotaoFiltro = ({ filtro, mudarFiltro, valor, children }) => (
  <button
    className={filtro === valor ? "ativo" : ""}
    onClick={() => mudarFiltro(valor)}
  >
    {children}
  </button>
);

const Tarefa = ({ tarefa, mudarTarefa, removerTarefa }) => (
  <li className={tarefa.completada ? "completada" : ""}>
    <span className="selected" onClick={() =>
      mudarTarefa({ ...tarefa, completada: !tarefa.completada })
    }>
      {tarefa.nome}
    </span>
    <button onClick={() => removerTarefa(tarefa)}><img className="selected" src="./assets/delete.svg" alt="" /></button>
  </li>
);

let proximoIdDeTarefa = 0;

function App() {
  const [tarefas, mudarTarefas] = useState([]);
  const [filtro, mudarFiltro] = useState("todos");

  const tarefasFiltradas = tarefas.filter((t) =>
    filtro === "feitas"
      ? t.completada
      : filtro === "a-fazer"
        ? !t.completada
        : true,
  );

  const tarefasNaoCompletadas = tarefas.filter((t) => !t.completada);

  const mudarTarefa = (tarefaEditada) => {
    mudarTarefas(
      tarefas.map((t) => (t.id !== tarefaEditada.id ? t : tarefaEditada)),
    );
  }

  const removerTarefa = (tarefaARemover) =>
    mudarTarefas(tarefas.filter((t) => t.id !== tarefaARemover.id));

  return (
    <div className="content">
      <p className="title">TAREFAS</p>

      <Formulario mudarTarefas={mudarTarefas} tarefas={tarefas} />

      <div className="card">

        <ul className="tarefas">
          {tarefasFiltradas.map((tarefa, i) => (
            <Tarefa
              tarefa={tarefa}
              mudarTarefa={mudarTarefa}
              removerTarefa={removerTarefa}
            />
          ))}
        </ul>

        <div className="rodape">
          <div id="contador">
            {tarefasNaoCompletadas.length}{" "}
            {tarefasNaoCompletadas.length === 1 ? "item" : "itens"}{" "}
            a fazer
          </div>

          <div className="filtros">
            <BotaoFiltro
              filtro={filtro}
              mudarFiltro={mudarFiltro}
              valor="todos"
            >
              Todas
            </BotaoFiltro>
            <BotaoFiltro
              filtro={filtro}
              mudarFiltro={mudarFiltro}
              valor="a-fazer"
            >
              A Fazer
            </BotaoFiltro>
            <BotaoFiltro
              filtro={filtro}
              mudarFiltro={mudarFiltro}
              valor="feitas"
            >
              Completadas
            </BotaoFiltro>
          </div>

          <div>
            <button
              id="botao-limpar"
              onClick={() => {
                mudarTarefas(tarefasNaoCompletadas);
              }}
            >
              Limpar completadas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// import X from './assets/delete.svg';

// function Tarefa(props) {
//   return (
//     <li>
//       <span
//         onClick={() => props.handleComplete(props.id)}
//         style={{ textDecoration: props.completa ? 'line-through' : '' }}
//       >
//         {props.children}
//       </span>
//       <button onClick={() => props.handleDelete(props.id)}><img src={X} /></button>
//     </li>
//   )
// }

// function App() {
//   const [tarefas, setTarefas] = useState([]);
//   const [contador, setContador] = useState(0);

//   function handleKeyDown(event) {
//     if (event.key !== 'Enter') return;

//     const novasTarefas = [...tarefas, { id: Math.random(), texto: event.target.value, completa: false }];

//     setTarefas(novasTarefas);

//     event.target.value = '';

//     setContador(contador + 1);
//   }

//   function handleDelete(id) {
//     const novasTarefas = tarefas.filter(function (tarefa) {
//       return tarefa.id !== id
//     });

//     setTarefas(novasTarefas);

//     setContador(contador - 1);
//   }

//   function handleComplete(id) {
//     const novasTarefas = [...tarefas];
//     const tarefaCompletada = novasTarefas.find(function (tarefa) {
//       return tarefa.id === id
//     });

//     tarefaCompletada.completa = !tarefaCompletada.completa;

//     setTarefas(novasTarefas);

//     if (tarefaCompletada.completa) {
//       setContador(contador - 1);
//     } else {
//       setContador(contador + 1);
//     }
//   }

//   return (
//     <div className="App">
//       <h1>Tarefas por fazer: {contador}</h1>
//       <input type='text' onKeyDown={handleKeyDown} />
//       <ul>
//         {tarefas.map(function (tarefa) {
//           return (
//             <Tarefa
//               key={tarefa.id}
//               id={tarefa.id}
//               handleDelete={handleDelete}
//               handleComplete={handleComplete}
//               completa={tarefa.completa}
//             >
//               {tarefa.texto}
//             </Tarefa>
//           )
//         })}
//       </ul>
//     </div>
//   );
// }

export default App;
