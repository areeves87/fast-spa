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

class HeadersPanel extends Component {
  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.props.updateHeaders(fromRow, toRow, updated);
  };

  onRowsSelected = rows => {
    const selectedIndexes = this.props.apiInterface.headers.selectedIndexes.concat(
      rows.map(r => r.rowIdx)
    );

    this.props.setHeadersRowsSelected(selectedIndexes);
  };

  onRowsDeselected = rows => {
    const rowIndexes = rows.map(r => r.rowIdx);

    const selectedIndexes = this.props.apiInterface.headers.selectedIndexes.filter(
      i => rowIndexes.indexOf(i) === -1
    );
    this.props.setHeadersRowsSelected(selectedIndexes);
  };

  render() {
    const { headers } = this.props.apiInterface;

    return (
      <div>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => headers.rows[i]}
          rowsCount={headers.rowCount}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
            onRowsSelected: this.onRowsSelected,
            onRowsDeselected: this.onRowsDeselected,
            selectBy: {
              indexes: headers.selectedIndexes,
            },
          }}
        />
        <br />
      </div>
    );
  }
}

export default HeadersPanel;
