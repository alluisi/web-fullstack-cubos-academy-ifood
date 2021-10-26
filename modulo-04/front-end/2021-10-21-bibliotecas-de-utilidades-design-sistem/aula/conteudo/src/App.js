import './App.css';
// import { useState } from 'react';
// import { useLocalStorage } from 'react-use';
import CustomButton from './components/CustomButton';
import CustomTextField from './components/CustomTextField';
// import CustomCard from './components/CustomCard';
// import CustomDialog from './components/CustomDialog';

// dialog - Tópico 12
// function App() {
//   return (
//     <div className="App">
//       <CustomDialog />
//     </div>
//   );
// }

// card - Tópico 10
// function App() {
//   return (
//     <div className="App">
//       <CustomCard />
//     </div>
//   );
// }

// button e textField - Tópicos 7, 8 e 9
function App() {
  return (
    <div className="App">
      <CustomButton />
      <CustomTextField />
    </div>
  );
}

// useLocalStorage - Tópico 3 e 4
// function App() {
//   const [valueInLocalStorage, setValueInLocalStorage, removeInLocalStorage] = useLocalStorage('storage', '');
//   const [inputValue, setInputValue] = useState('');
//   const [value, setValue, remove] = useLocalStorage('storage3', '');

//   function handleAddInLocalStorage() {
//     const obj = {
//       inputValue: inputValue,
//       value: 10
//     }

//     setValueInLocalStorage(obj);
//     localStorage.setItem('storage2', JSON.stringify(obj));
//     setValue(obj);
//   }

//   function handleRemoveLocalStorage() {
//     removeInLocalStorage();
//   }

//   return (
//     <div className="App">
//       <input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
//       <button onClick={handleAddInLocalStorage}>Adicionar</button>
//       <button onClick={handleRemoveLocalStorage}>Remover</button>
//     </div>
//   );
// }

export default App;
