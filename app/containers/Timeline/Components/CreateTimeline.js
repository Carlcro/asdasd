/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Input } from 'rbx';
import styled from 'styled-components';
import Avatar from '../../../components/Avatar';
import { getCurrentUser } from '../../../services/authService';

const Wrapper = styled.div`
  padding: 10px;
`;

const StyledInput = styled(Input)`
  outline: none;
`;

const SubWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Content = styled.div`
  padding: 0px;
  font-size: 14px;
`;

class CreateTimeline extends Component {
  state = { value: '' };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  keyPress = e => {
    if (e.keyCode === 13) {
      this.props.handleNewTimeline(this.state.value);
      this.setState({ value: '' });
    }
  };

  render() {
    const user = getCurrentUser();

    return (
      <Wrapper>
        {user && (
          <Card style={{ borderRadius: 3 }}>
            <Card.Header style={{ backgroundColor: '#f5f6f7' }}>
              <Card.Header.Title>Skapa inlägg</Card.Header.Title>
            </Card.Header>
            <Content>
              <SubWrapper>
                <Avatar size={48} id={user._id} />
                <StyledInput
                  onKeyDown={this.keyPress}
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Vad funderar du på?"
                />
              </SubWrapper>
            </Content>
          </Card>
        )}
      </Wrapper>
    );
  }
}

CreateTimeline.propTypes = {
  handleNewTimeline: PropTypes.func,
};

export default CreateTimeline;
