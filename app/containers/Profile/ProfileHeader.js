import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import img from '../../images/BackgroundImage.png';

const StyledName = styled(Link)`
  top: 80px;
  position: absolute;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  max-width: 275px;
  color: #fff;
  :hover {
    color: #fff;
  }
`;

const HeaderImage = styled.div`
  position: relative;
  background-image: url(${img});
  width: 852px;
  height: 315px;
  border-bottom-color: rgba(0, 0, 0, 0.4);
`;

const Wrapper = styled.div`
  position: relative;
  height: 360px;
`;

const SubWrapper = styled.div`
  position: absolute;
  top: 200px;
`;

const ProfileHeader = () => (
  <Wrapper>
    <HeaderImage>
      <SubWrapper>
        <Avatar
          size={128}
          avatar="https://api.adorable.io/avatars/186/Johan.png"
        />
        <StyledName to={`/profile/${1}`}>Hej</StyledName>
      </SubWrapper>
    </HeaderImage>
  </Wrapper>
);

export default ProfileHeader;
