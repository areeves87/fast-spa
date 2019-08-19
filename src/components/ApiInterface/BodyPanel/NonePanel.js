import React, { Component } from 'react';

class NonePanel extends Component {
  render() {
    return (
      <div className="d-flex">
        This request does not have a body
        <br />
      </div>
    );
  }
}

export default NonePanel;
