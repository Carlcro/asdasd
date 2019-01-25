import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';

class Commentate extends Component {
  render() {
    return (
      <div>
        <div className="AuthorImage">
          <Avatar
            alt="Adelle Charles"
            src="C:\Users\carl.cronsioe\Documents\TimePoolWithRedux\app\images\Bild2.jpg"
          />
        </div>
        <div className="CommentInput">
          <input />
        </div>
      </div>
    );
  }
}

export default Commentate;
