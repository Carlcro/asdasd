/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import { FormattedMessage } from 'react-intl';
import { Button, Row } from 'react-bootstrap';

import messages from './messages';

import React, { Component } from 'react';

class NotFound extends Component {
  handleNavigation = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <Row>
          <Button bsStyle="info" onClick={this.handleNavigation}>
            <FormattedMessage {...messages.goBack} />
          </Button>
        </Row>
      </div>
    );
  }
}

export default NotFound;
