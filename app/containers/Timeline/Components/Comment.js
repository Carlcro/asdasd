import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Comment = ({ item }) => (
  <Wrapper>
    <AuthorName>{item.name}</AuthorName>
    <p>{item.body}</p>
  </Wrapper>
);

Comment.propTypes = {
  item: PropTypes.object,
};

export default Comment;
