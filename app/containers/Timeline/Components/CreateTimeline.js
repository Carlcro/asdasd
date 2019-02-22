/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Textarea } from 'rbx';
import styled from 'styled-components';
import Avatar from '../../../components/Avatar';

const Wrapper = styled.div`
  padding: 10px;
`;

const StyledInput = styled(Textarea)`
  margin-top: 20px;
  outline: none;
  width: 100%;
`;

const SubWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Content = styled.div`
  padding: 0px;
  font-size: 14px;
`;

const StyledCardHeaderTitel = styled(Card.Header.Title)`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
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
    const { user } = this.props;

    return (
      <Wrapper>
        {user && (
          <Card style={{ borderRadius: 3 }}>
            <Card.Header style={{ backgroundColor: '#f5f6f7', padding: 8 }}>
              <StyledCardHeaderTitel>Skapa inlägg</StyledCardHeaderTitel>
            </Card.Header>
            <Content>
              <SubWrapper>
                <Avatar size={48} id={user._id} />
                <StyledInput
                  onKeyDown={this.keyPress}
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="Vad funderar du på?"
                  fixedSize
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
  user: PropTypes.object,
};

export default CreateTimeline;
