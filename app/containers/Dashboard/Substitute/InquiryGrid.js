import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { toast } from 'react-toastify';
import reducer from './reducer';
import { inquiryData as saga } from './saga';
import { loadInquiries } from './actions';
import { saveInquiry } from './actions';
import { makeSelectInquiries } from './selectors';
import { makeSelectLoading, makeSelectError } from '../../App/selectors';
import { format } from '../../../utils/dateFormat';
import Grid from '../../../components/common/Grid';
import messages from '../messages';

class InquiryGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInquiryModal: false,
      selectedInquiry: {
        shift: '',
        break: '',
        place: '',
        adress: '',
        orderId: 0,
      },
    };
  }

  gridColumns = {
    inquiries: [
      {
        title: <FormattedMessage {...messages.shift} />,
        field: 'reqFrom',
        template: req => (
          <td>
            {format(req.reqFrom, 'd MMM hh:mm')}-{format(req.reqTo, 'hh:mm')},
            <FormattedMessage {...messages.break} />: {req.reqBreak}
          </td>
        ),
      },
      {
        title: <FormattedMessage {...messages.workplace} />,
        field: 'orgNodeName',
        template: inquiry => (
          <td>
            <Button
              bsStyle="link"
              onClick={() => this.handleWorkplace(inquiry)}
            >
              {inquiry.orgNodeName}
            </Button>
          </td>
        ),
      },
      {
        title: ' ',
        field: 'yesno',
        width: '120em',
        template: item => (
          <td>
            <Button onClick={() => this.handleYes(item)} bsStyle="link">
              <FormattedMessage {...messages.yes} />
            </Button>
            <Button onClick={() => this.handleNo(item)} bsStyle="link">
              <FormattedMessage {...messages.no} />
            </Button>
          </td>
        ),
      },
    ],
  };

  componentDidMount() {
    this.props.loadInquiries();
  }

  handleWorkplace = inquiry => {
    this.setState({
      showInquiryModal: true,
      selectedInquiry: inquiry,
    });
  };

  handleClose = () => {
    this.setState({
      showInquiryModal: false,
      selectedInquiry: {},
    });
  };

  handleYes = item => {
    const newItem = { ...item };
    newItem.status = 32; // Accept
    this.saveInquiry(newItem);
  };

  handleNo = item => {
    const newItem = { ...item };
    newItem.status = 2; // Decline
    this.saveInquiry(item);
  };

  saveInquiry(item) {
    this.props.saveInquiry(item);
  }

  renderInquiryBody = () => {
    const { selectedInquiry } = this.state;
    return (
      <ul>
        <li>From: {format(selectedInquiry.reqFrom, 'd MMM hh:mm')}</li>
        <li>To: {format(selectedInquiry.reqTo, 'd MMM hh:mm')}</li>
        <li>Break: {selectedInquiry.reqBreak}</li>
        <li>Status: {selectedInquiry.status}</li>
        {selectedInquiry.message && <li>Start: {selectedInquiry.message}</li>}
        {selectedInquiry.cause && <li>Start: {selectedInquiry.cause}</li>}
      </ul>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Modal show={this.state.showInquiryModal} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>{this.state.selectedInquiry.orgNodeName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.renderInquiryBody()}</Modal.Body>
        </Modal>
        <Row>
          <Col>
            <div className="grid">
              {this.props.inquiries && (
                <Grid
                  showAddButton={false}
                  showEditButton={false}
                  showDeleteButton={false}
                  columns={this.gridColumns.inquiries}
                  data={this.props.inquiries}
                  pageSize={5}
                  pageable
                />
              )}
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

InquiryGrid.propTypes = {
  inquiries: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadInquiries: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadInquiries: () => dispatch(loadInquiries()),
    saveInquiry: inquiry => dispatch(saveInquiry(inquiry)),
  };
}

const mapStateToProps = createStructuredSelector({
  inquiries: makeSelectInquiries(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'inquiry', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(InquiryGrid);
