import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ParamsPanel from './ParamsPanel';
import HeadersPanel from './HeadersPanel';
import BodyPanel from './BodyPanel/';

class ApiTabs extends Component {
  state = {
    selectedTab: 2,
  };
  handleSelect = selectedTab => {
    this.setState({ selectedTab });
  };

  sendHandler = e => {};
  render() {
    return (
      <Tabs activeKey={this.state.selectedTab} onSelect={this.handleSelect}>
        <Tab eventKey={1} title="Params">
          <ParamsPanel />
        </Tab>
        <Tab eventKey={2} title="Authorization">
          Authorization
        </Tab>
        <Tab eventKey={3} title="Headers">
          <HeadersPanel />
        </Tab>
        <Tab eventKey={4} title="Body">
          <BodyPanel />
        </Tab>
      </Tabs>
    );
  }
}

export default ApiTabs;
