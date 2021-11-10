import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import React from 'react'
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

import { AuthProvider } from './context/AuthContext';
import { LojaProvider } from './context/LojaContext';
import useAuth from "./hook/useAuth";
import Produtos from "./pages/Produtos";
import Main from "./components/Main";
import Perfil from "./pages/Perfil";
import EdicaoPerfil from "./pages/EdicaoPerfil";
import NovoProduto from "./pages/NovoProduto";
import EdicaoProduto from "./pages/EdicaoProduto";

function RotasProtegidas(props) {
  const { token } = useAuth();

  return (
    <Route
      render={() => (token ? props.children : <Redirect to="/" />)}
    />
  );
}

function Routes() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/cadastro" component={Cadastro} />
          <RotasProtegidas>
            <LojaProvider>
              <Main>
                <Route path="/produtos/novo" exact component={NovoProduto} />
                <Route path="/produtos/:id/editar" exact component={EdicaoProduto} />
                <Route path="/produtos" exact component={Produtos} />
                <Route path="/perfil/editar" exact component={EdicaoPerfil} />
                <Route path="/perfil" exact component={Perfil} />
              </Main>
            </LojaProvider>  
          </RotasProtegidas>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default Routes;
