import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../../images/Bild2.jpg';

const Avatar = styled.img`
  float: left;
  vertical-align: middle;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 20px 0 20px;
`;

const GroupName = styled.h2`
  font-weight: bold;
`;

const StyledMessage = styled.div`
  border-bottom: 1px solid #dddfe2;
  border-top: 1px solid #dddfe2;
  background-color: white;
  :hover {
    background-color: #f6f6f6;
  }
`;

class MessageItem extends Component {
  render() {
    return (
      <StyledMessage>
        <Avatar src={this.props.message.avatar} alt="Avatar" />
        <GroupName>{this.props.message.name}</GroupName>
        <p>
          {this.props.message.message.slice(0, 25)}
          ...
        </p>
      </StyledMessage>
    );
  }
}

MessageItem.propTypes = {};

export default MessageItem;
