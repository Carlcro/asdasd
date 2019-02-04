import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from '../../../components/Avatar';
import UsernameLink from '../../../components/UsernameLink/index';

const Wrapper = styled.div`
  display: flex;
  border-radius: 25px;
  background: #f2f3f5;
  padding: 20px;
  padding: 12px;
  margin: 0px 40px 10px 0px;
  flex-wrap: wrap;
`;

const Comment = ({ item }) => (
  <div>
    <Avatar size={32} avatar={item.avatar} />
    <Wrapper>
      <UsernameLink name={item.name} id={item.id} />
      <p>{item.body}</p>
    </Wrapper>
  </div>
);

Comment.propTypes = {
  item: PropTypes.object,
};

export default Comment;
