/**
 *
 * Timeline
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTimeline from './selectors';
import reducer from './reducer';
import { timelineData as saga } from './saga';
import TimelineCard from './Components/TimelineCard';
import { loadTimeline } from './actions';

// eslint-disable-next-line react/prefer-stateless-function
class Timeline extends Component {
  componentDidMount() {
    this.props.loadTimeline();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Timeline</title>
          <meta name="description" content="Description of Timeline" />
        </Helmet>
        {this.props.timeline.length > 0 && (
          <div>
            {this.props.timeline.map(item => (
              <TimelineCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

Timeline.propTypes = {
  timeline: PropTypes.object,
  loadTimeline: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  timeline: makeSelectTimeline(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadTimeline: () => dispatch(loadTimeline()),
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
