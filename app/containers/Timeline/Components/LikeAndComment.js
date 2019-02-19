/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #dddfe2;
  border-top: 1px solid #dddfe2;
  align-items: stretch;

  height: 42px;
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 13px;
  padding: 4px;
`;

const Like = styled.a`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #616770;
  :hover {
    background-color: rgb(246, 246, 247);
  }
`;

const Comment = styled.a`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #616770;
  :hover {
    background-color: rgb(246, 246, 247);
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
class LikeAndComment extends Component {
  renderLike = likes => {
    if (this.isLiked(likes))
      return (
        <i
          style={{ marginRight: 5, color: '#3784ff' }}
          className="fas fa-thumbs-up fa-lg"
        />
      );
    return <i style={{ marginRight: 5 }} className="far fa-thumbs-up fa-lg" />;
  };

  isLiked(likes) {
    const found = likes.some(el => el._id === '5c6b0c1224afb2f7ec3b94a9');
    return found;
  }

  render() {
    return (
      <Wrapper>
        <Like
          onClick={() =>
            this.props.handleLike(
              this.props.id,
              !this.isLiked(this.props.likes),
            )
          }
        >
          {this.renderLike(this.props.likes)}
          Gilla
        </Like>
        <Comment>
          <i style={{ marginRight: 5 }} className="far fa-comment-alt fa-lg" />
          Kommentera
        </Comment>
      </Wrapper>
    );
  }
}

LikeAndComment.propTypes = {
  handleLike: PropTypes.func,
  id: PropTypes.number,
  likes: PropTypes.array,
};

export default LikeAndComment;
