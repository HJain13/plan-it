import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';

class ViewPackage extends Component {
  render() {
    return (
      <div className="App">
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
