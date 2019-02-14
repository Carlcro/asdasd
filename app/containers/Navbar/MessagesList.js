import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import MessageItem from './MessageItem';
import mockMessagesData from './mockMessagesData';
import MessagesMenue from './MessagesMenue';

const MoreMessages = styled.a`
  display: flex;
  justify-content: center;
  margin: 5px 5px;
`;

// eslint-disable-next-line react/prefer-stateless-function
class MessagesList extends Component {
  render() {
    return (
      <div
        style={{
          width: 473,
        }}
      >
        <MessagesMenue />
        {mockMessagesData.map(message => (
          <MessageItem key={message.id} message={message} />
        ))}
        <MoreMessages href="/messages">Visa tidigare...</MoreMessages>
      </div>
    );
  }
}

export default MessagesList;
