import React from 'react';
import { useStore } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import ROUTES from '../../routes';
import { getAuthToken } from '../../utils';
import Appointments from '../Appointments';
import Home from '../Home';
import SideBar from '../SideBar';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import './styles.scss';

// A wrapper for <Route> that redirects to the sign in
// page if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      const token = getAuthToken();
      return token ? (children)
        : (<Redirect to={{ pathname: ROUTES.SIGN_IN, state: { from: location } }} />);
    }}
  />
);

const App = () => {
  const { token } = useStore().getState();

  return (
    <div className="app">
      <SideBar token={token} />
      <div className="main">
        <Switch>
          <Route component={Home} exact path={ROUTES.HOME} />
          <Route component={SignIn} path={ROUTES.SIGN_IN} />
          <Route component={SignUp} path={ROUTES.SIGN_UP} />
          <PrivateRoute children={<Appointments />} path={ROUTES.APPOINTMENTS} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
