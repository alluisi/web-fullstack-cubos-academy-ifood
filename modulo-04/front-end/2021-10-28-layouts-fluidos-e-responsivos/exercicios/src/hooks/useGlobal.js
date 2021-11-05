import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function useGlobal() {
  return useContext(GlobalContext);
}

export default useGlobal;