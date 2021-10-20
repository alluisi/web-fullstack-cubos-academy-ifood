import useUser from '../../hooks/useUser';
import './styles.css';

function Header() {
  const { name } = useUser();

  return (
    <header>
      Bem vindo, {name}!
    </header>
  );
}

export default Header;