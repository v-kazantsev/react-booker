import React from 'react';
import { Grid, Segment, Image, Icon, Header, List, Container, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import getCustomerInfo from 'utils/getCustomerInfo';

class ProfilePage extends React.Component {
  state = {
    customer: {},
    isLoading: true
  }
   componentDidMount = async () => {
    const customer = await getCustomerInfo(this.props.location.state.token)
    const customerInfo = await customer.Customer
    this.setState({
      customer: customerInfo,
      isLoading: false
    })
  }
  render() {
  const { CellPhone, DateOfBirth, Email, FirstName, HomePhone, LastName } = this.state.customer
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
      {this.state.isLoading
      ? (<Dimmer active inverted>
           <Loader inverted>Loading</Loader>
         </Dimmer>)
      : (<Segment.Group>
        <Segment>
          <div>First Name: {FirstName}</div>
          <div>Last Name: {LastName}</div>
          <div>Date of Birth: {DateOfBirth}</div>
        </Segment>
        <Segment>
          <div>Street: {this.state.customer.Address.Street}</div>
          <div>City: {this.state.customer.Address.City}</div>
          <div>State: {this.state.customer.Address.State}</div>
          <div>Country: {this.state.customer.Address.Country.Name}</div>
          <div>Zip: {this.state.customer.Address.Zip}</div>
        </Segment>
        <Segment>
          <div>Home phone number: {HomePhone}</div>
          <div>Cellular phone number: {CellPhone}</div>
          <div>Email: {Email}</div>
        </Segment>
      </Segment.Group>)}
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

export default ProfilePage;