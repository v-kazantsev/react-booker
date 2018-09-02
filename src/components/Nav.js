import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Image, Container } from 'semantic-ui-react';

const Nav = ({authed, onLogout}) => {
  return (
    <Menu inverted style={{padding: "0", borderRadius: "0", margin: "0"}}>
      <Container style={{width: "90%", display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
        <Menu.Item>
          {!authed
          ? <span>
            <Button as={Link} to="/login" basic inverted content="Login" />
            <Button as={Link} to="/signup" basic inverted content="Sign up" />
            </span>
          : <span>
            <Image src='https://randomuser.me/api/portraits/women/43.jpg' avatar />
            <span style={{marginRight: "16px"}}>Logged in as</span>
            <Button as={Link} onClick={onLogout} to="/" basic inverted content="Logout" />
            </span>
          }
        </Menu.Item>
      </Container>
    </Menu>
  )
};

export default Nav;