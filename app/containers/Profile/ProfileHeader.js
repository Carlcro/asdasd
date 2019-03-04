/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import img from '../../images/BackgroundImage.png';

const StyledName = styled(Link)`
  display: flex;
  flex: 1;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  :hover {
    color: #fff;
  }
`;

const Wrapper = styled.div`
  display: flex;
  background-image: url(${img});
  align-content: flex-end;
  width: 852px;
  height: 500px;
  border-bottom-color: rgba(0, 0, 0, 0.4);
`;

const ProfileHeader = props => (
  <Wrapper>
    <Avatar size={128} id={props.id} />
    <StyledName to={`/profile/${props.id}`}>{props.name}</StyledName>
  </Wrapper>
);

export default ProfileHeader;
