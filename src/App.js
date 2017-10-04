import React, { Component } from 'react';
import Home from './components/Home/Home';
import AddBusiness from './components/AddBusiness/AddBusiness';
import StaffDetails from './components/StaffDetails/StaffDetails';
import ViewPackage from './components/ViewPackage/ViewPackage';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import './css/App.css';
import './css/bulma.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact={true} path="/" component={Home} />
        <Route path="/add-verify-business" component={AddBusiness} />
        <Route path="/staff-details" component={StaffDetails} />
        <Route path="/view-package" component={ViewPackage} />
      </div>
    );
  }
}

export default App;
