import React from "react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3>Home</h3>
      <Link to="/profile">Meu perfil</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;
