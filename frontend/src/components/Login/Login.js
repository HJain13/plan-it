import React, {Component} from 'react';
import '../../css/App.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import UserService from '../UserService';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        pass: ''
      }
    };
    this.findUserService = new UserService();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({
      user
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.findUserService.login(this.state.user);
  }

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
                        <input onChange={this.handleChange} name="email" className="input" type="email" placeholder="Email"/>
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
                        <input onChange={this.handleChange} name="pass" className="input" type="password" placeholder="Password"/>
                        <span className="icon is-small is-left">
                          <i className="fa fa-lock"></i>
                        </span>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control">
                        <button onClick={this.handleSubmit} className="button is-success">
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
