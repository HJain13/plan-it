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
                        <strong>username:</strong>&nbsp;15ucs172@lnmiit.ac.in
                        <br/><strong>password:</strong>&nbsp;qwerty
                        <br/> alternate credentials:
                        <br/>
                        <strong>username:</strong>&nbsp;15ucs173@lnmiit.ac.in
                        <br/><strong>password:</strong>&nbsp;temp1234
                      </li>
                      <li><Link to="/login">User Login</Link><br/>
                        use credentials:
                        <br/>
                        <strong>username:</strong>&nbsp;negi@gmail.com
                        <br/><strong>password:</strong>&nbsp;abcd1234
                      </li>                    
                      <li><Link to="/login/business">Business Login</Link><br/>
                        use credentials:
                        <br/>
                        <strong>username:</strong>&nbsp;manager@Kwimbee.com
                        <br/><strong>password:</strong>&nbsp;abcd1234
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
