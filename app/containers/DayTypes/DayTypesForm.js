import React from 'react';
import Joi from 'joi-browser';
import { Button, Row, Grid as BsGrid, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Form from '../../components/common/Form';
import messages from './messages';

class DayTypesForm extends Form {
  state = {
    data: {
      name: '',
      shortName: '',
      sign: '',
    },
    errors: {},
  };

  schema = {
    id: Joi.number()
      .allow(null)
      .label('Id'),
    name: Joi.string()
      .required()
      .label('Name'),
    shortName: Joi.string()
      .required()
      .label('Short Name'),
    sign: Joi.string()
      .required()
      .label('Sign'),
    color: Joi.string()
      .required()
      .label('Color'),
  };

  componentDidMount() {
    if (this.props.selectedDayType) {
      const newValue = this.mapToViewModel(this.props.selectedDayType);
      if (newValue !== this.state.data) {
        this.setState({ data: newValue });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedDayType) {
      const newValue = this.mapToViewModel(nextProps.selectedDayType);
      if (newValue !== this.state.data) {
        this.setState({ data: newValue });
      }
    }
  }

  mapToViewModel(dayType) {
    return {
      id: dayType.id || null,
      name: dayType.name,
      shortName: dayType.shortName,
      sign: dayType.sign,
      color: dayType.color || '#000000',
    };
  }

  doSubmit = () => {
    this.props.onSubmit(this.state.data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormattedMessage {...messages.name}>
            {label => this.renderInput('name', label)}
          </FormattedMessage>
          <FormattedMessage {...messages.shortName}>
            {label => this.renderInput('shortName', label)}
          </FormattedMessage>
          <FormattedMessage {...messages.sign}>
            {label => this.renderInput('sign', label)}
          </FormattedMessage>
          <FormattedMessage {...messages.color}>
            {label => this.renderColorPicker('color', label)}
          </FormattedMessage>
          <BsGrid>
            <Row>
              <Col sm={1}>{this.renderButton('Save', 'submit')}</Col>
              <Col>
                <Button onClick={this.props.handleClose}>
                  <FormattedMessage {...messages.close} />
                </Button>
              </Col>
            </Row>
          </BsGrid>
        </form>
      </div>
    );
  }
}

export default DayTypesForm;
