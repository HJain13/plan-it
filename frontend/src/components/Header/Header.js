import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';

var Welcome; 
if(localStorage.name!=='') {
  Welcome = <LoggedIn />;
}

function logout(event) {
  event.preventDefault();
  localStorage.isLoggedIn="false";
  localStorage.name="";
  this.props.history.push('/');    
}


function LoggedIn(props) {
  return (
    <div>
      <span className="navbar-item">Welcome {localStorage.name}</span>
      <span className="navbar-item"><a onClick={this.logout}>Logout</a></span>    
    </div>
  );
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = logout.bind(this);
  }

  render() {
    return (
      <nav className="navbar is-transparent">
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
