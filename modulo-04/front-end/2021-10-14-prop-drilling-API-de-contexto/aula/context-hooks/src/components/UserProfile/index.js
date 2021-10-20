import useUser from '../../hooks/useUser';
import './styles.css';

function UserProfile() {
  const { name, age } = useUser();

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