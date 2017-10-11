import React, {Component} from 'react';
import UserService from '../UserService';
import axios from 'axios';
import Header from '../Header/Header';
import TableRow from '../TableRow';

var baseUrl = '/api';

class UserIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        pass: '',
        repass: '',
        phone_no: '',
        u_type: 'business'
      },
      items: ''
    };
    this.addUserService = new UserService();
  }
  componentWillMount() {
    axios
      .get(baseUrl + '/users')
      .then(response => {
        this.setState({users: response.data});
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {
    if (this.state.users instanceof Array) {
      return this
        .state
        .users
        .map(function (object, i) {
          return <TableRow obj={object} key={i}/>;
        })
    }
  }

  render() {
    if (localStorage.isLoggedIn === 'yes' && localStorage.userType === 'admin') {
      return (
        <div>
          <Header location={this.props.location} />
          <div className="hero is-light">
            <div className="hero-body">
              <div className="container has-text-centered">
                <table className="table is-striped">
                  <thead>
                    <tr>
                      <td>User ID</td>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Phone No.</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.tabRow()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      localStorage.isLoggedIn="false";
      localStorage.name="";
      localStorage.userType="";      
      window.location = "/login/admin"
    }
  }
}

export default UserIndex;