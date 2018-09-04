import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Menu, Button, Image, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { customerLogout } from 'actions/customerActions';

const mapStateToProps = state => ({
  isAuthed: state.customer.isAuthed,
  customerInfo: state.customer.customerInfo.customer
})

const actions = {
  customerLogout
}



const Nav = ({isAuthed, customerLogout, customerInfo}) => {
  const handleClick = () => {
    customerLogout(customerInfo.access_token)
    return <Redirect to='./logout' />
  }
  
  return (
    <Menu inverted style={{padding: "0", borderRadius: "0", margin: "0"}}>
      <Container style={{width: "90%", display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
        <Menu.Item>
          {!isAuthed
          ? <div>
            <Button as={Link} to="/login" basic inverted content="Login" />
            <Button as={Link} to="/signup" basic inverted content="Sign up" />
            </div>
          : <div>
            <Image src='https://randomuser.me/api/portraits/women/43.jpg' avatar />
              <span style={{marginRight: 16}}>{customerInfo.Customer.Customer['Email']}</span>
            <Button onClick={handleClick}  basic inverted content="Logout" />
            </div>
          }
        </Menu.Item>
      </Container>
    </Menu>
  )
};

export default connect(mapStateToProps, actions)(Nav);