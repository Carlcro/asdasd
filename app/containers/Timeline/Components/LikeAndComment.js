/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
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
// Create the keyframes
const rotate = keyframes`
  0%   {left:0px; top:0px;}
  50%  {left:200px; top:200px;}
  75%  {left:0px; top:200px;}
  100% {left:0px; top:0px;}
`;

// Here we create a component that will rotate everything we pass in over two seconds
const LikeAnimate = styled.i`
  display: inline-block;
  animation: ${rotate} 2s linear;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

// eslint-disable-next-line react/prefer-stateless-function
class LikeAndComment extends Component {
  renderLike = likes => {
    if (this.isLiked(likes))
      return (
        <LikeAnimate
          style={{ marginRight: 5, color: '#3784ff' }}
          className="fas fa-thumbs-up fa-lg"
        />
      );
    return <i style={{ marginRight: 5 }} className="far fa-thumbs-up fa-lg" />;
  };

  isLiked(likes) {
    if (!this.props.user) return false;
    const found = likes.some(el => el._id === this.props.user._id);
    return found;
  }

  handleLike = () => {
    this.props.handleLike(this.props.id, !this.isLiked(this.props.likes));
  };

  render() {
    return (
      <Wrapper>
        <Like onClick={this.handleLike}>
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
  user: PropTypes.object,
};

export default LikeAndComment;
