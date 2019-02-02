/**
 *
 * Avatar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image } from 'rbx';
import { PropTypes } from 'prop-types';

const StyledAvatar = styled.div`
  float: left;
  margin: 10px 10px 10px 10px;
`;

const Avatar = props => (
  <StyledAvatar>
    <Image.Container size={props.size}>
      <Image
        style={{
          maxHeight: 4000,
        }}
        rounded
        src={props.avatar}
      />
    </Image.Container>
  </StyledAvatar>
);

Avatar.propTypes = {
  size: PropTypes.number,
  avatar: PropTypes.string,
};

export default Avatar;
