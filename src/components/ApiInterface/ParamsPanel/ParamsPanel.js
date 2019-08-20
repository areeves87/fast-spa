import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';

const defaultColumnProperties = {
  resizable: true,
  width: 320,
};
const columns = [
  { key: 'key', name: 'KEY', editable: true },
  { key: 'value', name: 'VALUE', editable: true },
  { key: 'description', name: 'DESCRIPTION', editable: true },
].map(c => ({ ...c, ...defaultColumnProperties }));

class ParamsPanel extends Component {
  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.props.updateParams(fromRow, toRow, updated);
  };

  onRowsSelected = rows => {
    const selectedIndexes = this.props.apiInterface.params.selectedIndexes.concat(
      rows.map(r => r.rowIdx)
    );

    this.props.setRowsSelected(selectedIndexes);
  };

  onRowsDeselected = rows => {
    const rowIndexes = rows.map(r => r.rowIdx);

    const selectedIndexes = this.props.apiInterface.params.selectedIndexes.filter(
      i => rowIndexes.indexOf(i) === -1
    );
    this.props.setRowsSelected(selectedIndexes);
  };

  render() {
    const { params } = this.props.apiInterface;

    return (
      <div>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => params.rows[i]}
          rowsCount={params.rowCount}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
            onRowsSelected: this.onRowsSelected,
            onRowsDeselected: this.onRowsDeselected,
            selectBy: {
              indexes: params.selectedIndexes,
            },
          }}
        />
        <br />
      </div>
    );
  }
}

export default ParamsPanel;
