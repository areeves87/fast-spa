import React, { Component } from 'react';
import UrlInputContainer from './elements/UrlInputContainer';
import ApiTabs from './ApiInterface/ApiTabs';
import ResponseContainer from './ApiInterface/ResponseContainer';

class ApiInterface extends Component {
  render() {
    return (
      <div className="pt-3">
        <UrlInputContainer />
        <hr />
        <ApiTabs />
        <hr />
        <ResponseContainer />
      </div>
    );
  }
}

export default ApiInterface;
