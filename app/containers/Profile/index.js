/**
 *
 * Profile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import { profileData } from './mockData';
/* eslint-disable react/prefer-stateless-function */
export class Profile extends React.Component {
  render() {
    const profile = profileData.find(
      x => x.id === Number(this.props.match.params.id),
    );

    return (
      <div>
        <Helmet>
          <title>Profile</title>
          <meta name="description" content="Description of Profile" />
        </Helmet>
        <h1>Namn: {profile.name}</h1>
        <h1>Kön: {profile.gender}</h1>
        <h1>Arbetsplats: {profile.work}</h1>
      </div>
    );
  }
}

Profile.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
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

const withReducer = injectReducer({ key: 'profile', reducer });
const withSaga = injectSaga({ key: 'profile', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Profile);
