import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Link to="/add-verify-business">Add/Verify Business</Link>
          <br />
          <br />
          <Link to="/staff-details">Maintaining Staff Details</Link>
          <br />
          <br />
          <Link to="/view-package">View Packages</Link>
        </p>
      </div>
    );
  }
}

export default App;
