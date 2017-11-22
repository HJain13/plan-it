import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';

var Welcome; 
if(localStorage.name!==null && localStorage.name!=='') {
  Welcome = <LoggedIn />;
}
else {
  Welcome = <LoggedOff />;
}
function LoggedIn(props) {
  return (
    <div className="navbar-item">
      <span>Welcome {localStorage.userType!=='admin' ? localStorage.name:'Admin'},</span> &nbsp;
      <span><a onClick={logout}>Logout</a></span>    
    </div>
  );
}

localStorage.planitLocation="";
function LoggedOff(props) {
  return (
    <div className="navbar-item">
      {localStorage.planitLocation==='/login' || localStorage.planitLocation==='/login/admin' || localStorage.planitLocation==='/login/business' ? null:<Link to="/login">Login</Link> }
    </div>
  );
}

function logout(event) {
  event.preventDefault();
  localStorage.isLoggedIn="false";
  localStorage.name="";
  localStorage.userType="";
  window.location = "/login"
}


class Header extends Component {
  render() {
    localStorage.planitLocation=this.props.location.pathname;
    return (
      <nav className="navbar is-black">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item"><strong>PlanIt</strong></Link>
          <a className="navbar-item is-hidden-desktop" href="https://github.com/HJain13/plan-it" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fa fa-lg fa-github"></i>
            </span>
          </a>
          <div className="navbar-burger burger" data-target="navMenuTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navMenuTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-hidden-desktop-only" href="https://github.com/HJain13/plan-it" target="_blank" rel="noopener noreferrer">
              <span className="icon">
                <i className="fa fa-lg fa-github"></i>
              </span>
            </a>
            {Welcome}
            {/* <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.3.zip">
                    <span className="icon"><i className="fa fa-download"></i></span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
