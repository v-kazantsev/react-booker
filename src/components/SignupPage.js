import React from 'react';
import { Nav } from 'components';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

const SignupPage = (props) => (
  <div className='login-form'>
    <Nav />
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
           Sign up
        </Header>
        <Form size='large' onSubmit={() => props.history.push("/content")}>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
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


export default SignupPage;