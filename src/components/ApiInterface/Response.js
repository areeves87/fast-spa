import React, { Component } from 'react';
// import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/json';
import 'brace/theme/github';

class Response extends Component {
  state = {
    selectedTab: 1,
  };
  handleSelect = selectedTab => {
    this.setState({ selectedTab });
  };

  sendHandler = e => {};
  render() {
    return (
      <div>
        <div className="d-flex">
          <div>
            Status:
            {this.props.apiInterface.response.code === 200 ? (
              <p className="text-success">
                {this.props.apiInterface.response.code}
              </p>
            ) : (
              ''
            )}
            {this.props.apiInterface.response.code === 300 ? (
              <p className="text-warning">
                {this.props.apiInterface.response.code}
              </p>
            ) : (
              ''
            )}
            {this.props.apiInterface.response.code === 400 ? (
              <p className="text-danger">
                {this.props.apiInterface.response.code}
              </p>
            ) : (
              ''
            )}
            {this.props.apiInterface.response.code === 500 ? (
              <p className="text-dark">
                {this.props.apiInterface.response.code}
              </p>
            ) : (
              ''
            )}
          </div>
          <div>
            Time:
            {this.props.apiInterface.response.code}
          </div>
          <div>
            Size:
            {this.props.apiInterface.response.code}
          </div>
        </div>
        <AceEditor
          placeholder="Placeholder Text"
          mode="json"
          theme="github"
          name="blah2"
          onLoad={this.onLoad}
          onChange={this.onChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={this.props.apiInterface.response.data}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </div>
    );
  }
}

export default Response;
