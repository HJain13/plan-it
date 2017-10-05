import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';

class Header extends Component {
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
