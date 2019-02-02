import React, { Component } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: smaller;
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
        <p style={{ fontWeight: 'bold' }}>Senaste (2)</p>
        <p>Meddelandeförfrågningar</p>
        <p>Ny grupp</p>
        <p>Nytt meddelande</p>
      </Wrapper>
    );
  }
}

export default MessagesMenue;
