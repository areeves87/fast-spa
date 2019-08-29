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
          <div className="d-flex mr-2">
            Status:
            {this.props.apiInterface.response.status >= 200 && this.props.apiInterface.response.status < 300 ? (
              <p className="text-success">
                {this.props.apiInterface.response.status}
              </p>
            ) : (
              ''
            )}
            {this.props.apiInterface.response.status >= 300 && this.props.apiInterface.response.status < 400 ? (
              <p className="text-warning">
                {this.props.apiInterface.response.status}
              </p>
            ) : (
              ''
            )}
            {this.props.apiInterface.response.status >= 400 && this.props.apiInterface.response.status < 500 ? (
              <p className="text-danger">
                {this.props.apiInterface.response.status}
              </p>
            ) : (
              ''
            )}
            {this.props.apiInterface.response.status >= 500 ? (
              <p className="text-dark">
                {this.props.apiInterface.response.status}
              </p>
            ) : (
              ''
            )}

            {this.props.apiInterface.response.status ? (
              <>&nbsp;({this.props.apiInterface.response.statusText})</>
            ) : (
              ''
            )}
            
          </div>
          <div className="d-flex mr-2">
            Time:
            <p className="text-success">
              {this.props.apiInterface.response.duration}ms
            </p>
          </div>
        </div>
        <div className="">
          <AceEditor
            placeholder="Placeholder Text"
            mode="json"
            theme="github"
            name="blah2"
            style={{ height: '300px', width: '100%' }}
            onLoad={this.onLoad}
            onChange={this.onChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={JSON.stringify(
              this.props.apiInterface.response.data,
              undefined,
              4
            )}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </div>
      </div>
    );
  }
}

export default Response;
