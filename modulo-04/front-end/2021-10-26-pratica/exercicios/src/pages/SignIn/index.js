import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginBackground from '../../assets/sign-in-background.jpg';
import useRequests from '../../hooks/useRequests';
import useGlobal from '../../hooks/useGlobal';
import './styles.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { token, setToken } = useGlobal();
  const history = useHistory();
  const requests = useRequests();

  useEffect(() => {
    if (token) {
      history.push('/home');
    }
    // eslint-disable-next-line
  }, [])

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      return;
    }

    const body = { email: email, senha: password };

    const result = await requests.post('login', body);

    if (result) {
      setToken(result.token);
      history.push('/home');
    }
  }

  return (
    <main>
      <div
        style={{
          backgroundImage: `url(${LoginBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
      </div>
      <div className="container-right">
        <form onSubmit={handleSubmit}>
          <span>Bem vindo</span>
          <h1>Faça o login com sua conta</h1>

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-positive btn-login">LOGIN</button>
        </form>

        <div className="register-link">
          <span>Não tem cadastro?</span><Link to="/sign-up">Clique aqui!</Link>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
