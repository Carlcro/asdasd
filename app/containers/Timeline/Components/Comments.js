import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const Comments = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <Comment item={comment} />
    ))}
  </div>
);

Comments.propTypes = {
  comments: PropTypes.object,
};

export default Comments;
