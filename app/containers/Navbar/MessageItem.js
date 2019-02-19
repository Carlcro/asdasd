import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from '../../components/Avatar';

const GroupName = styled.h2`
  font-weight: bold;
`;

const StyledMessage = styled.div`
  display: flex;
  align-items: center;
  height: 68px;
  border-bottom: 1px solid #dddfe2;
  border-top: 1px solid #dddfe2;
  background-color: white;
  :hover {
    background-color: #f6f6f6;
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
class MessageItem extends Component {
  render() {
    return (
      <StyledMessage>
        <Avatar size={48} id="carl@cronsioe.se" />
        <div>
          <GroupName>{this.props.message.name}</GroupName>
          <p>
            {this.props.message.message.slice(0, 35)}
            ...
          </p>
        </div>
      </StyledMessage>
    );
  }
}

MessageItem.propTypes = {
  message: PropTypes.object,
};

export default MessageItem;
