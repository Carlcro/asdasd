import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';

class LikeAndComment extends Component {
  render() {
    return (
      <div>
        <p>Like</p>
        <p>
          <Icon>star</Icon>
          Comment
        </p>
      </div>
    );
  }
}

export default LikeAndComment;
