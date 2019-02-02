import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from '../../../components/Avatar';

const Wrapper = styled.div`
  border-radius: 25px;
  background: #f2f3f5;
  padding: 20px;
  width: 300px;
  height: 80px;
  padding: 12px;
  margin: 0px 0px 10px 75px;
`;

const AuthorName = styled.a`
  height: 50px;
  font-weight: bold;
`;

const Comment = ({ item }) => (
  <div>
    <Avatar size={48} avatar={item.avatar} />
    <Wrapper>
      <AuthorName>{item.name}</AuthorName>
      <p>{item.body}</p>
    </Wrapper>
  </div>
);

Comment.propTypes = {
  item: PropTypes.object,
};

export default Comment;
