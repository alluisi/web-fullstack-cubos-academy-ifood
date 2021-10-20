import { useContext } from 'react';
import UserContext from '../../contexts/UserContexts';
import './styles.css';

function Header() {
  const { name } = useContext(UserContext);

  return (
    <header>
      Bem vindo, {name}!
    </header>
  );
}

export default Header;