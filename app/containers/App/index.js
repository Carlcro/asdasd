import React from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Timeline from '../Timeline';
import 'react-toastify/dist/ReactToastify.css';
import Grid from '@material-ui/core/Grid';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - Time Care Pool" defaultTitle="Time Care Pool">
        <meta name="description" content=" A Time Care Pool application" />
      </Helmet>
      <ToastContainer />
      <Grid container spacing={24}>
        <Grid  item xs={6}>
          <Switch>
            <Route exact path="/" component={Timeline} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}
