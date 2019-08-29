import React, { Component } from 'react';

class RawPanel extends Component {
  render() {
    return (
      <div>
        <textarea
          className="form-control"
          aria-label="With textarea"
          onChange={e => this.props.updateRawBody(e.target.value)}
        >{this.props.apiInterface.body.raw}</textarea>
        <br />
      </div>
    );
  }
}

export default RawPanel;
