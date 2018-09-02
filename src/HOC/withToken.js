import React from 'react';
import { SUBSCRIPTION_KEY, CLIENT_SECRET, CLIENT_ID } from '.secrets'

const withToken = (WrappedComponent) => {

  class HOC extends React.Component {
    state = {
      token: ''
    }
    componentDidMount = () => {
      this.getToken()
    }

    getToken = () => {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
      const targetUrl = 'https://api-staging.booker.com/v5/auth/connect/token'
      fetch(`${proxyUrl}${targetUrl}`,
       { method: 'POST',
         headers: {
         "Content-Type": "application/x-www-form-urlencoded",
         "Ocp-Apim-Subscription-Key": `${SUBSCRIPTION_KEY}`
         },
         body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&scope=customer`
      } 
      )
      .then (response => response.json())
      .then (json => {
        const {access_token} = json
        this.setState({
          token: access_token
        })
      })
      .catch (error => console.log(error))
    }
    render() {
      return(
        <WrappedComponent {...this.props} token={this.state.token} />
      )
    }
  }
  return HOC
}

export default withToken