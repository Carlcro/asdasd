/**
 *
 * Login
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Card, Content, Button } from 'rbx';
import Joi from 'joi-browser';
import { Redirect, Link } from 'react-router-dom';

import styled from 'styled-components';
import Form from '../../components/common/Form';
import { login, getCurrentUser } from '../../services/authService';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

/* eslint-disable react/prefer-stateless-function */
export class Login extends Form {
  state = {
    data: { email: '', password: '' },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .required()
      .label('Email')
      .email(),
    password: Joi.string()
      .required()
      .label('Password'),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await login(data.email, data.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        // eslint-disable-next-line react/no-access-state-in-setstate
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (getCurrentUser()) return <Redirect to="/" />;

    return (
      <div>
        <Helmet>
          <title>Log in</title>
          <meta name="description" content="Description of Log in" />
        </Helmet>
        <Wrapper>
          <Card>
            <Card.Content>
              <Content>
                <div>
                  <h1>Log in</h1>
                  <form onSubmit={this.handleSubmit}>
                    {this.renderInput('email', 'Email')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login', 'submit')}
                    <Button as={Link} fullwidth color="white" to="/register">
                      Register
                    </Button>
                  </form>
                </div>
              </Content>
            </Card.Content>
          </Card>
        </Wrapper>
      </div>
    );
  }
}

export default Login;
