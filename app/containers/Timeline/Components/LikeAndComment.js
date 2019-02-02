import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 50px;
  border-bottom: 1px solid #dddfe2;
  border-top: 1px solid #dddfe2;
  margin: 20px 0 20px 0;
  padding: 10px;
  text-align: center;
  font-weight: 600;
`;

const Like = styled.a`
  color: #616770;
  margin: 100px;
`;

const Comment = styled.a`
  color: #616770;
  margin: 100px;
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
