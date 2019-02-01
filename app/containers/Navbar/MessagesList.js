import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';

class MessagesList extends Component {
  render() {
    return (
      <div>
        <MessageItem />
      </div>
    );
  }
}

MessagesList.propTypes = {};

export default MessagesList;
