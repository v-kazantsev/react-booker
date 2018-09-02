import React from 'react';
import { Grid, Segment, Image, Icon, Header, List, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import withToken from 'HOC/withToken';

class ProfilePage extends React.Component {
  render() {
  return(
    <Container style={{width: "88%"}}>
    <Grid columns='equal'>
      <Grid.Column width={2}>
        <Image src='https://randomuser.me/api/portraits/women/43.jpg' size='small' centered circular />
      </Grid.Column>
      <Grid.Column width={10}>
      <Segment.Group>
        <Segment>
          <Header color="teal" style={{textTransform: 'uppercase'}}>
            CUSTOMER INFORMATION
          </Header>
        </Segment>
      </Segment.Group>
      <Segment.Group>
        <Segment>
          Account Name:
        </Segment>
        <Segment>
          Address:
        </Segment>
        <Segment>
          Phone Number:
        </Segment>
      </Segment.Group>
      </Grid.Column>
      <Grid.Column width={4}>
        <Segment>
          <Header as='h3'>
          <Icon name='cog' />
          <Header.Content>
            Account Settings
            <Header.Subheader>Manage your preferences</Header.Subheader>
          </Header.Content>
          </Header>
        </Segment>
        <Segment>
          <List>
            <List.Item><Link to="#">Update your account's name</Link></List.Item>
            <List.Item><Link to="#">Update your address</Link></List.Item>
            <List.Item><Link to="#">Change your payment options</Link></List.Item>
          </List>
        </Segment>
      </Grid.Column>
    </Grid>
    </Container>
    );
  } 
}

export default withToken(ProfilePage);