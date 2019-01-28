import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 25px;
  background: #f2f3f5;
  padding: 20px;
  width: 300px;
  height: 100px;
  padding: 12px;
  margin: 10px;
`;

const AuthorName = styled.a`
  height: 50px;
  font-weight: bold;
`;

class Comment extends Component {
  render() {
    return (
      <Wrapper>
        <AuthorName>Frida Löwenadler</AuthorName>
        <p>Någon som ska spela Anthem demon ikväll på Xbox?</p>
      </Wrapper>
    );
  }
}

export default Comment;
