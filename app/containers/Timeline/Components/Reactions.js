import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Likes from './Likes';

const Wrapper = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  padding: 0 50px 0 50px;
`;

const Reactions = ({ likes, comments }) => (
  <Wrapper>
    <Likes likes={likes} />
    {comments} {comments > 1 ? ' kommentarer' : 'kommentar'}
  </Wrapper>
);

Reactions.propTypes = {
  comments: PropTypes.number,
  likes: PropTypes.array,
};

export default Reactions;
