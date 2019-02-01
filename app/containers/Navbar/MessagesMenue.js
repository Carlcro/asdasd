import React, { Component } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: small;
  & > p {
    display: inline-block;
    margin: 0 20px 0 10px;
  }
  & > a {
    display: inline-block;
    margin: 0 20px 0 0px;
  }
`;

class MessagesMenue extends Component {
  render() {
    return (
      <Wrapper>
        <p style={{ fontWeight: 'bold' }}>Senaste (2)</p>
        <p>Meddelandeförfrågningar</p>
        <a>Ny grupp</a>
        <a>Nytt meddelande</a>
      </Wrapper>
    );
  }
}

export default MessagesMenue;
