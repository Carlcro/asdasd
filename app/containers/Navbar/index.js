/**
 *
 * Navbar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Navbar, Button, Control, Field } from 'rbx';
// import makeSelectNavbar from './selectors';
import styled from 'styled-components';

import reducer from './reducer';
import saga from './saga';
import Input from '../../components/common/Input';

const Wrapper = styled.a`
  background-color: blue;
`;

/* eslint-disable react/prefer-stateless-function */
export class NavigationBar extends React.Component {
  render() {
    return (
      <Wrapper>
        <Navbar transparent style={{ backgroundColor: '#4267b2' }}>
          <Navbar.Brand>
            <Navbar.Item href="#">
              <span style={{ color: 'white' }}>
                <i className="fab fa-facebook fa-2x" />
              </span>
            </Navbar.Item>
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Segment align="start">
              <Navbar.Item>
                <Field kind="addons">
                  <Control>
                    <Input
                      style={{
                        backgroundColor: 'white',
                        color: 'black',
                        width: 500,
                        height: 36,
                      }}
                      type="text"
                      placeholder="Search"
                    />
                  </Control>
                  <Control>
                    <Button
                      style={{
                        width: 55,
                      }}
                      static
                    >
                      <i className="fas fa-search" />
                    </Button>
                  </Control>
                </Field>
              </Navbar.Item>
              <Navbar.Item style={{ fontWeight: 'bold', color: 'white' }}>
                Carl
              </Navbar.Item>
              <Navbar.Item style={{ fontWeight: 'bold', color: 'white' }}>
                Startsida
              </Navbar.Item>
              <Navbar.Item style={{ fontWeight: 'bold', color: 'white' }}>
                Skapa
              </Navbar.Item>
              <Navbar.Item>
                <span style={{ color: 'white' }}>
                  <i className="fas fa-users fa-lg" />
                </span>
              </Navbar.Item>
              <Navbar.Item>
                <span style={{ color: 'white' }}>
                  <i className="fab fa-facebook-messenger fa-lg" />{' '}
                </span>
              </Navbar.Item>
              <Navbar.Item>
                <span style={{ color: 'white' }}>
                  <i className="fas fa-bell fa-lg" />{' '}
                </span>
              </Navbar.Item>
              <Navbar.Item>
                <span style={{ color: 'white' }}>
                  <i className="fas fa-question-circle fa-lg" />{' '}
                </span>
              </Navbar.Item>
              <Navbar.Item>
                <span style={{ color: 'white' }}>
                  <i className="fas fa-sort-down fa-lg" />{' '}
                </span>
              </Navbar.Item>
            </Navbar.Segment>
          </Navbar.Menu>
        </Navbar>
      </Wrapper>
    );
  }
}

/* NavigationBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  navigationBar: makeSelectNavigationBar(),
}); */

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  // mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'navbar', reducer });
const withSaga = injectSaga({ key: 'navbar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NavigationBar);
