import React, { Component } from 'react';
import addDays from 'date-fns/add_days';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import reducer from './reducer';
import { dashboardData as saga } from './saga';
import { loadBalances } from './actions';
import { makeSelectBalances } from './selectors';
import { makeSelectLoading, makeSelectError } from '../../App/selectors';
import { format } from '../../../utils/dateFormat';
import messages from '../messages';
import '../../../styles/Modules/Dashboard.css';

class Balances extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateFrom: addDays(new Date(), -7),
      dateTo: addDays(new Date(), 7),
    };
  }

  componentDidMount() {
    const dateFrom = format(this.state.dateFrom, 'YYYY-MM-DD');
    const dateTo = format(this.state.dateTo, 'YYYY-MM-DD');
    this.props.loadBalances(dateFrom, dateTo);
  }

  formatTime = minutes => {
    let seconds = minutes * 60;

    seconds = Number(seconds);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const mDisplay = m < 10 ? `0${m}` : m;
    return `${h}:${mDisplay} h`;
  };

  render() {
    const { balances } = this.props;
    return (
      <div>
        <div>
          <div>
            <div>
              <div className="balance-square">
                <table className="balance-table">
                  <thead>
                    <tr>
                      <td>
                        <FormattedMessage {...messages.workTime} />
                      </td>
                      <td>{this.formatTime(balances.workTime || 0)}</td>
                    </tr>
                    <tr>
                      <td>
                        <FormattedMessage {...messages.vacationTime} />
                      </td>
                      <td>{this.formatTime(balances.vacationTime || 0)}</td>
                    </tr>
                    <tr>
                      <td>
                        <FormattedMessage {...messages.leaveTime} />
                      </td>
                      <td>{this.formatTime(balances.leaveTime || 0)}</td>
                    </tr>
                    <tr>
                      <td>
                        <FormattedMessage {...messages.alertTime} />
                      </td>
                      <td>{this.formatTime(balances.alertTime || 0)}</td>
                    </tr>
                    <tr>
                      <td>
                        <FormattedMessage {...messages.watchTime} />
                      </td>
                      <td>{this.formatTime(balances.watchTime || 0)}</td>
                    </tr>
                    <tr>
                      <td>
                        <FormattedMessage {...messages.illnessTime} />
                      </td>
                      <td>{this.formatTime(balances.illnessTime || 0)}</td>
                    </tr>
                    <tr>
                      <td>
                        <FormattedMessage {...messages.totalShiftDetailsTime} />
                      </td>
                      <td>
                        {this.formatTime(balances.totalShiftDetailsTime || 0)}
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <FormattedMessage {...messages.totalScheduledShiftTime} />
                      <td>
                        {this.formatTime(balances.totalScheduledShiftTime || 0)}
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <FormattedMessage {...messages.totalAvailabilityTime} />
                      </td>
                      <td>
                        {this.formatTime(balances.totalAvailabilityTime || 0)}
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <FormattedMessage
                          {...messages.totalAvailabilityTimeRemainingAfter}
                        />
                      </td>
                      <td>
                        {this.formatTime(
                          balances.totalAvailabilityTimeRemainingAfter || 0,
                        )}
                      </td>
                      <td />
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Balances.propTypes = {
  balances: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadBalances: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadBalances: (dateFrom, dateTo) =>
      dispatch(loadBalances(dateFrom, dateTo)),
  };
}

const mapStateToProps = createStructuredSelector({
  balances: makeSelectBalances(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'dashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Balances);
