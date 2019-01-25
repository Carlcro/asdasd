import React, { Component } from 'react';
import LikeAndComment from './LikeAndComment';
import Comments from './Comments';
import Commentate from './Commentate';
import { Paper } from '@material-ui/core';

class TimelineCard extends Component {
  render() {
    return (
      <div>
        <Paper>
          <h1>Carl Cronsioe</h1>
          <div className="content">
            <p>
              Tiled say decay spoil now walls meant house. My mr interest
              thoughts screened of outweigh removing. Evening society musical
              besides inhabit ye my. Lose hill well up will he over on.
              Increasing sufficient everything men him admiration unpleasing
              sex. Around really his use uneasy longer him man. His our pulled
              nature elinor talked now for excuse result. Admitted add peculiar
              get joy doubtful.{' '}
            </p>
            <LikeAndComment />
            <Comments />
            <Commentate />
          </div>
        </Paper>
      </div>
    );
  }
}

export default TimelineCard;
