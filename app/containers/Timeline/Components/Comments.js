import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const Comments = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <Comment key={comment.id} item={comment} />
    ))}
  </div>
);

Comments.propTypes = {
  comments: PropTypes.array,
};

export default Comments;
