import React from 'react';
import { Card } from 'rbx';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LikeAndComment from './LikeAndComment';
import Comments from './Comments';
import Commentate from './Commentate';

const Content = styled.div`
  padding: 30px;
`;

const TimelineCard = ({ item }) => (
  <div style={{ padding: 20 }}>
    <Card>
      <Card.Header style={{ padding: 20 }} as="a">
        {item.name}
      </Card.Header>
      <Content>
        <p>{item.body}</p>
      </Content>
      <LikeAndComment />
      <Comments id={item.id} />
      <Commentate />
    </Card>
  </div>
);

TimelineCard.propTypes = {
  item: PropTypes.object,
};

export default TimelineCard;
