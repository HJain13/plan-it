import React, {Component} from 'react';
import '../../css/App.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <br/>
        <div className="columns is-gapless">
          <div className="column is-4 is-sandwich">
            <div className="is-padded">
              <div className="title is-1 has-text-weight-light">
                I'm New Here
              </div>
              <br/>
              <p>
                We are here to enhance user experience in travel and dining by saving user’s
                time on choosing and booking their preferred choice, while providing more
                exposure and customers to local dining and housing businesses. Interested? Sign
                Up!!
              </p>
              <br/>
              <Link to="/register" className="button is-warning is-medium">Sign Up!</Link>
              <br/>
            </div>
          </div>
          <div className="column is-7">
            <div className="box is-over">
              <div className="is-vcentered">
                <div className="title is-1 has-text-weight-light">
                  Login
                </div>
                <br/>
                <div className="columns">
                  <div className="column is-6 is-offset-3">
                    <div className="field">
                      <p className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email"/>
                        <span className="icon is-small is-left">
                          <i className="fa fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                          <i className="fa fa-check"></i>
                        </span>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password"/>
                        <span className="icon is-small is-left">
                          <i className="fa fa-lock"></i>
                        </span>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control">
                        <button className="button is-success">
                          Login
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-1 is-sandwich"></div>
        </div>
      </div>
    );
  }
}

export default Login;
