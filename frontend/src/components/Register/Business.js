import React, {Component} from 'react';
import '../../css/App.css';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import BusinessService from '../BusinessService';

function PassUnmatch() {
  return (
    <p className="help is-danger">Passwords Don't Match!!</p> 
  );
}

function AlreadyExists() {
  return (
    <p className="help is-danger">Email already in use!!</p> 
  );
}

class BusinessRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business: {
        name: '',
        m_name: '',
        btype: '',
        email: '',
        pass: '',
        repass: '',
        b_ac_no: '',
        address: '',
        phone_no: '',
        u_type: 'business',
        approved: 'false'
      },
      match_error: false,
      old_email_error: false
    };
    this.addUserService = new BusinessService();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const business = this.state.business;
    business[field] = event.target.value;
    this.setState({
      business
    });
    if (field === 'pass' || field === 'repass') {
      if  (this.state.business.pass!==this.state.business.repass && this.state.business.repass!=='') {
        this.setState({match_error: true});
      }
      else {
        this.setState({match_error: false});        
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.business.name!==''&&this.state.business.address!==''&&this.state.business.m_name!==''&&this.state.business.b_ac_no!==''&&this.state.business.email!==''&&this.state.business.pass!==''&&this.state.business.pass===this.state.business.repass&&this.state.business.phone_no!=='') {
      this.setState({old_email_error:this.addUserService.checkBusiness(this.state.business.email)});
      this.addUserService.sendData(this.state.business);
      this.props.history.push('/');
    }
    else {
      alert("Some Fields Are Empty and/or Passwords Don't Match!!")
    }
  }

  render() {
    return (
      <div className="App">
        <Header location={this.props.location} />
        <br/>
        <div className="columns is-gapless">
          <div className="column is-4 is-sandwich">
            <div className="is-padded">
              <div className="title is-1 has-text-weight-light">
                I'm Already Registered
              </div>
              <br/>
              <p>
                We are here to enhance business experience in travel and dining by saving user’s
                time on choosing and booking their preferred choice, while providing more
                exposure and customers to You. Interested? Sign Up!!
              </p>
              <br/>
              <Link to="/login/business" className="button is-warning is-medium">Login</Link>
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
                    <div className="field">
                      <p className="control is-expanded has-icons-left">
                        <input className="input" type="text" placeholder="Business Name" onChange={this.handleChange} name="name" value={this.state.business.name} />
                        <span className="icon is-small is-left">
                          <i className="fa fa-briefcase"></i>
                        </span>
                      </p>
                    </div>
                    <div className="field is-horizontal">
                      <div className="field-body">
                        <div className="field">
                          <p className="control is-expanded has-icons-left">
                            <input className="input" type="text" placeholder="Name" onChange={this.handleChange} name="m_name" value={this.state.business.m_name} />
                            <span className="icon is-small is-left">
                              <i className="fa fa-user"></i>
                            </span>
                          </p>
                        </div>
                        <div className="field">
                          <p className="control is-expanded has-icons-left">
                            <input className="input" type="email" placeholder="Email" onChange={this.handleChange} name="email" value={this.state.business.email}/>
                            <span className="icon is-small is-left">
                              <i className="fa fa-envelope"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                      { this.state.old_email_error === true ? <AlreadyExists /> : null}
                    </div>
                    <div className="field">
                      <div className="control">
                        <div className="select is-fullwidth">
                          <select value={this.state.business.btype} name="btype" onChange={this.handleChange}>
                            <option value="dining">Dining Business</option>
                            <option value="activity_center">Activity Center</option>
                            <option value="travel">Travel Business</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    { this.state.match_error === true ? <PassUnmatch /> : null} 
                    <div className="field is-horizontal">
                      <div className="field-body">
                        <div className="field">
                          <p className="control is-expanded has-icons-left">
                            <input className="input" type="password" placeholder="Password" onChange={this.handleChange} name="pass" value={this.state.business.pass} />
                            <span className="icon is-small is-left">
                              <i className="fa fa-key"></i>
                            </span>
                          </p>
                        </div>
                        <div className="field">
                          <p className="control is-expanded has-icons-left">
                            <input className="input" type="password" placeholder="Confirm Password" onChange={this.handleChange} name="repass" value={this.state.business.repass}/>
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
                              <input className="input" type="tel" placeholder="Your phone number" onChange={this.handleChange} name="phone_no" value={this.state.business.phone_no}/></p>
                          </div>
                          <p className="help">Do not enter the first zero</p>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <p className="control is-expanded has-icons-left">
                        <input className="input" type="text" placeholder="Address" onChange={this.handleChange} name="address" value={this.state.business.address} />
                        <span className="icon is-small is-left">
                          <i className="fa fa-address-card-o"></i>
                        </span>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control is-expanded has-icons-left">
                        <input className="input" type="text" placeholder="Bank Account No" onChange={this.handleChange} name="b_ac_no" value={this.state.business.b_ac_no} />
                        <span className="icon is-small is-left">
                          <i className="fa fa-credit-card"></i>
                        </span>
                      </p>
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

export default BusinessRegister;
