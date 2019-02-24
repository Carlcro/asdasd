/* eslint-disable react/no-access-state-in-setstate */
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
import { getCurrentUser, loginWithJwt } from '../../services/authService';
import { register } from '../../services/userService';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

/* eslint-disable react/prefer-stateless-function */
export class RegisterForm extends Form {
  state = {
    data: { email: '', password: '' },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label('Username'),
    password: Joi.string()
      .required()
      .min(5)
      .label('Password'),
    name: Joi.string()
      .required()
      .label('Name'),
  };

  doSubmit = async () => {
    try {
      const response = await register(this.state.data);
      loginWithJwt(response.headers['x-auth-token']);
      window.location = '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (getCurrentUser()) return <Redirect to="/" />;

    return (
      <div>
        <Helmet>
          <title>Register</title>
          <meta name="description" content="Description of Register" />
        </Helmet>
        <Wrapper>
          <Card>
            <Card.Content>
              <Content>
                <div>
                  <h1>Register</h1>
                  <form onSubmit={this.handleSubmit}>
                    {this.renderInput('email', 'Email')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderInput('name', 'Name')}
                    {this.renderButton('Register', 'submit')}
                    <Button as={Link} fullwidth color="white" to="/login">
                      Back to Login
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

export default RegisterForm;
