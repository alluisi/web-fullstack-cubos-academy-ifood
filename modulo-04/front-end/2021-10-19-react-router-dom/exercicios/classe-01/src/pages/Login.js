import React from "react";
import { Link, useHistory } from "react-router-dom";

import useAuth from "../hooks/useAuth";

function Login() {
  const auth = useAuth();
  const history = useHistory();

  return (
    <div>
      <Link to="/profile">Meu perfil</Link>
      <button onClick={() => auth.logar(() => history.push("/profile"))}>
        Logar
      </button>
    </div>
  );
}

export default Login;
