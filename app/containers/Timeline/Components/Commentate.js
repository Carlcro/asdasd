import React, { Component } from 'react';
import { Control, Input, Image } from 'rbx';
import logo from '../../../images/Bild2.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 150px;
`;

const Avatar = styled.div`
  float: left;
  padding: 20px;
`;

const InputField = styled.div`
  float: left;
  padding: 40px 5px;
  width: 500px;
`;

class Commentate extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Avatar>
            <Image.Container size={64}>
              <Image rounded src={logo} />
            </Image.Container>
          </Avatar>
          <InputField>
            <Control>
              <Input type="text" size="medium" />
            </Control>
          </InputField>
        </Wrapper>
      </div>
    );
  }
}

export default Commentate;
