import React, { Component } from 'react';
import {
  Grid as KendoGrid,
  GridColumn as Column,
  GridToolbar,
} from '@progress/kendo-react-grid';
import _get from 'lodash/get';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Grid extends Component {
  constructor(props) {
    super(props);

    const EditAndDeleteColumn = this.renderEditAndDeleteColumn();

    this.state = {
      columns: EditAndDeleteColumn
        ? [...this.props.columns, EditAndDeleteColumn]
        : [...this.props.columns],
      skip: 0,
      take: this.props.pageSize || 10,
      activeFilters: [],
    };

    this.props.columns.forEach(column => {
      if (column.filterable) {
        this.state.activeFilters.push({ column: column.field, filter: [] });
      }
    });

    this.renderCell = this.renderCell.bind(this);
    this.renderEditAndDeleteColumn = this.renderEditAndDeleteColumn.bind(this);
    this.pageChange = this.pageChange.bind(this);
  }

  pageChange(event) {
    this.setState({
      skip: event.page.skip,
      take: event.page.take,
    });
  }

  renderCell(item, column) {
    if (column.template) {
      return column.template(item);
    }

    const data = _get(item, column.field);

    return <td>{data}</td>;
  }

  renderEditAndDeleteColumn() {
    const {
      showDeleteButton,
      showEditButton,
      onDeleteButtonClick,
      onEditButtonClick,
    } = this.props;

    if (!showDeleteButton && !showEditButton) {
      return null;
    }
    return {
      title: ' ',
      field: 'editAndDelete',
      width: (90 * showDeleteButton + 90 * showEditButton).toString(),
      template: item => (
        <td>
          {showDeleteButton && (
            <button
              type="button"
              onClick={() => onDeleteButtonClick(item)}
              className="btn btn-link"
            >
              <FormattedMessage {...messages.delete} />
            </button>
          )}
          {showEditButton && (
            <button
              type="button"
              onClick={() => onEditButtonClick(item)}
              className="btn btn-link"
            >
              <FormattedMessage {...messages.edit} />
            </button>
          )}
        </td>
      ),
    };
  }

  remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
  }

  onFilterChange = (column, event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    const { activeFilters } = this.state;

    const columnFilter = activeFilters.find(x => x.column === column.field)
      .filter;

    if (columnFilter.includes(name)) {
      this.remove(columnFilter, name);
    } else {
      columnFilter.push(name);
    }
    this.setState({
      activeFilters,
      [name]: value,
    });
  };

  filteredData = data => {
    const allData = data;
    let filteredData = allData;
    this.state.activeFilters.forEach(filterColumn => {
      if (filterColumn.filter.length > 0) {
        filteredData = filteredData.filter(x =>
          filterColumn.filter.includes(x[filterColumn.column].toString()),
        );
      }
    });

    return filteredData;
  };

  renderFilter = column => {
    const uniq = _.uniqBy(this.props.data, column.field);
    const types = _.map(uniq, column.field);

    return (
      <div>
        {types.map(type => (
          <div key={type}>
            <input
              style={{ margin: '10px' }}
              id={type}
              name={type}
              type="checkbox"
              value=""
              checked={this.state[type]}
              onChange={e => this.onFilterChange(column, e)}
            />
            <label htmlFor={type}> {_.capitalize(type)}</label>
            <br />
          </div>
        ))}
      </div>
    );
  };

  render() {
    const {
      showAddButton,
      onAddButtonClick,
      pageable,
      data: allData,
    } = this.props;
    const { skip, take, columns } = this.state;
    const filteredData = this.filteredData(allData);
    const data = pageable
      ? filteredData.slice(skip, take + skip)
      : filteredData;
    return (
      <div>
        <KendoGrid
          scrollable="none"
          pageable={pageable}
          data={data}
          skip={skip}
          take={take}
          total={filteredData.length}
          onPageChange={this.pageChange}
        >
          {showAddButton && (
            <GridToolbar>
              <button
                type="button"
                title="add"
                className="btn btn-link"
                onClick={onAddButtonClick}
              >
                <FormattedMessage {...messages.add} />
              </button>
            </GridToolbar>
          )}
          {columns.map(
            column =>
              column.filterable ? (
                <Column
                  key={column.field}
                  field={column.field}
                  title={column.title}
                  width={column.width}
                  format={column.format}
                  cell={props => this.renderCell(props.dataItem, column)}
                  columnMenu={() => this.renderFilter(column)}
                />
              ) : (
                <Column
                  key={column.field}
                  field={column.field}
                  title={column.title}
                  width={column.width}
                  format={column.format}
                  cell={props => this.renderCell(props.dataItem, column)}
                />
              ),
          )}
        </KendoGrid>
      </div>
    );
  }
}

Grid.propTypes = {
  showAddButton: PropTypes.bool.isRequired,
  onAddButtonClick: PropTypes.func,
  showEditButton: PropTypes.bool.isRequired,
  onEditButtonClick: PropTypes.func,
  showDeleteButton: PropTypes.bool.isRequired,
  onDeleteButtonClick: PropTypes.func,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  pageable: PropTypes.bool,
  pageSize: PropTypes.number,
};

export default Grid;
