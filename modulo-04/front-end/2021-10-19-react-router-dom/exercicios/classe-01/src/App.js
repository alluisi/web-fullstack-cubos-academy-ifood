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

export default App;
