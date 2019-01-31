import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import { commentData } from '../mockData';

const Comments = ({ id }) => (
  <div>
    {commentData.filter(x => x.timelineId === id).map(item => (
      <Comment item={item} />
    ))}
  </div>
);

Comments.propTypes = {
  id: PropTypes.number,
};

export default Comments;
