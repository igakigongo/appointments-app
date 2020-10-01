import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ROUTES from '../../routes';
import { getAuthToken } from '../../utils';
import Appointments from '../Appointments';
import Home from '../Home';
import SideBar from '../SideBar';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import './styles.scss';

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
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

const App = () => (
  <div className="app">
    <SideBar />
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

export default App;
