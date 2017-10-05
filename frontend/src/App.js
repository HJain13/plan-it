import React, { Component } from 'react';
import Home from './components/Home/Home';
import AddBusiness from './components/AddBusiness/AddBusiness';
import AddItem from './components/AddItem/AddItem';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import StaffDetails from './components/StaffDetails/StaffDetails';
import ViewPackage from './components/ViewPackage/ViewPackage';
import IndexItem from './components/IndexItem/IndexItem';
import { Route } from 'react-router-dom';
import './css/App.css';
import './css/bulma.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact={true} path="/" component={Home} />
        <Route path='/add-item' component={AddItem} />
        <Route path='/admin' component={Admin} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/index' component={IndexItem} />
        <Route path="/add-verify-business" component={AddBusiness} />
        <Route path="/staff-details" component={StaffDetails} />
        <Route path="/view-package" component={ViewPackage} />
      </div>
    );
  }
}

export default App;
