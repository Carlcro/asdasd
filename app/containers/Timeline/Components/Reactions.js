import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div``;

const Line = styled.div`
  display: inline;
  margin-left: ${props => props.leftMargin}px;
`;

const Reactions = props => (
  <Wrapper>
    <Line leftMargin={20}>
      {props.comments > 0 && (
        <i style={{ color: '#417ffc' }} className="far fa-thumbs-up fa-lg" />
      )}{' '}
      {props.likes}
    </Line>
    {props.comments > 0 && (
      <Line leftMargin={470}>
        {props.comments} {props.comments > 1 ? ' kommentarer' : 'kommentar'}
      </Line>
    )}
  </Wrapper>
);

Reactions.propTypes = {
  comments: PropTypes.number,
  likes: PropTypes.number,
};

export default Reactions;
