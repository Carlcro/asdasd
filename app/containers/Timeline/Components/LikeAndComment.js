import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 50px;
`;

const Like = styled.a`
  float: left;
  color: lightblue;
  padding: 10px;
`;

const Comment = styled.a`
  float: left;
  color: lightblue;
  padding: 10px;
`;

class LikeAndComment extends Component {
  render() {
    return (
      <Wrapper>
        <Like>Like</Like>
        <Comment>Comment</Comment>
      </Wrapper>
    );
  }
}

export default LikeAndComment;
