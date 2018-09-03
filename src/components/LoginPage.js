import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import doLogin from 'utils/doLogin';

class LoginPage extends React.Component {

  state = {
    email: '',
    password: '',
    isLoading: false,
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState ({
      [name]: value
    })
  }

  onLogin = (event) => {
    event.preventDefault()
    this.setState({
      isLoading: true
    })
    doLogin()
    .then(data => this.setState({
      isLoading: false
      }, () => {this.props.handleAuth();
        this.props.history.push({pathname: '/profile', state: {customer: data}})
      })
    )
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.onLogin}>
              <Segment stacked>
                <Form.Input
                  name='email'
                  value={this.state.email}
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                
                />
                <Form.Input
                  name='password'
                  value={this.state.password}
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  
                />
                {this.state.isLoading
                ? (<Button color='teal' fluid size='large' loading>
                  Loading
                 </Button>)
                : (<Button color='teal' fluid size='large'>
                   Login
                  </Button>)}
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
}

export default LoginPage;