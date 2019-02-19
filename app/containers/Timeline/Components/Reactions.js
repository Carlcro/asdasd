import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  padding: 0 50px 0 50px;
`;

const Reactions = props => (
  <Wrapper>
    <div>
      {props.likes.length > 0 && (
        <div>
          <i
            style={{ color: '#417ffc', marginRight: 5 }}
            className="far fa-thumbs-up fa-lg"
          />
          {props.likes.length}
        </div>
      )}
    </div>
    {props.comments} {props.comments > 1 ? ' kommentarer' : 'kommentar'}
  </Wrapper>
);

Reactions.propTypes = {
  comments: PropTypes.number,
  likes: PropTypes.array,
};

export default Reactions;
