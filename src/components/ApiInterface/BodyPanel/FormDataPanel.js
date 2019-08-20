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

class FormDataPanel extends Component {
  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.props.updateFormData(fromRow, toRow, updated);
  };

  onRowsSelected = rows => {
    const selectedIndexes = this.props.apiInterface.body.formdata.selectedIndexes.concat(
      rows.map(r => r.rowIdx)
    );

    this.props.setFormDataRowsSelected(selectedIndexes);
  };

  onRowsDeselected = rows => {
    const rowIndexes = rows.map(r => r.rowIdx);

    const selectedIndexes = this.props.apiInterface.body.formdata.selectedIndexes.filter(
      i => rowIndexes.indexOf(i) === -1
    );
    this.props.setFormDataRowsSelected(selectedIndexes);
  };

  render() {
    const { formdata } = this.props.apiInterface.body;

    return (
      <div>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => formdata.rows[i]}
          rowsCount={formdata.rowCount}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
            onRowsSelected: this.onRowsSelected,
            onRowsDeselected: this.onRowsDeselected,
            selectBy: {
              indexes: formdata.selectedIndexes,
            },
          }}
        />
        <br />
      </div>
    );
  }
}

export default FormDataPanel;
