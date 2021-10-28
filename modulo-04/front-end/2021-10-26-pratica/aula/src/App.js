import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [token, setToken] = useState('');

  async function handleCreateContact() {
    const body = {
      nome: "Pedrinho",
      telefone: "99999999999",
      email: "pedrinho@cubos.academy"
    }

    const response = await fetch('https://cubos-api-contacts.herokuapp.com/contatos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    console.log(data);
  }

  async function handleLogin() {

    const body = {
      email: "daniel.lopes@cubos.academy",
      senha: "123456"
    }

    const response = await fetch('https://cubos-api-contacts.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    console.log(data)
    setToken(data.token);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => handleCreateContact()}
        >
          Adicionar Usuário
        </button>
        <button
          onClick={() => handleLogin()}
        >
          Fazer Login
        </button>
      </header>
    </div>
  );
}

export default App;
