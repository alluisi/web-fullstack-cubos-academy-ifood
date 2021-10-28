import {
  BrowserRouter as Router, Redirect, Route,
  Switch
} from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import { ContactsProvider } from './context/ContactsContext';
import useGlobal from './hooks/useGlobal';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function ProtectedRoutes(props) {
  const { token } = useGlobal();

  return (
    <Route
      render={() => (token ? props.children : <Redirect to="/" />)}
    />
  );
}

function Routes() {
  return (
    <Router>
      <Switch>
        <GlobalProvider>
          <Route path={['/', '/sign-in']} exact component={SignIn} />
          <Route path='/sign-up' exact component={SignUp} />
          <ProtectedRoutes>
            <ContactsProvider>
              <Route path='/home' exact component={Home} />
            </ContactsProvider>
          </ProtectedRoutes>
        </GlobalProvider>
      </Switch>
    </Router>
  );
}

export default Routes;