import { createContext } from "react";
import useLojaProvider from "../hook/useLojaProvider";

const LojaContext = createContext({ nomeLoja: '', atualizar: () => {}});

export function LojaProvider(props) {
  const auth = useLojaProvider();

  return (
    <LojaContext.Provider value={auth}>{props.children}</LojaContext.Provider>
  );
}

export default LojaContext;