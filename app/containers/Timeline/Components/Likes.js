import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tooltip = styled.div`
  font-size: 14px;
  visibility: hidden;
  width: 160px;
  background-color: black;
  color: #fff;
  text-align: left;
  border-radius: 3px;
  padding: 10px;
  top: 35px;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;

  ::after {
    content: '';
    position: absolute;
    top: -16%;
    left: 1%;
    margin-left: 5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #555 transparent;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${Tooltip} {
    visibility: visible;
  }
`;

function Likes({ likes }) {
  return (
    <Wrapper>
      {likes.length > 0 && (
        <div>
          <i
            style={{ color: '#417ffc', marginRight: 5 }}
            className="far fa-thumbs-up fa-lg"
          />
          {likes.length}
        </div>
      )}
      <Tooltip>
        <ul>
          {likes.map(like => (
            <li>{like.name}</li>
          ))}
        </ul>
      </Tooltip>
    </Wrapper>
  );
}

Likes.propTypes = {
  likes: PropTypes.array,
};

export default Likes;
