import React, { Component } from 'react';
import Home from './components/Home/Home';
import AddBusiness from './components/AddBusiness/AddBusiness';
import AddItem from './components/AddItem/AddItem';
import Admin from './components/Admin/Admin';
import Business from './components/Business/Business';
import UserLogin from './components/Login/User';
import BusinessLogin from './components/Login/Business';
import AdminLogin from './components/Login/Admin';
import Register from './components/Register/Register';
import StaffDetails from './components/StaffDetails/StaffDetails';
import ViewPackage from './components/ViewPackage/ViewPackage';
import UserIndex from './components/UserIndex/UserIndex';
import BusinessIndex from './components/BusinessIndex/BusinessIndex';
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
        <Route path='/business' component={Business} />
        <Route path='/login' component={UserLogin} />
        <Route path='/login/business' component={BusinessLogin} />
        <Route path='/login/admin' component={AdminLogin} />
        <Route path='/register' component={Register} />
        <Route path='/user-index' component={UserIndex} />
        <Route path='/business-index' component={BusinessIndex} />
        <Route path="/add-verify-business" component={AddBusiness} />
        <Route path="/staff-details" component={StaffDetails} />
        <Route path="/view-package" component={ViewPackage} />
      </div>
    );
  }
}

export default App;
