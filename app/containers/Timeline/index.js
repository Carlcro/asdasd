/**
 *
 * Timeline
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTimeline from './selectors';
import reducer from './reducer';
import saga from './saga';
import TimelineCard from './Components/TimelineCard';
import { timelineData } from './mockData';

function Timeline() {
  return (
    <div>
      <Helmet>
        <title>Timeline</title>
        <meta name="description" content="Description of Timeline" />
      </Helmet>
      <div>
        {timelineData.map(item => (
          <TimelineCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  timeline: makeSelectTimeline(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'timeline', reducer });
const withSaga = injectSaga({ key: 'timeline', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Timeline);
