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

const rows = [{ key: '', value: '', description: '' }];

class Headers extends Component {
  state = { rows, rowCount: 1, selectedIndexes: [] };

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(preState => {
      const rows = preState.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }

      //increase row count
      let rowCount = preState.rowCount;
      if (fromRow === preState.rowCount - 1) {
        rowCount++;
        rows[fromRow + 1] = { key: '', value: '', description: '' };
      }

      return { rows, rowCount };
    });
  };

  onRowsSelected = rows => {
    this.setState({
      selectedIndexes: this.state.selectedIndexes.concat(
        rows.map(r => r.rowIdx)
      ),
    });
  };

  onRowsDeselected = rows => {
    const rowIndexes = rows.map(r => r.rowIdx);
    this.setState({
      selectedIndexes: this.state.selectedIndexes.filter(
        i => rowIndexes.indexOf(i) === -1
      ),
    });
  };

  render() {
    return (
      <div>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => this.state.rows[i]}
          rowsCount={this.state.rowCount}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
            onRowsSelected: this.onRowsSelected,
            onRowsDeselected: this.onRowsDeselected,
            selectBy: {
              indexes: this.state.selectedIndexes,
            },
          }}
        />
        <br />
      </div>
    );
  }
}

export default Headers;
