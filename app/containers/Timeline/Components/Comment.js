/* eslint-disable no-underscore-dangle */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from '../../../components/Avatar';
import UsernameLink from '../../../components/UsernameLink/index';

const SubWrapper = styled.div`
  display: flex;
  border-radius: 25px;
  background: #f2f3f5;
  padding: 20px;
  padding: 12px;
  margin: 0px 40px 10px 0px;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Comment = ({ item }) => (
  <Wrapper>
    <Avatar size={32} id={item.userId._id} />
    <SubWrapper>
      <UsernameLink name={item.userId.name} id={item._id} />
      <span>{item.content}</span>
    </SubWrapper>
  </Wrapper>
);

Comment.propTypes = {
  item: PropTypes.object,
};

export default Comment;
