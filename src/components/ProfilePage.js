import React from 'react';
import { Grid, Segment, Image, Icon, Header, List, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  customer: state.customer.customerInfo.customer
})

class ProfilePage extends React.Component {

  render() {
  const {Customer} = this.props.customer
  const {Address, FirstName, LastName, DateOfBirth, HomePhone, CellPhone, Email, Gender} = Customer.Customer
  return(
    <Container style={{width: "88%"}}>
    <Grid columns='equal'>
      <Grid.Column width={2}>
      {Gender.ID === 1
        ? <Image src='https://randomuser.me/api/portraits/men/43.jpg' size='small' centered circular />
        : <Image src='https://randomuser.me/api/portraits/women/43.jpg' size='small' centered circular />}
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
          <div>First Name: {FirstName}</div>
          <div>Last Name: {LastName}</div>
          <div>Date of Birth: {DateOfBirth}</div>
        </Segment>
        <Segment>
          <div>Street: {Address.Street1}</div>
          <div>City: {Address.City}</div>
          <div>State: {Address.State}</div>
          <div>Country: {Address.Country.Name}</div>
          <div>Zip: {Address.Zip}</div>
        </Segment>
        <Segment>
          <div>Home phone number: {HomePhone}</div>
          <div>Cellular phone number: {CellPhone}</div>
          <div>Email: {Email}</div>
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
            <List.Item><Link to="#">Update your e-mail</Link></List.Item>
            <List.Item><Link to="#">Update your phone number</Link></List.Item>
            <List.Item><Link to="#">Change your payment options</Link></List.Item>
          </List>
        </Segment>
      </Grid.Column>
    </Grid>
    </Container>
    );
  } 
}

export default connect(mapStateToProps)(ProfilePage);