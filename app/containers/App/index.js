import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { Column } from 'rbx';
import Timeline from '../Timeline';
// import Profile from '../Profile';
import NavigationBar from '../Navbar/index';
import Login from '../Login';
import RegisterForm from '../RegisterForm';
import { getCurrentUser } from '../../services/authService';
import 'react-toastify/dist/ReactToastify.css';
import 'rbx/index.css';

const GlobalBackground = styled.div`
  background-color: #e9ebee;
  height: 2000px;
`;

export default class App extends Component {
  state = {};

  componentDidMount = () => {
    const user = getCurrentUser();
    this.setState({ user });
  };

  render() {
    const { user } = this.state;

    return (
      <div>
        <Helmet titleTemplate="%s - FaceClone" defaultTitle="FaceClone">
          <meta name="description" content=" A Clone of Facebook" />
        </Helmet>
        <ToastContainer />
        <GlobalBackground>
          <NavigationBar user={user} />
          <Column.Group>
            <Column size="half" offset="one-quarter">
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={RegisterForm} />
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Timeline {...props} user={this.state.user} />
                  )}
                />{' '}
                <Route path="" component={NotFoundPage} />
              </Switch>
            </Column>
          </Column.Group>
        </GlobalBackground>
      </div>
    );
  }
}
