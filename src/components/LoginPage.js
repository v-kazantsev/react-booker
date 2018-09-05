import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { getCustomerToken } from 'actions/customerActions';
import { composeValidators, combineValidators, isRequired, createValidator } from 'revalidate';
import Input from './Input';

const mapStateToProps = state => ({
  isLoading: state.async.isLoading,
  customer: state.customer.customerInfo.customer,
  error: state.async.error,
})
const actions = {
  getCustomerToken
}

const isValidEmail = createValidator(
  message => value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message
    }
  },
  'Invalid email address'
)

const isValidPassword = createValidator(
  message => value => {
    if (value && !/(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{6,}/g.test(value)) {
      return message
    }
  },
  'Password must contain at least 1 number. Password length must be greater than 6.'
)

const validate = combineValidators({
  email: composeValidators(
    isRequired({message: 'Email can not be blank'}),
    isValidEmail)(),
  password: composeValidators(
    isRequired({message: 'Password can not be blank'}),
    isValidPassword)()
})

class LoginPage extends React.Component {

  componentWillReceiveProps = () => {
    
    if (this.props.customer) {this.props.history.push('./profile')}
  }

  onLogin = values => {
    this.props.getCustomerToken(values.email, values.password)
  }
  
  render() {
    const {invalid, pristine, submitting, error} = this.props;
    return (
      
      <div className='login-form'>
      {error && <Message warning><Message.Header>Request failed with the following error:</Message.Header><p>{error}</p></Message>}
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.props.handleSubmit(this.onLogin)}>
              <Segment stacked>
                <Field
                  name='email'
                  component={Input}
                  type='email'
                  placeholder='E-mail address'
                />
                <Field
                  name='password'
                  component={Input}
                  placeholder='Password'
                  type='password'
                />
                {
                  this.props.isLoading
                  ? (<Button color='teal' fluid size='large' loading>Loading</Button>)
                  : (<Button disabled={invalid || pristine || submitting} color='teal' fluid size='large'>Login</Button>)
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
  form: 'login',
  validate
})(LoginPage)