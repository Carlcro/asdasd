/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import { FormattedMessage } from 'react-intl';

import React, { Component } from 'react';
import messages from './messages';

class NotFound extends Component {
  handleNavigation = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <div>
          <button type="button" onClick={this.handleNavigation}>
            <FormattedMessage {...messages.goBack} />
          </button>
        </div>
      </div>
    );
  }
}

export default NotFound;
