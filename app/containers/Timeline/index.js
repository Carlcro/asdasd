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
import styled from 'styled-components';
import makeSelectTimeline from './selectors';
import reducer from './reducer';
import { timelineData as saga } from './saga';
import TimelineCard from './Components/TimelineCard';
import CreateTimeline from './Components/CreateTimeline';
import { loadTimeline, saveComment, saveLike, saveTimeline } from './actions';

const Wrapper = styled.div`
  width: 500px;
  padding: 20px;

  @media only screen and (max-width: 540px) {
    /* For mobile phones: */
    width: 100%;
  }
`;

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

  handleNewTimeline = content => {
    this.props.saveTimeline(content);
  };

  render() {
    const { user } = this.props;
    const sortedArray = _.orderBy(this.props.timeline, 'timeStamp', 'desc');
    return (
      <div>
        <Helmet>
          <title>Timeline</title>
          <meta name="description" content="Description of Timeline" />
        </Helmet>
        <Wrapper>
          <CreateTimeline
            user={user}
            handleNewTimeline={this.handleNewTimeline}
          />
          {this.props.timeline.length > 0 && (
            <div>
              {sortedArray.map(item => (
                <TimelineCard
                  user={user}
                  handleNewComment={this.handleNewComment}
                  handleLike={this.handleLike}
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          )}
        </Wrapper>
      </div>
    );
  }
}

Timeline.propTypes = {
  timeline: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loadTimeline: PropTypes.func,
  saveComment: PropTypes.func,
  saveLike: PropTypes.func,
  saveTimeline: PropTypes.func,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  timeline: makeSelectTimeline(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadTimeline: () => dispatch(loadTimeline()),
    saveComment: (comment, id) => dispatch(saveComment(comment, id)),
    saveLike: (id, liked) => dispatch(saveLike(id, liked)),
    saveTimeline: content => dispatch(saveTimeline(content)),
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
