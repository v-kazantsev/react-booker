import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { ContentPage, LoginPage, SignupPage, Home } from 'components';

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
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/content' render={(props) => <ContentPage {...props} authed={this.state.authed} />} />
          <Route path='/login' render={(props) => <LoginPage {...props} onLogin={this.onLogin} />} />
          <Route path='/signup' component={SignupPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
