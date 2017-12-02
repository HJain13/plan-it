import React, {Component} from 'react';
import HelplineService from '../HelplineService';
import axios from 'axios';
import Header from '../Header/Header';
import TableRow from '../TableRowComplaint';

var baseUrl = '/api';

class UserIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
			complaint:{
				uemail: localStorage.email,
				query: '',
				response: '',
				solved: false,
				has_response: false
			},
      items: ''
    };
    this.addHelplineService = new HelplineService();
  }
  componentWillMount() {
    axios
      .get(baseUrl + '/helpline')
      .then(response => {
        this.setState({helpline: response.data});
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {
    if (this.state.helpline instanceof Array) {
      return this
        .state
        .helpline
        .map(function (object, i) {
          return <TableRow obj={object} key={i}/>;
        })
    }
  }

  render() {
    if (localStorage.isLoggedIn === 'yes' && localStorage.userType === 'helpline') {
      return (
        <div>
          <Header location={this.props.location} />
          <div className="hero is-light">
            <div className="hero-body">
              <div className="container has-text-centered">
                <table className="table is-striped">
                  <thead>
                    <tr>
                      <td>id</td>
                      <td>User Email</td>
                      <td>Query</td>
                      <td>Response</td>
                      <td>Solved</td>
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
      window.location = "/login/helpline"
    }
  }
}

export default UserIndex;