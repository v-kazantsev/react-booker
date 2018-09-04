import React from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { createCustomerAccount } from 'actions/customerActions';
import Input from './Input';

const mapStateToProps = state => ({
  isLoading: state.async.isLoading
})

const actions = {
  createCustomerAccount
}

class SignupPage extends React.Component {

  onSignup = values => {
    this.props.createCustomerAccount(values)
  }

  render() {
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
                <Form.Group widths='equal'>
                <Field
                  name='state'
                  type='text'
                  component={Input}
                  placeholder='State'                  
                />
                  <Field
                  name='country'
                  component={Input}
                  type='text'
                  placeholder='Country'                  
                  />
                  <Field
                  name='gender'
                  component={Input}
                  type='text'
                  placeholder='Gender'                  
                  />
                
                </Form.Group>
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
                  : (<Button color='teal' fluid size='large'>Sign up</Button>)
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
  form: 'signup'
})(SignupPage)