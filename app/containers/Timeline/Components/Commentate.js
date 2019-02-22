/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { Input } from 'rbx';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  outline: none;
`;

export default class Commentate extends Component {
  state = { value: '' };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  keyPress = e => {
    if (e.keyCode === 13) {
      this.props.onSubmit(e.target.value, this.props.id);
      this.setState({ value: '' });
    }
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        {user ? (
          <Wrapper>
            <Avatar size={32} id={user._id} />
            <StyledInput
              onKeyDown={this.keyPress}
              placeholder="kommentera..."
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </Wrapper>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

Commentate.propTypes = {
  onSubmit: PropTypes.func,
  id: PropTypes.string,
  user: PropTypes.object,
};
