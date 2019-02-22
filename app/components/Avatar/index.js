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
        src={`https://api.adorable.io/avatars/186/${props.id}.png`}
      />
    </Image.Container>
  </StyledAvatar>
);

Avatar.propTypes = {
  size: PropTypes.number,
  id: PropTypes.string,
};

export default Avatar;
