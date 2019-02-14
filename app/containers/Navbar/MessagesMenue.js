import React, { Component } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: smaller;
  padding: 0 0 4px 10px;
  & > p {
    display: inline-block;
    margin: 0 20px 0 10px;
  }
  & > a {
    display: inline-block;
    margin: 0 20px 0 0px;
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
class MessagesMenue extends Component {
  render() {
    return (
      <Wrapper>
        <a href="/#" style={{ fontWeight: 'bold', color: 'black' }}>
          Senaste (2)
        </a>
        <a href="/#" style={{ color: 'grey' }}>
          Meddelandeförfrågningar
        </a>
        <a href="/#">Ny grupp</a>
        <a href="/#">Nytt meddelande</a>
      </Wrapper>
    );
  }
}

export default MessagesMenue;
