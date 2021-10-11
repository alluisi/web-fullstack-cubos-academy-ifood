import { Aside } from "./components/Aside";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";

function App() {
  return (
    <div className="App flex-row font-roboto" >
      <Aside />
      <Main />
      <Modal />
    </div>
  );
}

export default App;
