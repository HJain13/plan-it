import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';
import Header from '../Header/Header';

class StaffDetails extends Component {
  render() {
    return (
      <div className="App">
        <Header location={this.props.location} />
        <p className="App-intro">
          <Link to="/">Back</Link>
          <br />
          <br />
          Maintain Staff Details Here
        </p>
      </div>
    );
  }
}

export default StaffDetails;
