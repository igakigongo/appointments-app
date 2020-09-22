import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import SideBar from '../SideBar';
import './styles.scss';

const App = () => (
  <div className="app">
    <SideBar />
    <div className="main">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  </div>
);

export default App;
