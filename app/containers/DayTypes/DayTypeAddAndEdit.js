import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import DayTypesForm from './DayTypesForm';

const DayTypesAddAndEdit = props => (
  <div>
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DayTypesForm
          selectedDayType={props.selectedDayType || {}}
          onSubmit={props.onSubmit}
          handleClose={props.handleClose}
        />
      </Modal.Body>
    </Modal>
  </div>
);

DayTypesAddAndEdit.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  header: PropTypes.string,
  selectedDayType: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default DayTypesAddAndEdit;
