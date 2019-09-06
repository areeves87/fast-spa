import React, { Component } from 'react';
// import brace from 'brace';
import AceEditor from 'react-ace';
import TableViewer from '../TableViewer';
import ResponseStatus from '../ResponseStatus';
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
        <ResponseStatus apiInterface={this.props.apiInterface} />
        <div className="">

          {
            this.props.apiInterface.response.request && this.props.apiInterface.response.request.responseType !== 'blob' ?
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
              :
              <TableViewer
                columns={this.props.apiInterface.csv.columns}
                rows={this.props.apiInterface.csv.rows}
              />
          }
          
        </div>
      </div>
    );
  }
}

export default Response;
