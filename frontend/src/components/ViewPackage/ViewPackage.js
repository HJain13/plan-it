import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';
import Header from '../Header/Header';

class ViewPackage extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          <Link to="/">Back</Link>
          <br />
          <br />
          View Packages Here
        </p>
      </div>
    );
  }
}

export default ViewPackage;
