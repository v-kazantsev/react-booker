import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { ProfilePage, LoginPage, SignupPage, Home, Nav } from 'components';
import { CLIENT_ID, CLIENT_SECRET, SUBSCRIPTION_KEY } from './.secrets'

class App extends Component {
  state = {
    authed: false,
    user: '',
    accessToken: '',
  };

  onLogin = async () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = 'https://api-staging.booker.com/v4.1/customer/customer/login'
    const data = {
        "LocationID": 32145,
        "Email": "jdoe@ya.ca",
        "Password": "mypassword123",
        "BrandID": 0,
        "client_id": `${CLIENT_ID}`,
        "client_secret": `${CLIENT_SECRET}`,
        "grant_type": ""
    }
    try {
      const response = await fetch(`${proxyUrl}${targetUrl}`,
     { method: 'POST',
       headers: {
       "Content-Type": "application/json",
       "Ocp-Apim-Subscription-Key": `${SUBSCRIPTION_KEY}`
       },
       body: JSON.stringify(data)
    } 
    );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      const {access_token} = json;
      this.setState({
        accessToken: access_token
      })
    } catch (error) {
      console.log(error);
    }
  }

  onLogout = () => (
    this.setState({
      authed: false
    })
  );

  createCustomer = async (accessToken) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = 'https://api-staging.booker.com/v4.1/customer/customer/account'
    const data = {
      "Password": "mypassword123",
      "LocationID": 32145,
      "FirstName": "Jane",
      "LastName": "Doe",
      "HomePhone": "1234567890",
      "CellPhone": "1234567890",
      "WorkPhone": "",
      "Email": "jdoe@ya.ca",
      "GUID": "",
      "AllowReceiveEmails": true,
      "AllowReceivePromotionalEmails": true,
      "AllowReceiveSMS": true,
      "MobilePhoneCarrierID": 1,
      "GenderID": 1,
      "RequireCustomerPhone": true,
      "RequireCustomerAddress": true,
      "access_token": accessToken,
      "Address": {
        "Street1": "22 Cortlandt Street",
        "Street2": "",
        "City": "Ney York",
        "State": "NY",
        "Zip": "10007",
        "Country": {
          "ID": 1,
          "Name": ""
        }
      }
    }
    try {
      const response = await fetch(`${proxyUrl}${targetUrl}`,
     { method: 'POST',
       headers: {
       "Content-Type": "application/json",
       "Ocp-Apim-Subscription-Key": `${SUBSCRIPTION_KEY}`
       },
       body: JSON.stringify(data)
    } 
    );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log(json)
    } catch (error) {
      console.log(error);
    }
  }
  
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
            <Route path='/signup' render={(props) => <SignupPage {...props} createCustomer={this.createCustomer} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
