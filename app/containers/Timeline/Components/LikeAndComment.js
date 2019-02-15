import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #dddfe2;
  border-top: 1px solid #dddfe2;
  height: 42px;
  align-items: center;
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 13px;
`;

const Like = styled.a`
  color: #616770;
`;

const Comment = styled.a`
  color: #616770;
`;

// eslint-disable-next-line react/prefer-stateless-function
class LikeAndComment extends Component {
  liked = liked => {
    if (liked)
      return (
        <i
          style={{ marginRight: 5, color: '#3784ff' }}
          className="fas fa-thumbs-up fa-lg"
        />
      );
    return <i style={{ marginRight: 5 }} className="far fa-thumbs-up fa-lg" />;
  };

  render() {
    return (
      <Wrapper>
        <Like onClick={() => this.props.handleLike(this.props.id)}>
          {this.liked(this.props.liked)}
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
  liked: PropTypes.bool,
};

export default LikeAndComment;
