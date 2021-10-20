import React from "react";

import { Link, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Profile() {
  const auth = useAuth();
  const history = useHistory();

  return (
    <div>
      Bem vindo
      <Link to="/">Início</Link>
      <button onClick={() => auth.deslogar(() => history.push('/'))}>
        Sair
      </button>
    </div>
  );
}

export default Profile;
