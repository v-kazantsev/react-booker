import React from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { composeValidators, combineValidators, isRequired, isNumeric, createValidator } from 'revalidate';
import { createCustomerAccount } from 'actions/customerActions';
import Input from './Input';
import SelectInput from './SelectInput';

const mapStateToProps = state => ({
  isLoading: state.async.isLoading
})

const actions = {
  createCustomerAccount
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
  firstName: isRequired({message: 'First name can not be blank'}),
  lastName: isRequired({message: 'Last name can not be blank'}),
  homePhone: composeValidators(
    isRequired({message: 'Home phone number is required'}),
    isNumeric({message: 'Home phone must contain numbers'}))(),
  cellPhone: composeValidators(
    isRequired({message: 'Cellular phone number is required'}),
    isNumeric({message: 'Cellular phone must contain numbers'}))(),
  email: composeValidators(
    isRequired({message: 'Email is required'}),
    isValidEmail)(),
  street: isRequired({message: 'Street can not be blank'}),
  city: isRequired({message: 'City can not be blank'}),
  state: isRequired({message: 'State can not be blank'}),
  country: isRequired({message: 'Country is required'}),
  gender: isRequired({message: 'Gender is required'}),
  zip: composeValidators(
    isRequired({message: 'Valid ZIP code is required'}),
    isNumeric({message: 'ZIP code must contain numbers'}))(),
  password: composeValidators(
    isRequired({message: 'Password is required'}),
    isValidPassword())(),
  passwordConfirm: isRequired({message: 'Please re-type the password'}),
})

const countryOptions = [
  {key: '1', text: 'United States', value: 1},
  {key: '2', text: 'Canada', value: 2}
]

const genderOptions = [
  {key: '1', text: 'Male', value: 1},
  {key: '2', text: 'Female', value: 2}
]

class SignupPage extends React.Component {

  onSignup = values => {
    this.props.createCustomerAccount(values)
  }

  render() {
    const { invalid, pristine, submitting } = this.props;
    return(
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Please fill the form to sign up
            </Header>
            <Form size='large' onSubmit={this.props.handleSubmit(this.onSignup)}>
              <Segment stacked>
                <Field
                  name='firstName'
                  type='text'
                  component={Input}
                  placeholder='First name'
                />
                <Field
                  name='lastName'
                  type='text'
                  component={Input}
                  placeholder='Last name'        
                />
                <Form.Group widths='equal'>
                <Field
                  name='homePhone'
                  type='text'
                  component={Input}
                  placeholder='Home phone'                  
                />
                <Field
                  name='cellPhone'
                  type='text'
                  component={Input}
                  placeholder='Cell phone'                 
                />
                </Form.Group>
                <Field
                  name='email'
                  type='email'
                  component={Input}
                  placeholder='E-mail address'                  
                />
                <Field
                  name='street'
                  type='text'
                  component={Input}
                  placeholder='Street address'                  
                />
                <Field
                  name='city'
                  type='text'
                  component={Input}
                  placeholder='City'                  
                />
                 <Field
                  name='state'
                  type='text'
                  component={Input}
                  placeholder='State'                  
                />                            
                  <Field
                  name='country'
                  component={SelectInput}
                  options={countryOptions}
                  type='text'
                  placeholder='Country'                  
                  />
                  <Field
                  name='gender'
                  component={SelectInput}
                  options={genderOptions}
                  type='text'
                  placeholder='Gender'                  
                  />
                <Form.Group widths='equal'>
                <Field
                  name='zip'
                  type='text'
                  component={Input}
                  placeholder='ZIP'                  
                />
                </Form.Group>
                <Field
                  name='password'
                  type='password'
                  component={Input}
                  placeholder='Password'
                />
                <Field
                  name='passwordConfirm'
                  component={Input}
                  placeholder='Re-enter the password'
                  type='password'                  
                />
                {
                  this.props.isLoading
                  ? (<Button loading color='teal' fluid size='large'>Loading</Button> )
                  : (<Button disabled={invalid || pristine|| submitting} color='teal' fluid size='large'>Sign up</Button>)
                }
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

SignupPage = connect(mapStateToProps, actions)(SignupPage)

export default reduxForm({
  form: 'signup',
  validate
})(SignupPage)