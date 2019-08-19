import React, { Component } from 'react';

class RawPanel extends Component {
  render() {
    return (
      <div>
        <textarea
          className="form-control"
          aria-label="With textarea"
        ></textarea>
        <br />
      </div>
    );
  }
}

export default RawPanel;
