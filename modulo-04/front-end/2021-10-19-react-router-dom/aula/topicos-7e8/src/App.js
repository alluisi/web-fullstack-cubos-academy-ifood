import React from "react";

import {
  BrowserRouter as Router,
  Route,
  // Link,
  NavLink,
  Switch
} from "react-router-dom";

import "./styles.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// ESTILIZAÇÃO E USABILIDADE
function App() {
  return (
    <div className="App">
      <Router>
        <div className="sidenav">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="main">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

// EXERCÍCIO - COMPLETO
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <div className="sidenav">
//           <Link to="/about">About</Link>
//           <Link to="/services">Services</Link>
//           <Link to="/contact">Contact</Link>
//         </div>

//         <div className="main">
//           <Switch>
//             <Route path="/about" component={About} />
//             <Route path="/services" component={Services} />
//             <Route path="/contact" component={Contact} />
//             <Route path="/" component={Home} />
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// }

// EXECÍCIO - INCOMPLETO
// function App() {
//   return (
//     <div className="App">
//       <div className="sidenav">
//         <a href="/about">About</a>
//         <a href="/services">Services</a>
//         <a href="/contact">Contact</a>
//       </div>

//       <div className="main">
//         <Home />
//         <About />
//         <Services />
//         <Contact />
//       </div>
//     </div>
//   );
// }

export default App;
