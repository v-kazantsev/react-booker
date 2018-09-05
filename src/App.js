import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { ProfilePage, LoginPage, SignupPage, Home, Nav, LogoutPage, ErrorBoundary } from 'components';

class App extends Component {

  render() {
    return (
      <Router>
        
        <div className="content">
          <header style={{marginBottom: "32px"}}>
            <Nav  />
          </header>
          <Switch>
          
            <Route exact path='/' component={Home} />
            
            <Route path='/profile' render={() => (<ErrorBoundary><ProfilePage /></ErrorBoundary>)} />
            
            <Route path='/logout' component={LogoutPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignupPage} />  
                     />
          </Switch>
        </div>
        
      </Router>
    );
  }
}

export default App;
