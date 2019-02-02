import React from 'react';
import { Control, Input } from 'rbx';
import styled from 'styled-components';
import Avatar from '../../../components/Avatar';

const Wrapper = styled.div`
  height: 150px;
`;

const InputField = styled.div`
  float: left;
  padding: 20px 5px;
  width: 500px;
`;

const Commentate = () => (
  <div>
    <Wrapper>
      <Avatar
        size={48}
        avatar="https://api.adorable.io/avatars/186/Carl2.png"
      />
      <InputField>
        <Control>
          <Input
            style={{
              backgroundColor: '#f2f3f5',
              borderRadius: 25,
            }}
            placeholder="kommentera..."
            type="text"
            size="medium"
          />
        </Control>
      </InputField>
    </Wrapper>
  </div>
);

export default Commentate;
