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

class UrlEncodedPanel extends Component {
  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.props.updateUrlEncoded(fromRow, toRow, updated);
  };

  onRowsSelected = rows => {
    const selectedIndexes = this.props.apiInterface.body.urlencoded.selectedIndexes.concat(
      rows.map(r => r.rowIdx)
    );

    this.props.setUrlEncodedRowsSelected(selectedIndexes);
  };

  onRowsDeselected = rows => {
    const rowIndexes = rows.map(r => r.rowIdx);

    const selectedIndexes = this.props.apiInterface.body.urlencoded.selectedIndexes.filter(
      i => rowIndexes.indexOf(i) === -1
    );
    this.props.setUrlEncodedRowsSelected(selectedIndexes);
  };

  render() {
    const { urlencoded } = this.props.apiInterface.body;

    return (
      <div>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => urlencoded.rows[i]}
          rowsCount={urlencoded.rowCount}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
            onRowsSelected: this.onRowsSelected,
            onRowsDeselected: this.onRowsDeselected,
            selectBy: {
              indexes: urlencoded.selectedIndexes,
            },
          }}
        />
        <br />
      </div>
    );
  }
}

export default UrlEncodedPanel;
