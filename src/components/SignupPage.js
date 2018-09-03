import React from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import withToken from 'HOC/withToken'

const genderOptions = [
  { key: '1', text: 'Male', value: 1 },
  { key: '2', text: 'Female', value: 2 },
]
const countryOptions = [
  { key: '1', text: 'United States', value: 1 },
  { key: '2', text: 'Canada', value: 2 },
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
      country: '',
      gender: '',
      password: '',
      passwordConfirm: '',
    }
  }

  onInputChange = (event) => {
    const {name, value} = event.target
    this.setState({
      user: { [name]: value }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      return;
    }
    //this.props.createCustomer(this.props.token)
    const data = new FormData(event.target.elements);
    console.log(data)
  }
  render() {
    const { firstName, lastName, homePhone, cellPhone, email, street, city, state, zip, password, passwordConfirm } = this.state.user
    return(
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Please fill the form to sign up
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  name='firstName'
                  value={firstName}
                  onChange={this.onInputChange}
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='First name'
                  required
                />
                <Form.Input
                  name='lastName'
                  value={lastName}
                  onChange={this.onInputChange}
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Last name'
                  required
                />
                <Form.Group widths='equal'>
                <Form.Input
                  name='homePhone'
                  value={homePhone}
                  onChange={this.onInputChange}
                  fluid icon='phone'
                  iconPosition='left'
                  placeholder='Home phone'
                  required
                />
                <Form.Input
                  name='cellPhone'
                  value={cellPhone}
                  onChange={this.onInputChange}
                  fluid
                  icon='mobile alternate'
                  iconPosition='left'
                  placeholder='Cell phone'
                  required
                />
                </Form.Group>
                <Form.Input
                  name='email'
                  value={email}
                  onChange={this.onInputChange}
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  required
                />
                <Form.Input
                  name='street'
                  value={street}
                  onChange={this.onInputChange}
                  fluid icon='user'
                  iconPosition='left'
                  placeholder='Street address'
                  required
                />
                <Form.Input
                  name='city'
                  value={city}
                  onChange={this.onInputChange}
                  fluid icon='user'
                  iconPosition='left'
                  placeholder='City'
                  required
                />
                <Form.Group widths='equal'>
                <Form.Input
                  name='state'
                  value={state}
                  onChange={this.onInputChange}
                  fluid icon='globe'
                  iconPosition='left'
                  placeholder='State'
                  required
                />
                <Form.Select
                  name='country'
                  fluid
                  options={countryOptions}
                  placeholder='Country'
                  required
                />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input
                  name='zip'
                  value={zip}
                  onChange={this.onInputChange}
                  fluid
                  icon='globe'
                  iconPosition='left'
                  placeholder='ZIP'
                  required
                />
                <Form.Select
                  name='gender'
                  fluid
                  options={genderOptions}
                  placeholder='Gender'
                  required
                />
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
                  reqired
                />
                <Form.Input
                  name='passwordConfirm'
                  value={passwordConfirm}
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Re-enter the password'
                  type='password'
                  required
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


export default withToken(SignupPage);