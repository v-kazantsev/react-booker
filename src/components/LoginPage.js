import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { getCustomerToken } from 'actions/customerActions';

const mapStateToProps = state => ({
  isLoading: state.async.isLoading,
  customer: Boolean(state.customer.customer.access_token)
})
const actions = {
  getCustomerToken
}

class LoginPage extends React.Component {

  componentWillReceiveProps = () => {
    if (this.props.customer) {this.props.history.push('./profile')}
  }

  onLogin = values => {
    this.props.getCustomerToken(values.email, values.password)
  }
  
  render() {
    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.props.handleSubmit(this.onLogin)}>
              <Segment stacked>
                <Field
                  name='email'
                  component='input'
                  type='email'
                  placeholder='E-mail address'
                />
                <Field
                  name='password'
                  component='input'
                  placeholder='Password'
                  type='password'
                />
                {
                  this.props.isLoading
                  ? (<Button color='teal' fluid size='large' loading>Loading</Button>)
                  : (<Button color='teal' fluid size='large'>Login</Button>)
                }
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
};

LoginPage = connect(mapStateToProps, actions)(LoginPage)

export default reduxForm({
  form: 'login'
})(LoginPage)