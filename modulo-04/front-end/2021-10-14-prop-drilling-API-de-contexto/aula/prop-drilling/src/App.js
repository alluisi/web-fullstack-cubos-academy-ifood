import './App.css';
import Main from './pages/Main';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <>
      <Header
        name={name}
      />

      <Main
        setName={setName}
        setAge={setAge}
        age={age}
        name={name}
      />
    </>
  );
}

export default App;
