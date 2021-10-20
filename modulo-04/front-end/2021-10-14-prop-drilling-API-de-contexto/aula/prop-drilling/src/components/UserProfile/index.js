import './styles.css';

function UserProfile({ name, age }) {
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