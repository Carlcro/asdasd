import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';
import mockMessagesData from './mockMessagesData';
import MessagesMenue from './MessagesMenue';

class MessagesList extends Component {
  render() {
    return (
      <div style={{ width: 473 }}>
        <MessagesMenue />
        {mockMessagesData.map(message => (
          <MessageItem message={message} />
        ))}
        <a>Visa tidigare...</a>
      </div>
    );
  }
}

export default MessagesList;
