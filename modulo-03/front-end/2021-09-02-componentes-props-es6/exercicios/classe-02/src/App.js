import kelvin from './assets/kelvin-costa.png';
import charles from './assets/charles-santos.png';
import anna from './assets/anna-bia.png';
import mario from './assets/mario-hisashi.png';

function UserCard({ picture, name, username, followers, following }) {
  return (
    <div className='card'>
      <img src={picture} alt={name} />
      <h2>{name}</h2>
      <span className='username'>
        {username}
      </span>
      <span className='stats'>
        {followers} seguidores<br />
        {following} seguindo
      </span>
    </div>
  )
}

function App() {
  const users = [
    {
      id: 1,
      picture: kelvin,
      name: 'Kelvin Costa',
      username: '@costa',
      followers: 140,
      following: 207
    },
    {
      id: 2,
      picture: charles,
      name: 'Charles Santos',
      username: '@charles.santos',
      followers: 302,
      following: 419
    },
    {
      id: 3,
      picture: anna,
      name: 'Anna Bia',
      username: '@anab',
      followers: 842,
      following: 150
    },
    {
      id: 4,
      picture: mario,
      name: 'Mario Hisashi',
      username: '@hisashi',
      followers: 28,
      following: 17
    }
  ];
  return (
    <div className="App">
      {users.map(function (user) {
        return <UserCard key={user.id} {...user} />
      })}
    </div>
  );
}

export default App;
