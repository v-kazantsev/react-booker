import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';

const Nav = (props) => {
  return (
    <Menu inverted>
      <Container>
        <Menu.Item position="right">
          {!props.authed
          ? <div>
            <Button as={Link} to="/login" basic inverted content="Login" style={{margin: '4px'}} />
            <Button as={Link} to="/signup" basic inverted content="Sign up" style={{margin: '4px'}} />
            </div>
          : <Button as={Link} to="/" basic inverted content="Logout" style={{margin: '4px'}} />
          }
        </Menu.Item>
      </Container>
    </Menu>
  )
};

export default Nav;