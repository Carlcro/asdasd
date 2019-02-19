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
import _ from 'lodash';
import makeSelectTimeline from './selectors';
import reducer from './reducer';
import { timelineData as saga } from './saga';
import TimelineCard from './Components/TimelineCard';
import { loadTimeline, saveComment, saveLike } from './actions';

// eslint-disable-next-line react/prefer-stateless-function
class Timeline extends Component {
  componentDidMount() {
    this.props.loadTimeline();
  }

  handleNewComment = (comment, id) => {
    this.props.saveComment(comment, id);
  };

  handleLike = (id, liked) => {
    this.props.saveLike(id, liked);
  };

  render() {
    const sortedArray = _.sortBy(this.props.timeline, 'timeStamp');
    return (
      <div>
        <Helmet>
          <title>Timeline</title>
          <meta name="description" content="Description of Timeline" />
        </Helmet>
        {this.props.timeline.length > 0 && (
          <div>
            {sortedArray.map(item => (
              <TimelineCard
                handleNewComment={this.handleNewComment}
                handleLike={this.handleLike}
                key={item.id}
                item={item}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

Timeline.propTypes = {
  timeline: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loadTimeline: PropTypes.func,
  saveComment: PropTypes.func,
  saveLike: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  timeline: makeSelectTimeline(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadTimeline: () => dispatch(loadTimeline()),
    saveComment: (comment, id) => dispatch(saveComment(comment, id)),
    saveLike: (id, liked) => dispatch(saveLike(id, liked)),
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
