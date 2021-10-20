import EditProfile from '../../components/EditProfile';
import UserProfile from '../../components/UserProfile';
import './styles.css';

function Main() {

  return (
    <main>
      <div className="items-main left">
        <EditProfile />
      </div>
      <div className="items-main">
        <UserProfile />
      </div>
    </main>
  );
}

export default Main;