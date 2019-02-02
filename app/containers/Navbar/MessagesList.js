import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import MessageItem from './MessageItem';
import mockMessagesData from './mockMessagesData';
import MessagesMenue from './MessagesMenue';

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
          <MessageItem message={message} />
        ))}
        <p>Visa tidigare...</p>
      </div>
    );
  }
}

export default MessagesList;
