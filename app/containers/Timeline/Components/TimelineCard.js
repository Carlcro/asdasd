import React, { Component } from 'react';
import LikeAndComment from './LikeAndComment';
import Comments from './Comments';
import Commentate from './Commentate';
import { Card } from 'rbx';
import styled from 'styled-components';

const Content = styled.div`
  padding: 30px;
`;

class TimelineCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Header>Carl Cronsioe</Card.Header>
          <Content>
            <p>
              Tiled say decay spoil now walls meant house. My mr interest
              thoughts screened of outweigh removing. Evening society musical
              besides inhabit ye my. Lose hill well up will he over on.
              Increasing sufficient everything men him admiration unpleasing
              sex. Around really his use uneasy longer him man. His our pulled
              nature elinor talked now for excuse result. Admitted add peculiar
              get joy doubtful.{' '}
            </p>
          </Content>
          <LikeAndComment />
          <Comments />
          <Commentate />
        </Card>
      </div>
    );
  }
}

export default TimelineCard;
