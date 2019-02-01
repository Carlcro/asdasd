import React from 'react';
import { Control, Input, Image } from 'rbx';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 150px;
`;

const Avatar = styled.div`
  float: left;
  padding: 20px 10px 20px 20px;
`;

const InputField = styled.div`
  float: left;
  padding: 20px 5px;
  width: 500px;
`;

const Commentate = () => (
  <div>
    <Wrapper>
      <Avatar>
        <Image.Container size={48}>
          <Image rounded src="https://api.adorable.io/avatars/186/Carl2.png" />
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

export default Commentate;
