import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';

class TableViewer extends Component {
  render() {
      const {columns, rows } = this.props;

    return (
        <ReactDataGrid
        columns={columns}
        rowGetter={i => rows[i]}
        rowsCount={rows.length}
      />
    );
  }
}

export default TableViewer;
