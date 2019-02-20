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
import { Card, Input, Content } from 'rbx';

import injectSaga from 'utils/injectSaga';
import styled from 'styled-components';
import saga from './saga';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.Component {
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
                <Input type="text" placeholder="e-mail" />
                <Input type="password" placeholder="password" />
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
