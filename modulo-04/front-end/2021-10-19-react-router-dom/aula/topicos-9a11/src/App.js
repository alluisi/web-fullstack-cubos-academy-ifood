import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./styles.css";

import AuthProvaider from "./contexts/AuthContext/AuthProvider";
import useAuth from './hooks/useAuth';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function RotasProtegidas(props) {
  const auth = useAuth();

  return (
    <Route
      render={() => auth.token ?
        (props.children) :
        (<Redirect to='/login' />)}
    />
  )
}

function App() {
  return (
    <AuthProvaider>
      <div className="App">
        <Router>
          <div className='main'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/login' component={Login} />
              <RotasProtegidas>
                <Route path='/profile' component={Profile} />
              </RotasProtegidas>
            </Switch>
          </div>
        </Router>
      </div>
    </AuthProvaider>
  );
}

// useHistory
// function RotasProtegidas(props) {
//   const auth = useAuth();

//   return (
//     <Route
//       render={() => auth.token ?
//         (props.children) :
//         (<Redirect to='/login' />)}
//     />
//   )
// }
// function App() {
//   return (
//     <AuthProvaider>
//       <div className="App">
//         <Router>
//           <div className='main'>
//             <Switch>
//               <Route path='/' exact component={Home} />
//               <Route path='/login' component={Login} />
//               <RotasProtegidas>
//                 <Route path='/profile' component={Profile} />
//               </RotasProtegidas>
//             </Switch>
//           </div>
//         </Router>
//       </div>
//     </AuthProvaider>
//   );
// }

// ROTAS - FINALIZAÇÃO
// function RotasProtegidas(props) {
//   return (
//     <Route
//       render={() => props.estaLogado ?
//         (props.children) :
//         (<Redirect to='/login' />)}
//     />
//   )
// }
// function App() {
//   const estaLogado = true;
//   return (
//     <div className="App">
//       <Router>
//         <div className='main'>
//           <Switch>
//             <Route path='/' exact component={Home} />
//             <Route path='/login' component={Login} />
//             <RotasProtegidas estaLogado={estaLogado}>
//               <Route path='/profile' component={Profile} />
//             </RotasProtegidas>
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// }

// ROTAS - 2ª TENTATIVA
// function App() {
//   const estaLogado = false;
//   return (
//     <div className="App">
//       <Router>
//         <div className='main'>
//           <Switch>
//             <Route path='/' exact component={Home} />
//             {!estaLogado && <Route path='/login' component={Login} />}
//             {!estaLogado && <Redirect path='/profile' to='/login' />}
//             {estaLogado && <Route path='/profile' component={Profile} />}
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// }

// ROTAS - 1ª TENTATIVA
// function App() {
//   const estaLogado = true;
//   return (
//     <div className="App">
//       <Router>
//         <div className='main'>
//           <Switch>
//             <Route path='/' exact component={Home} />
//             {!estaLogado && <Route path='/login' component={Login} />}
//             {estaLogado && <Route path='/profile' component={Profile} />}
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// }

// ROTAS - CÓDIGO INICIAL
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <div className='main'>
//           <Switch>
//             <Route path='/' exact component={Home} />
//             <Route path='/login' component={Login} />
//             <Route path='/profile' component={Profile} />
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// }

export default App;
