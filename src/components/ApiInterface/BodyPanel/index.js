import React, { Component } from 'react';
import NonePanel from './NonePanel';
import FormDataPanel from './FormDataPanel';
import RawPanel from './RawPanel';
import UrlEncodedPanel from './UrlEncodedPanel';
import BinaryPanel from './BinaryPanel';

class BodyPanel extends Component {
  state = { selectedType: 'none' };

  selectTypeHandler = e => {
    this.setState({ selectedType: e.target.id });
  };

  render() {
    return (
      <div className="pt-1">
        <div className="pt-1">
          <label className="mx-1">
            <input
              type="radio"
              className="mx-1"
              name="options"
              id="none"
              checked={this.state.selectedType === 'none'}
              onChange={e => this.selectTypeHandler(e)}
            />
            none
          </label>
          <label className="mx-1">
            <input
              type="radio"
              className="mx-1"
              name="options"
              id="form-data"
              checked={this.state.selectedType === 'form-data'}
              onChange={e => this.selectTypeHandler(e)}
            />
            form-data
          </label>
          <label className="mx-1">
            <input
              type="radio"
              className="mx-1"
              name="options"
              id="x-www-form-urlencoded"
              checked={this.state.selectedType === 'x-www-form-urlencoded'}
              onChange={e => this.selectTypeHandler(e)}
            />
            x-www-form-urlencoded
          </label>
          <label className="mx-1">
            <input
              type="radio"
              className="mx-1"
              name="options"
              id="raw"
              checked={this.state.selectedType === 'raw'}
              onChange={e => this.selectTypeHandler(e)}
            />
            raw
          </label>
          <label className="mx-1">
            <input
              type="radio"
              className="mx-1"
              name="options"
              id="binary"
              checked={this.state.selectedType === 'binary'}
              onChange={e => this.selectTypeHandler(e)}
            />
            binary
          </label>
        </div>
        <hr />
        {this.state.selectedType === 'none' ? <NonePanel /> : ''}
        {this.state.selectedType === 'form-data' ? <FormDataPanel /> : ''}
        {this.state.selectedType === 'x-www-form-urlencoded' ? (
          <UrlEncodedPanel />
        ) : (
          ''
        )}
        {this.state.selectedType === 'raw' ? <RawPanel /> : ''}
        {this.state.selectedType === 'binary' ? <BinaryPanel /> : ''}
        <br />
      </div>
    );
  }
}

export default BodyPanel;
