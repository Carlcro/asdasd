import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image } from 'rbx';

const Avatar = styled.div`
  float: left;
  margin: 10px 10px 10px 10px;
`;

const GroupName = styled.h2`
  font-weight: bold;
`;

const StyledMessage = styled.div`
  display: flex;
  align-items: center;
  height: 68px;
  border-bottom: 1px solid #dddfe2;
  border-top: 1px solid #dddfe2;
  background-color: white;
  :hover {
    background-color: #f6f6f6;
  }
`;

const Content = styled.div``;

class MessageItem extends Component {
  render() {
    return (
      <StyledMessage>
        <Avatar style={{ maxHeight: 200 }}>
          <Image.Container size={48}>
            <Image rounded src={this.props.message.avatar} />
          </Image.Container>
        </Avatar>
        <Content>
          <GroupName>{this.props.message.name}</GroupName>
          <p>
            {this.props.message.message.slice(0, 35)}
            ...
          </p>
        </Content>
      </StyledMessage>
    );
  }
}

MessageItem.propTypes = {};

export default MessageItem;
