import React, { Component } from 'react';
import Header from '../components/Header';
import ApiInterface from '../components/ApiInterface';

class Dashboard extends Component {
  async componentDidMount() {}
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <ApiInterface />
        </div>
      </div>
    );
  }
}

export default Dashboard;
