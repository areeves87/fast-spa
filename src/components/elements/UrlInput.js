import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

class UrlInput extends Component {
  state = {
    selectedMethod: 'GET',
  };
  selectedMethodHandler = (eventKey, e) => {
    this.setState({ selectedMethod: eventKey });
  };

  sendHandler = e => {};
  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <Dropdown
            onSelect={(eventKey, e) => this.selectedMethodHandler(eventKey, e)}
          >
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {this.state.selectedMethod}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="GET">GET</Dropdown.Item>
              <Dropdown.Item eventKey="POST">POST</Dropdown.Item>
              <Dropdown.Item eventKey="PUT">PUT</Dropdown.Item>
              <Dropdown.Item eventKey="PATCH">PATCH</Dropdown.Item>
              <Dropdown.Item eventKey="DELETE">DELETE</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown button"
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            id="button-addon2"
            onClick={e => this.sendHandler(e)}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default UrlInput;