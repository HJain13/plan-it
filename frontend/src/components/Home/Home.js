import React, {Component} from 'react';
import '../../css/App.css';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header location={this.props.location}/>
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="box">
                  <div className="title is-1 has-has-text-light">
                    Testing Method
                  </div>
                  <div className="content has-text-left">
                    <ul>
                      <li>Login From Top Right</li>
                      <li><Link to="/login/admin">Admin Login</Link><br/>
                        use credentials:
                        <br/>
                        <strong>username:</strong>&nbsp;himeshjain13@gmail.com
                        <br/><strong>password:</strong>&nbsp;qwerty
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
