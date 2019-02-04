import React from 'react';
import { Input } from 'rbx';
import styled from 'styled-components';
import Avatar from '../../../components/Avatar';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StyledInput = styled(Input)`
  display: flex;
  background-color: #f2f3f5;
  border: 1px solid #ccd0d5;
  border-radius: 16px;
  flex-grow: 1;
  height: 36px;
  margin-right: 10px;
  font-size: 13px;
  padding-left: 10px;
`;

const Commentate = () => (
  <div>
    <Wrapper>
      <Avatar
        size={32}
        avatar="https://api.adorable.io/avatars/186/Carl2.png"
      />
      <StyledInput placeholder="kommentera..." type="text" />
    </Wrapper>
  </div>
);

export default Commentate;
