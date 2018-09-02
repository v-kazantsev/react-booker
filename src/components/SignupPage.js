import React from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

const genderOptions = [
  { key: 1, text: 'Male', value: 'male' },
  { key: 2, text: 'Female', value: 'female' },
]
const countryOptions = [
  { id: 1, text: 'United States', value:'us' },
  { id: 2, text: 'Canada', value: 'ca' },
]

class SignupPage extends React.Component {
  state = {
    user: {
      location: 32145,
      firstName: '',
      lastName: '',
      homePhone: '',
      cellPhone: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      country: 1,
      gender: 0,
      password: '',
    },
  }

  onInputChange = (event) => {
    const submittedUser = this.state.user;
    submittedUser[event.target.name] = event.target.value;
    this.setState({
      user: submittedUser
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    const { firstName, lastName, homePhone, cellPhone, email, street, city, state, zip, country, gender, password } = this.state.user
    return(
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Please fill the form to sign up
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input name='firstName' value={firstName} onChange={this.onInputChange} fluid icon='user' iconPosition='left' placeholder='First name' />
                <Form.Input name='lastName' value={lastName} onChange={this.onInputChange} fluid icon='user' iconPosition='left' placeholder='Last name' />
                <Form.Group widths='equal'>
                <Form.Input name='homePhone' value={homePhone} onChange={this.onInputChange} fluid icon='phone' iconPosition='left' placeholder='Home phone' />
                <Form.Input name='cellPhone' value={cellPhone} onChange={this.onInputChange} fluid icon='mobile alternate' iconPosition='left' placeholder='Cell phone' />
                </Form.Group>
                <Form.Input name='email' value={email} onChange={this.onInputChange} fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input name='street' value={street} onChange={this.onInputChange} fluid icon='user' iconPosition='left' placeholder='Street address' />
                <Form.Input name='city' value={city} onChange={this.onInputChange} fluid icon='user' iconPosition='left' placeholder='City' />
                <Form.Group widths='equal'>
                <Form.Input name='state' value={state} onChange={this.onInputChange} fluid icon='globe' iconPosition='left' placeholder='State' />
                <Form.Select name='country' value={country} onChange={this.onInputChange} fluid options={countryOptions} placeholder='Country' />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input name='zip' value={zip} onChange={this.onInputChange} fluid  icon='globe' iconPosition='left' placeholder='ZIP' />
                <Form.Select name='gender' value={gender} onChange={this.onInputChange} fluid options={genderOptions} placeholder='Gender' />
                </Form.Group>
                <Form.Input
                  name='password'
                  value={password}
                  onChange={this.onInputChange}
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Re-enter the password'
                  type='password'
                />
                <Button color='teal' fluid size='large'>
                  Sign up
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}


export default SignupPage;