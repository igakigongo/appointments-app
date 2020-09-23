import React from 'react';
import { useStore } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getAuthToken } from '../../utils';
import Appointments from '../Appointments';
import Home from '../Home';
import SideBar from '../SideBar';
import './styles.scss';

// A wrapper for <Route> that redirects to the sign in 
// page if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => <Route
  {...rest}
  render={({ location }) => {
    const token = getAuthToken();
    return token ? (children)
      : (<Redirect to={{ pathname: "/signIn", state: { from: location } }} />)
  }}
/>;

const App = () => {
  const { token } = useStore().getState();
  console.log(token);

  return <div className="app">
    <SideBar />
    <div className="main">
      <Switch>
        <Route component={Home} exact path='/' />
        <PrivateRoute children={Appointments} path="/appointments" />
      </Switch>
    </div>
  </div>;
};

export default App;
