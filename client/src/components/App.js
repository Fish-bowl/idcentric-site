import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import Bio from './Bio'
import Music from './Music'
import Particle from './Particle'
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';

const styles = {
  global: {
    backgroundColor: 'black',
  }
}

class App extends Component {
  render() {
    return (
      <div style={styles.global}>
        <NavBar />
        <Flash />
        <Particle />
        <FetchUser>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Music" component={Music} />
            <Route exact path="/Bio" component={Bio} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
