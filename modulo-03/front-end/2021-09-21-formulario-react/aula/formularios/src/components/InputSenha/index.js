import { useState } from "react";
import './style.css';

export function InputSenha() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (
    <div className="senha">
      <label htmlFor="senha">Senha:</label>
      <input type={senhaVisivel ? "text" : "password"} />
      <input type="checkbox" onChange={() => setSenhaVisivel(!senhaVisivel)} />
    </div>
  )
}