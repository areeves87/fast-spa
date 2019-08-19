import React, { Component } from 'react';
import Header from '../components/Header';
import ApiInterface from '../components/ApiInterface';

class Dashboard extends Component {
  componentDidMount() {
    console.log(process.env.REACT_APP_TEST);
    console.log(process.env.NODE_ENV);
  }
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
