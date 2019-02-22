/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Card } from 'rbx';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { distanceInWords } from 'date-fns';
import LikeAndComment from './LikeAndComment';
import Comments from './Comments';
import Commentate from './Commentate';
import Avatar from '../../../components/Avatar';
import Reactions from './Reactions';
import UsernameLink from '../../../components/UsernameLink/index';

const Content = styled.div`
  padding: 20px;
  font-size: 14px;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 500px;

  @media only screen and (max-width: 540px) {
    /* For mobile phones: */
    width: 100%;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
`;

const TimeStamp = styled.p`
  font-size: 12px;
  font-weight: normal;
  color: #616770;
`;

const TimelineCard = ({ item, handleNewComment, handleLike }) => (
  <Wrapper>
    <Card>
      <Card.Header style={{ padding: 5 }}>
        <StyledHeader>
          <Avatar size={48} id={item.author._id} />
          <div>
            <UsernameLink name={item.author.name} id={item.author._id} />
            <TimeStamp>
              {distanceInWords(new Date(item.timeStamp), new Date())} ·{' '}
              <i className="fas fa-user" />
            </TimeStamp>
          </div>
        </StyledHeader>
      </Card.Header>
      <Content>
        <p>{item.body}</p>
      </Content>
      <Reactions likes={item.likes} comments={item.comments.length} />
      <LikeAndComment
        id={item._id}
        handleLike={handleLike}
        likes={item.likes}
      />
      <Comments comments={item.comments} />
      <Commentate id={item._id} onSubmit={handleNewComment} />
    </Card>
  </Wrapper>
);

TimelineCard.propTypes = {
  item: PropTypes.object,
  handleNewComment: PropTypes.func,
  handleLike: PropTypes.func,
};

export default TimelineCard;
