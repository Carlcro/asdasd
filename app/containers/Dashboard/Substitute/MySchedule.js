import React, { Component } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import addDays from 'date-fns/add_days';
import isSameDay from 'date-fns/is_same_day';
import startOfWeek from 'date-fns/start_of_week';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import reducer from './reducer';
import { scheduleData as saga } from './saga';
import { loadSchedule } from './actions';
import { makeSelectSchedule } from './selectors';
import { makeSelectLoading, makeSelectError } from '../../App/selectors';
import { format } from '../../../utils/dateFormat';
import messages from '../messages';

class MySchedule extends Component {
  constructor(props) {
    super(props);

    const week = [];
    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
    for (let dayNumber = 0; dayNumber < 7; dayNumber++) {
      week.push(addDays(startOfWeek(new Date()), dayNumber + 1));
    }
    this.state = { week, selectedShift: {} };
  }

  componentDidMount() {
    this.populateSchedule(this.state.week);
  }

  handlePreviousWeek = () => {
    const newWeek = [];

    let firstDay = this.state.week[0];
    firstDay = addDays(firstDay, -7);

    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
    for (let dayNumber = 0; dayNumber < 7; dayNumber++) {
      newWeek.push(addDays(firstDay, dayNumber));
    }
    this.setState({ week: newWeek });
    this.populateSchedule(newWeek);
  };

  handleNextWeek = () => {
    const newWeek = [];

    let lastDay = this.state.week.slice(-1)[0];
    lastDay = addDays(lastDay, 1);

    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
    for (let dayNumber = 0; dayNumber < 7; dayNumber++) {
      newWeek.push(addDays(lastDay, dayNumber));
    }

    this.setState({ week: newWeek });
    this.populateSchedule(newWeek);
  };

  populateSchedule = week => {
    const firstDay = week[0];
    const lastDay = week.slice(-1)[0];

    const dateFrom = format(firstDay, 'YYYY-MM-DD');
    const dateTo = format(addDays(lastDay, 1), 'YYYY-MM-DD');

    this.props.loadSchedule(dateFrom, dateTo);
  };

  renderShiftyBody = () => {
    const { selectedShift } = this.state;
    return (
      <ul>
        <li>Id: {selectedShift.id}</li>
        <li>
          Time: {format(selectedShift.shiftFrom, 'HH:mm')} -{' '}
          {format(selectedShift.shiftTo, 'HH:mm')}
        </li>
        <li>Break: {format(selectedShift.shiftBreak, 'HH:mm')}</li>
        {selectedShift.workplace && (
          <li>Workplace: {selectedShift.workplace}</li>
        )}
        {selectedShift.activityName && (
          <li>Activity: {selectedShift.activityName}</li>
        )}
      </ul>
    );
  };

  handleShowShift = shift => {
    this.setState({
      showModal: true,
      selectedShift: shift,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
      selectedShift: {},
    });
  };

  shiftStyle = shift => {
    if (shift.typeId === 1) {
      return 'scheduledShift';
    }
    return 'bookedShift';
  };

  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>{this.state.selectedShift.type}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.renderShiftyBody()}</Modal.Body>
        </Modal>
        <div className="MySchedule">
          <Table>
            <thead>
              <tr>
                {this.state.week.map(day => (
                  <th key={day}>{format(day, 'dddd YYYY-MM-DD')}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {this.props.schedule &&
                  this.state.week.map(day => {
                    const shiftsOnDay = this.props.schedule.filter(s =>
                      isSameDay(s.shiftFrom, day),
                    );
                    if (shiftsOnDay.length > 0) {
                      return (
                        <td
                          key={day}
                          style={{
                            padding: 0,
                            margin: 0,
                            backgroundColor: 'white',
                          }}
                        >
                          <Table>
                            <tbody>
                              {shiftsOnDay.map(shift => (
                                <tr key={shift.id}>
                                  <td className={this.shiftStyle(shift)}>
                                    <Button
                                      bsStyle="link"
                                      onClick={() =>
                                        this.handleShowShift(shift)
                                      }
                                    >
                                      {format(shift.shiftFrom, 'HH:mm')}-
                                      {format(shift.shiftTo, 'HH:mm')}
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </td>
                      );
                    }
                    return (
                      <td key={day} style={{ backgroundColor: 'white' }} />
                    );
                  })}
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="dateNavigationButtons">
          <Button className="previousButton" onClick={this.handlePreviousWeek}>
            <FormattedMessage {...messages.previousWeek} />
          </Button>
          <Button className="nextButton" onClick={this.handleNextWeek}>
            <FormattedMessage {...messages.nextWeek} />
          </Button>
        </div>
      </div>
    );
  }
}

MySchedule.propTypes = {
  schedule: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadSchedule: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadSchedule: (dateFrom, dateTo) =>
      dispatch(loadSchedule(dateFrom, dateTo)),
  };
}

const mapStateToProps = createStructuredSelector({
  schedule: makeSelectSchedule(),
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
)(MySchedule);
