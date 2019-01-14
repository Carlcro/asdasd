import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import addDays from 'date-fns/add_days';
import { format } from 'utils/dateFormat';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { gridColumns } from './gridColumns';
import DatePicker from '../../../components/common/DatePicker';
import Grid from '../../../components/common/Grid';
import reducer from './reducer';
import { messageData as saga } from './saga';
import { loadMessages } from './actions';
import { makeSelectMessages } from './selectors';
import { makeSelectLoading, makeSelectError } from '../../App/selectors';

class MessagesGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateFrom: new Date(),
      dateTo: addDays(new Date(), 7),
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    const dateFrom = format(this.state.dateFrom, 'YYYY-MM-DD');
    const dateTo = format(this.state.dateTo, 'YYYY-MM-DD');

    this.props.loadMessages(dateFrom, dateTo);

    this.setState({ loading: false });
  }

  handleFromDateChange = event => {
    const value = new Date(event.target.value);

    const dateFrom = value;
    let { dateTo } = this.state;

    if (dateFrom > dateTo) {
      dateTo = addDays(new Date(dateFrom), 7);
    }
    this.updateNewTime(dateFrom, dateTo);
  };

  handleToDateChange = event => {
    const value = new Date(event.target.value);

    const dateTo = value;
    let { dateFrom } = this.state;

    if (dateTo < dateFrom) {
      dateFrom = addDays(new Date(dateTo), -7);
    }
    this.updateNewTime(dateFrom, dateTo);
  };

  updateNewTime(dateFrom, dateTo) {
    this.setState({ dateTo, dateFrom, loading: true });

    this.props.loadMessages(
      format(dateFrom, 'YYYY-MM-DD'),
      format(dateTo, 'YYYY-MM-DD'),
    );

    this.setState({ loading: false });
  }

  render() {
    return (
      <React.Fragment>
        <Row style={{ padding: 0, marginBottom: 10, marginLeft: 0 }}>
          <div className="datePickers">
            <div className="dateFrom">
              <DatePicker
                name="dateFrom"
                onChange={this.handleFromDateChange}
                value={this.state.dateFrom}
              />
            </div>
            <div className="dateTo">
              <DatePicker
                name="dateTo"
                onChange={this.handleToDateChange}
                value={this.state.dateTo}
              />
            </div>
          </div>
        </Row>
        <Row>
          <Col>
            <div className="grid">
              {this.state.loading ? (
                <h3>Loading...</h3>
              ) : (
                this.props.messages && (
                  <Grid
                    showAddButton={false}
                    showEditButton={false}
                    showDeleteButton={false}
                    columns={gridColumns.messages}
                    data={this.props.messages}
                    pageSize={5}
                    pageable
                  />
                )
              )}
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

MessagesGrid.propTypes = {
  messages: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadMessages: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadMessages: (dateFrom, dateTo) =>
      dispatch(loadMessages(dateFrom, dateTo)),
  };
}

const mapStateToProps = createStructuredSelector({
  messages: makeSelectMessages(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'message', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MessagesGrid);
