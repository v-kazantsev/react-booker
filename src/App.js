import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { ProfilePage, LoginPage, SignupPage, Home, Nav } from 'components';

class App extends Component {
  state = {
    authed: false,
    user: ''
  };
  onLogin = () => (
    this.setState({
      authed: true
    })
  );
  onLogout = () => (
    this.setState({
      authed: false
    })
  );
  
  render() {
    return (
      <Router>
        <div className="content">
          <header style={{marginBottom: "32px"}}>
            <Nav authed={this.state.authed} onLogout={this.onLogout} />
          </header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/login' render={(props) => <LoginPage {...props} onLogin={this.onLogin} />} />
            <Route path='/signup' component={SignupPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
