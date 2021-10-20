import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <h2>Contas</h2>
        <ul>
          <li>
            <Link to='/netflix'>Netflix</Link>
          </li>
          <li>
            <Link to='/amazon-prime'>Amazon Prime</Link>
          </li>
          <li>
            <Link to='/disney-plus'>Disney Plus</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/:conta'>
            <Conta />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Conta() {
  const { conta } = useParams();

  return (
    <div>
      <h3>Conta: {conta}</h3>
    </div>
  )
}

// CÓDIGO INICIAL
// export default function App() {
//   return (
//     <Router>
//       <div>
//         <h2>Contas</h2>
//         <ul>
//           <li>
//             <Link to='/netflix'>Netflix</Link>
//           </li>
//           <li>
//             <Link to='/amazon-prime'>Amazon Prime</Link>
//           </li>
//           <li>
//             <Link to='/disney-plus'>Disney Plus</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route>
//             <Conta />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }
// function Conta() {
//   return (
//     <div>
//       <h3>Conta: </h3>
//     </div>
//   )
// }