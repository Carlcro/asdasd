import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../../images/Bild2.jpg';

const Avatar = styled.img`
  border-radius: 50%;
`;

class MessageItem extends Component {
  render() {
    return (
      <div>
        <Avatar src={logo} alt="Avatar" />
        <h3>Parkliv</h3>
        <p>Hej där vad händer?</p>
      </div>
    );
  }
}

MessageItem.propTypes = {};

export default MessageItem;
