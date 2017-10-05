import React, {Component} from 'react';
import '../../css/App.css';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import UserService from '../UserService';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        pass: '',
        repass: '',            
        phone_no: ''
      },
      match_error: false
    };
    this.addUserService = new UserService();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    if (field === 'pass' || field === 'repass') {
      if  (this.state.user.pass!==this.state.user.repass && this.state.user.repass!=='') {
        this.setState({match_error: true});
      }
    }
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({
      user
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.user.name!==''&&this.state.user.email!==''&&this.state.user.pass!==''&&this.state.user.pass===this.state.user.repass&&this.state.user.phone_no!=='') {
      this.addUserService.sendData(this.state.user);
      this.props.history.push('/');
    }
    else {
      alert("Some Fields Are Empty and/or Passwords Don't Match!!")
    }
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
                I'm Already Registered
              </div>
              <br/>
              <p>
                We are here to enhance user experience in travel and dining by saving user’s
                time on choosing and booking their preferred choice, while providing more
                exposure and customers to local dining and housing businesses. Interested? Sign
                Up!!
              </p>
              <br/>
              <Link to="/login" className="button is-warning is-medium">Login</Link>
              <br/>
            </div>
          </div>
          <div className="column is-7">
            <div className="box is-over">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="is-vcentered">
                    <div className="title is-1 has-text-weight-light">
                      Sign Up
                    </div>
                    <br/>
                    <div className="field is-horizontal">
                      <div className="field-body">
                        <div className="field">
                          <p className="control is-expanded has-icons-left">
                            <input className="input" type="text" placeholder="Name" onChange={this.handleChange} name="name" value={this.state.user.name} />
                            <span className="icon is-small is-left">
                              <i className="fa fa-user"></i>
                            </span>
                          </p>
                        </div>
                        <div className="field">
                          <p className="control is-expanded has-icons-left">
                            <input className="input" type="email" placeholder="Email" onChange={this.handleChange} name="email" value={this.state.user.email}/>
                            <span className="icon is-small is-left">
                              <i className="fa fa-envelope"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="field is-horizontal">
                      <div className="field-body">
                        <div className="field">
                          <p className="control is-expanded has-icons-left">
                            <input className="input" type="text" placeholder="Password" onChange={this.handleChange} name="pass" value={this.state.user.pass} />
                            <span className="icon is-small is-left">
                              <i className="fa fa-key"></i>
                            </span>
                          </p>
                        </div>
                        <div className="field">
                          <p className="control is-expanded has-icons-left">
                            <input className="input" type="email" placeholder="Confirm Password" onChange={this.handleChange} name="repass" value={this.state.user.repass}/>
                            <span className="icon is-small is-left">
                              <i className="fa fa-key"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="field is-horizontal">
                      <div className="field-body">
                        <div className="field is-expanded">
                          <div className="field has-addons">
                            <p className="control">
                              <a className="button is-static">+91</a>
                            </p>
                            <p className="control is-expanded">
                              <input className="input" type="tel" placeholder="Your phone number" onChange={this.handleChange} name="phone_no" value={this.state.user.phone_no}/></p>
                          </div>
                          <p className="help">Do not enter the first zero</p>
                        </div>
                      </div>
                    </div>

                    <div className="field is-horizontal">
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <button className="button is-primary" onClick={this.handleSubmit}>Register</button>
                          </div>
                        </div>
                      </div>
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

export default Register;
