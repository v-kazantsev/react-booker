import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Image, Container } from 'semantic-ui-react';

const Nav = ({authed, onLogout}) => {
  return (
    <Menu inverted style={{padding: "0", borderRadius: "0", margin: "0"}}>
      <Container style={{width: "90%", display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
        <Menu.Item>
          {!authed
          ? <div>
            <Button as={Link} to="/login" basic inverted content="Login" />
            <Button as={Link} to="/signup" basic inverted content="Sign up" />
            </div>
          : <div>
            <Image src='https://randomuser.me/api/portraits/women/43.jpg' avatar />
              <span style={{marginRight: 16}}>jdoe@ya.ca</span>
            <Button onClick={onLogout} as={Link} to="/logout" basic inverted content="Logout" />
            </div>
          }
        </Menu.Item>
      </Container>
    </Menu>
  )
};

export default Nav;