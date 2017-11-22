import React, { Component } from 'react';
import Home from './components/Home/Home';
import AddBusiness from './components/AddBusiness/AddBusiness';
import Admin from './components/Admin/Admin';
import Business from './components/Business/Business';
import User from './components/User/User';
import ApproveBusiness from './components/ApproveBusiness/ApproveBusiness';
import PostComplaint from './components/User/PostComplaint/PostComplaint';
import BuyPackage from './components/User/BuyPackage/BuyPackage';
import SwipeBuy from './components/User/SwipeBuy/SwipeBuy';
import UserLogin from './components/Login/User';
import BusinessLogin from './components/Login/Business';
import AdminLogin from './components/Login/Admin';
import BusinessRegister from './components/Register/Business';
import UserRegister from './components/Register/User';
import StaffDetails from './components/StaffDetails/StaffDetails';
import ViewPackage from './components/ViewPackage/ViewPackage';
import UserIndex from './components/UserIndex/UserIndex';
import PackageIndex from './components/PackageIndex/PackageIndex';
import BusinessIndex from './components/BusinessIndex/BusinessIndex';
import AddPackage from './components/Business/AddPackage/AddPackage';
import { Route, Switch } from 'react-router-dom';

//Importing App Specific Css
import './css/App.css';
// Importing Bulma CSS Framework
import './css/bulma.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Using Switch so that Only One Path gets rendered at a Time */}
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path='/admin' component={Admin} />
          <Route path='/business' component={Business} />
          <Route path='/user/swipe-buy' component={SwipeBuy} />
          <Route path='/user/buy/:id' component={BuyPackage} />
          <Route path='/user/post-complaint' component={PostComplaint} />
          <Route path='/user' component={User} />
          <Route path='/approve/:id' component={ApproveBusiness} />
          <Route path='/login/business' component={BusinessLogin} />
          <Route path='/login/admin' component={AdminLogin} />
          <Route path='/login/' component={UserLogin} />
          <Route path='/register/business' component={BusinessRegister} />
          <Route path='/register' component={UserRegister} />
          <Route path='/user-index' component={UserIndex} />
          <Route path='/package-index' component={PackageIndex} />
          <Route path='/business-index' component={BusinessIndex} />
          <Route path="/add-verify-business" component={AddBusiness} />
          <Route path="/staff-details" component={StaffDetails} />
          <Route path="/view-package" component={ViewPackage} />
          <Route path="/add-package" component={AddPackage} />
        </Switch>
      </div>
    );
  }
}

export default App;
