import './App.css';
import Main from './pages/Main';
import Header from './components/Header';
import { useState } from 'react';
import UserContext from './contexts/UserContexts';

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const valuesProvider = { age, setAge, name, setName };

  return (
    <UserContext.Provider value={valuesProvider}>
      <Header />
      <Main />
    </UserContext.Provider>
  );
}

export default App;
