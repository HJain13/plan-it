import React, {Component} from 'react';
import '../../css/App.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import AdminService from '../AdminService';

function FieldsEmpty() {
  return (
    <p className="help is-danger">Some Fields are Empty!!</p> 
  );
}

function WrongEPass() {
  return (
    <p className="help is-danger">Wrong Username/Password!!</p> 
  );
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        pass: ''
      },
      field_empty: false,
      wrong_credentials: false
    };
    this.findUserService = new AdminService();
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
    if (this.state.user.email===''||this.state.user.pass==='') {
      this.setState({field_empty: true});   
    }
    else {
      this.setState({field_empty: false}); 
      var check = this.findUserService.login(this.state.user);
      if (check === true) {
        // this.setState({ wrong_credentials: false });
        console.log("check is true");        
      }
      else {
        // this.setState({ wrong_credentials: true });
        console.log("check is false");
      }
    }
  }

  render() {
    if (localStorage.isLoggedIn === 'yes'){
      if (localStorage.userType === 'admin') {
        window.location = '/admin';
      }
      else if (localStorage.userType === 'business'){
        window.location = '/business';
      }
      else {
        return (null)
      }
    }
    else {
      return (
        <div className="App">
          <Header location={this.props.location} />
          <br/>
          <div className="columns is-gapless">
            <div className="column is-4 is-sandwich">
            </div>
            <div className="column is-7">
              <div className="box is-over">
                <div className="is-vcentered">
                  <div className="title is-1 has-text-weight-light">
                    Admin Login
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
                        { this.state.field_empty === true ? <FieldsEmpty /> : null}                        
                      </div>
                      <div className="field">
                        <p className="control">
                          <button onClick={this.handleSubmit} className="button is-success">
                            Login
                          </button>
                        </p>
                        { this.state.wrong_credentials === true ? <WrongEPass /> : null}         
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-1 is-sandwich"></div>
          </div>
          <div className="section">
            <div className="container">
              <div className="box">
                <Link to="/login/business">Business Login</Link><br/>
                <Link to="/login">User Login</Link><br/>
              </div>
            </div>  
          </div>
        </div>
      );
    }
  }
}

export default Login;
