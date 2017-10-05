import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import '../../css/App.css';

class AddBusiness extends Component {
  render() {
    return (
      <div className="App">
        <Header />        
        <p className="App-intro">
          <Link to="/">Back</Link>
          <br />
          <br />
          Add Business
        </p>
      </div>
    );
  }
}

export default AddBusiness;
