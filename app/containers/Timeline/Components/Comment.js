import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div>
        <div className="Auther">Frida Löwenadler</div>
        <div className="content">
          <p>Någon som ska spela Anthem demon ikväll på Xbox?</p>
        </div>
      </div>
    );
  }
}

export default Comment;
