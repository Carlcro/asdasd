import React from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import { Col, Grid, Row } from 'react-bootstrap';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Dashboard from '../Dashboard/Loadable';
import DayTypes from '../DayTypes/Loadable';
import LocaleToggle from '../LocaleToggle';
import NavMenu from '../NavMenu/NavMenu';
import '@progress/kendo-theme-default/dist/all.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - Time Care Pool" defaultTitle="Time Care Pool">
        <meta name="description" content=" A Time Care Pool application" />
      </Helmet>
      <ToastContainer />
      <Grid fluid>
        <Row>
          <Col sm={2}>
            <NavMenu />
          </Col>
          <Col sm={10}>
            <LocaleToggle />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/dayTypes" component={DayTypes} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
