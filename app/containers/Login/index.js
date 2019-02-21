/**
 *
 * Login
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { Card, Content, Button } from 'rbx';

import injectSaga from 'utils/injectSaga';
import styled from 'styled-components';
import saga from './saga';
import { login, logout } from '../../services/authService';

const Wrapper = styled.div`
  display: flex;
  padding-top: 100px;
`;

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.Component {
  handleLogin = async () => {
    await login('carl@cronsioe.se', '123456');
    window.location = '/';
  };

  handleLogout = () => {
    logout();
    window.location = '/';
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>
        <Wrapper>
          <Card>
            <Card.Content>
              <Content>
                <Button onClick={this.handleLogin}>Login</Button>
                <Button style={{ marginLeft: 20 }} onClick={this.handleLogout}>
                  Logout
                </Button>
              </Content>
            </Card.Content>
          </Card>
        </Wrapper>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withSaga,
  withConnect,
)(Login);
