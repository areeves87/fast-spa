import React, { Component } from 'react';
import NonePanel from './NonePanel';
import FormDataPanel from './FormDataPanel';
import RawPanel from './RawPanel';
import UrlEncodedPanel from './UrlEncodedPanel';

class BodyPanel extends Component {
  selectTypeHandler = e => {
    this.props.setBodyType(e.target.id);
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
              checked={this.props.apiInterface.body.type === 'none'}
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
              checked={this.props.apiInterface.body.type === 'form-data'}
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
              checked={
                this.props.apiInterface.body.type === 'x-www-form-urlencoded'
              }
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
              checked={this.props.apiInterface.body.type === 'raw'}
              onChange={e => this.selectTypeHandler(e)}
            />
            raw
          </label>
        </div>
        <hr />
        {this.props.apiInterface.body.type === 'none' ? <NonePanel /> : ''}
        {this.props.apiInterface.body.type === 'form-data' ? (
          <FormDataPanel 
            apiInterface={this.props.apiInterface}
            updateFormData={this.props.updateFormData}
            setFormDataRowsSelected={this.props.setFormDataRowsSelected}
          />
        ) : (
          ''
        )}
        {this.props.apiInterface.body.type === 'x-www-form-urlencoded' ? (
          <UrlEncodedPanel
            apiInterface={this.props.apiInterface}
            updateUrlEncoded={this.props.updateUrlEncoded}
            setUrlEncodedRowsSelected={this.props.setUrlEncodedRowsSelected}
          />
        ) : (
          ''
        )}
        {this.props.apiInterface.body.type === 'raw' ? (
          <RawPanel
            apiInterface={this.props.apiInterface}
            updateRawBody={this.props.updateRawBody}
          />
        ) : (
          ''
        )}
        <br />
      </div>
    );
  }
}

export default BodyPanel;
