import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="/"><strong>PlanIt</strong></a>

          <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
            <span className="icon">
              <i className="fa fa-lg fa-github"></i>
            </span>
          </a>

          <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
            <span className="icon">
              <i className="fa fa-lg fa-twitter"></i>
            </span>
          </a>

          <div className="navbar-burger burger" data-target="navMenuTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navMenuTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            {/* <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link  is-active" href="/documentation/overview/start/">Docs</a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item " href="/documentation/overview/start/">Overview</a>
                <a className="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">Modifiers</a>
                <a className="navbar-item " href="http://bulma.io/documentation/columns/basics/">Columnss</a>
                <a className="navbar-item " href="http://bulma.io/documentation/layout/container/">Layout</a>
                <a className="navbar-item " href="http://bulma.io/documentation/form/general/">Form</a>
                <a className="navbar-item " href="http://bulma.io/documentation/elements/box/">Elements</a>
                  <a className="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">Components</a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div>
                    <p className="is-size-6-desktop">
                      <strong className="has-text-info">0.5.3</strong>
                    </p>
                    <small>
                      <a className="bd-view-all-versions" href="/versions">View all versions</a>
                    </small>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <a className="navbar-item " href="http://bulma.io/love/">
              <span className="bd-emoji">❤️</span>Love
            </a> */}
          </div>

          <div className="navbar-end">
            <a className="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
              <span className="icon">
                <i className="fa fa-lg fa-github"></i>
              </span>
            </a>
            <a className="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" target="_blank">
              <span className="icon">
                <i className="fa fa-lg fa-twitter"></i>
              </span>
            </a>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://bulma.io&via=jgthms">
                    <span className="icon"><i className="fa fa-twitter"></i></span>
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.3.zip">
                    <span className="icon"><i className="fa fa-download"></i></span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
