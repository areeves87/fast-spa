import React, { Component } from 'react';
import UrlInput from './elements/UrlInput';
import ApiTabs from './ApiInterface/ApiTabs';

class ApiInterface extends Component {
  render() {
    return (
      <div className="pt-3">
        <UrlInput />
        <hr />
        <ApiTabs />
      </div>
    );
  }
}

export default ApiInterface;
