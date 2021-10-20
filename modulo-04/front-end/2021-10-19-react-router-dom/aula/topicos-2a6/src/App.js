import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Counter from './components/Counter';

// ROTA RAIZ 2ª POSSIBILIDADE
function App() {
  return (
    <div className="App">
      <Counter />
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/sobre'>Sobre</Link>
        </nav>
        <Switch>
          <Route path='/sobre' component={Sobre} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

// ROTA RAIZ 1ª POSSIBILIDADE
// function App() {
//   return (
//     <div className="App">
//       <Counter />
//       <Router>
//         <nav>
//           <Link to='/'>Home</Link>
//           <Link to='/sobre'>Sobre</Link>
//         </nav>
//         <Route path='/' exact component={Home} />
//         <Route path='/sobre' component={Sobre} />
//       </Router>
//     </div>
//   );
// }

// REACT-ROUTER-DOM
// function App() {
//   return (
//     <div className="App">
//       <Counter />
//       <Router>
//         <nav>
//           <Link to='/home'>Home</Link>
//           <Link to='/sobre'>Sobre</Link>
//         </nav>
//         <Route path='/home' component={Home} />
//         <Route path='/sobre' component={Sobre} />
//       </Router>
//     </div>
//   );
// }

// SEM BIBLIOTECAS
// function App() {
//   const rotaAtual = window.location.pathname;
//   return (
//     <div className="App">
//       <Counter />
//       <nav>
//         <a href='/home'>Home</a>
//         <a href='/sobre'>Sobre</a>
//       </nav>
//       {(rotaAtual === '/home' || rotaAtual === '/') && <Home />}
//       {rotaAtual === '/sobre' && <Sobre />}
//     </div>
//   );
// }

export default App;
