import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ParamsPanelContainer from './ParamsPanel/ParamsPanelContainer';
import HeadersPanelContainer from './HeadersPanel/HeadersPanelContainer';
import BodyPanelContainer from './BodyPanel/BodyPanelContainer';

class ApiTabs extends Component {
  state = {
    selectedTab: 1,
  };
  handleSelect = selectedTab => {
    this.setState({ selectedTab });
  };

  sendHandler = e => {};
  render() {
    return (
      <Tabs activeKey={this.state.selectedTab} onSelect={this.handleSelect}>
        <Tab eventKey={1} title="Params">
          <ParamsPanelContainer />
        </Tab>
        <Tab eventKey={2} title="Authorization">
          Authorization
        </Tab>
        <Tab eventKey={3} title="Headers">
          <HeadersPanelContainer />
        </Tab>
        <Tab eventKey={4} title="Body">
          <BodyPanelContainer />
        </Tab>
      </Tabs>
    );
  }
}

export default ApiTabs;
