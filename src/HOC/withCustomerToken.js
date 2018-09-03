import React from 'react';
import getCustomerToken from 'utils/getCustomerToken'

const withCustomerToken = (WrappedComponent) => {

  class HOC extends React.Component {
    state = {
      customerToken: ''
    }
    componentDidMount = () => {
      getCustomerToken()
      .then(data => this.setState({
        customerToken: data
      }))
      .catch(error => console.log(error))
    }

    render() {
      return(
        <WrappedComponent {...this.props} token={this.state.customerToken} />
      )
    }
  }
  return HOC
}

export default withCustomerToken