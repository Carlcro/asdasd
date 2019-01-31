import React from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { Column } from 'rbx';
import Timeline from '../Timeline';
import Profile from '../Profile';
import 'react-toastify/dist/ReactToastify.css';
import 'rbx/index.css';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - Time Care Pool" defaultTitle="Time Care Pool">
        <meta name="description" content=" A Time Care Pool application" />
      </Helmet>
      <ToastContainer />

      <Column.Group>
        <Column size="half" offset="one-quarter">
          <Switch>
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/" component={Timeline} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </Column>
      </Column.Group>
    </div>
  );
}
