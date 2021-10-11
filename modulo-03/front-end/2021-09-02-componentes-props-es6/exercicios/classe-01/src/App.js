import close from './assets/close.svg';
import cookie from './assets/cookie.svg';
import alert from './assets/alert.svg';

function AlertCard({ type, message, children }) {
  return (
    <div className='card'>
      <img src={close} alt='Close' className='close-button' />
      <img src={type === 'cookie' ? cookie : alert} alt={type === 'cookie' ? 'Cookie' : 'Alert'} className='icon' />
      <p>
        {children}
      </p>
      <button className={type}>
        {message}
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <AlertCard type='cookie' message='Tudo Bem!'>
        Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.
      </AlertCard>
      <AlertCard type='alert' message='Extender login'>
        Você será deslogado<br />imediatamente!
      </AlertCard>
    </div>
  );
}

export default App;
