/**
 *
 * ProfileLink
 *
 */

import PropTypes from 'prop-types';
// import styled from 'styled-components';

import React, { Component } from 'react';

export default class ProfileLink extends Component {
  handleNavigation = () => {
    this.props.history.push('/');
  };

  render() {
    return <h2>{this.props.profile.name}</h2>;
  }
}

ProfileLink.propTypes = {
  profile: PropTypes.object,
  history: PropTypes.object,
};
