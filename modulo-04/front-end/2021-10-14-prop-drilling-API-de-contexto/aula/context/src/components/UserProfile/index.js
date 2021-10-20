import { useContext } from 'react';
import UserContext from '../../contexts/UserContexts';
import './styles.css';

function UserProfile() {
  const { name, age } = useContext(UserContext);

  return (
    <div className="container-profile">
      <div>
        <strong>Nome:</strong>
        <span>{name}</span>
      </div>
      <div>
        <strong>Idade:</strong>
        <span>{age}</span>
      </div>
    </div>
  );
}

export default UserProfile;