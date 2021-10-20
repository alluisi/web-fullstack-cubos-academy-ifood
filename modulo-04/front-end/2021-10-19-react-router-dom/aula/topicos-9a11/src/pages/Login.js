import React from "react";
import { useHistory } from "react-router-dom";

import useAuth from "../hooks/useAuth";

function Login() {
  const auth = useAuth();
  const history = useHistory();

  return (
    <button onClick={() => auth.logar(() => history.push("/profile"))}>
      Entrar
    </button>
  );
}

export default Login;
