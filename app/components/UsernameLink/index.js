/**
 *
 * UsernameLink
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
// import styled from 'styled-components';

const UsernameLink = props => (
  <Link
    style={{ fontWeight: 'bold', marginRight: 5 }}
    to={`/profile/${props.id}`}
  >
    {props.name}
  </Link>
);

UsernameLink.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default UsernameLink;
