import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #dddfe2;
  border-top: 1px solid #dddfe2;
  height: 65px;
  align-items: center;
  font-weight: 600;
`;

const Like = styled.a`
  color: #616770;
`;

const Comment = styled.a`
  color: #616770;
`;

// eslint-disable-next-line react/prefer-stateless-function
class LikeAndComment extends Component {
  render() {
    return (
      <Wrapper>
        <Like>
          <i className="far fa-thumbs-up fa-lg" />
          {'  '}
          Gilla
        </Like>
        <Comment>
          <i className="far fa-comment-alt fa-lg" />
          {'  '} Kommentera
        </Comment>
      </Wrapper>
    );
  }
}

export default LikeAndComment;
