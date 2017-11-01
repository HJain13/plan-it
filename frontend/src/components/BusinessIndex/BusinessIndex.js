import React, {Component} from 'react';
import BusinessService from '../BusinessService';
import axios from 'axios';
import Header from '../Header/Header';
import TableRowBusiness from '../TableRowBusiness';

var baseUrl = '/api';

function IsLoading() {
  return (
    <div className="is-material-progress">
      <div className="indeterminate"></div>
    </div>
  );
}

class BusinessIndex extends Component {
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
      items: '',
      is_loading: true
    };
    this.addBusinessService = new BusinessService();
  }
  componentWillMount() {
    axios.get(baseUrl + '/businesses')
    .then(response => {
      this.setState({businesses: response.data});
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  tabRow() {
    if (this.state.businesses instanceof Array) {
      this.setState({is_loading: false}); 
      return this
        .state
        .businesses
        .map(function (object, i) {
          return <TableRowBusiness obj={object} key={i}/>;
        })
      }
  }

  render() {
    if (localStorage.isLoggedIn === 'yes' && localStorage.userType === 'admin') {
      return (
        <div>
          { this.state.is_loading && <IsLoading /> }            
          <Header location={this.props.location} />
          <div className="hero is-light">
            <div className="hero-body">
              <div className="container has-text-centered">
                <table className="table is-striped">
                  <thead>
                    <tr>
                      <td>Business ID</td>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Phone No.</td>
                      <td>Is Approved</td>
                      <td></td>
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

export default BusinessIndex;