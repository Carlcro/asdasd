import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import '../../styles/NavMenu.css';

const NavMenu = () => (
  <Navbar fixedTop fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          Allocate Software{' '}
          <span role="img" aria-label="Cat">
            😺
          </span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/" exact>
          <NavItem>
            <i style={{ color: '#263e75' }} className="fas fa-home" />{' '}
            <FormattedMessage {...messages.home} />
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/daytypes">
          <NavItem>
            <i style={{ color: '#263e75' }} className="fas fa-users" />{' '}
            <FormattedMessage {...messages.dayTypes} />
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavMenu;
