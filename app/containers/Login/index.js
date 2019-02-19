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

import injectSaga from 'utils/injectSaga';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>
        <div>
          <h3>email</h3>
          <input type="text" />
          <h3>password</h3>
          <input type="text" />
        </div>
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
