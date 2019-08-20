import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class BinaryPanel extends Component {
  render() {
    return (
      <div>
        <Dropzone
          className="btn btn-primary"
          maxSize={1024 * 1024 * 6}
          onDrop={file => this.fileSelectHandler(file)}
          onDropRejected={this.onDropRejected}
          multiple={false}
          accept="*/*"
        >
          Select File
        </Dropzone>
        <br />
      </div>
    );
  }
}

export default BinaryPanel;
