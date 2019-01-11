import React from 'react';
import { Grid as BsGrid, Row, Col } from 'react-bootstrap';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import gridColumns from './GridColumns';
import Grid from '../../components/common/Grid';
import DayTypeAddAndEdit from './DayTypeAddAndEdit';
import reducer from './reducer';
import { dayTypesData as saga } from './saga';
import { loadDayTypes, deleteDayType, saveDayType } from './actions';
import { makeSelectDayTypes } from './selectors';
import { makeSelectLoading, makeSelectError } from '../App/selectors';
import messages from './messages';
import _ from 'lodash';

class DayTypesGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      selectedDayType: {},
      modalHeader: '',
    };
  }

  componentDidMount() {
    this.props.loadDayTypes();
  }

  handleClose = () => {
    this.setState({
      showModal: false,
      selectedDayType: {},
    });
  };

  handleDeleteButton = item => {
    this.props.deleteDayType(item.id);
  };

  handleSubmit = item => {
    this.props.saveDayType(item);

    this.setState({
      showModal: false,
    });
  };

  handleEditButton = item => {
    this.setState({
      showModal: true,
      selectedDayType: item,
      modalHeader: <FormattedMessage {...messages.editDayType} />,
    });
  };

  handleAddButton = () => {
    this.setState({
      showModal: true,
      selectedDayType: {},
      modalHeader: <FormattedMessage {...messages.addDayType} />,
    });
  };

  render() {
    const { modalHeader, showModal } = this.state;
    const { dayTypes } = this.props;
    const orderedDayTypes = _.orderBy(dayTypes, ['name'], ['asc']);
    return (
      <div>
        <DayTypeAddAndEdit
          header={modalHeader}
          onSubmit={this.handleSubmit}
          handleClose={this.handleClose}
          selectedDayType={this.state.selectedDayType}
          show={showModal}
        />
        <BsGrid style={{ margin: 0 }}>
          <Row>
            <Col>
              {this.props.dayTypes && (
                <Grid
                  showAddButton
                  onAddButtonClick={this.handleAddButton}
                  showEditButton
                  onEditButtonClick={this.handleEditButton}
                  showDeleteButton
                  onDeleteButtonClick={this.handleDeleteButton}
                  columns={gridColumns}
                  data={orderedDayTypes}
                  pageSize={10}
                  pageable
                />
              )}
            </Col>
          </Row>
        </BsGrid>
      </div>
    );
  }
}

DayTypesGrid.propTypes = {
  dayTypes: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadDayTypes: PropTypes.func,
  deleteDayType: PropTypes.func,
  saveDayType: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadDayTypes: () => dispatch(loadDayTypes()),
    deleteDayType: id => dispatch(deleteDayType(id)),
    saveDayType: dayType => dispatch(saveDayType(dayType)),
  };
}

const mapStateToProps = createStructuredSelector({
  dayTypes: makeSelectDayTypes(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'dayTypes', reducer });
const withSaga = injectSaga({ key: 'dayTypes', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DayTypesGrid);
