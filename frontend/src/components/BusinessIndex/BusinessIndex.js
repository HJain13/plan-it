import React, {Component} from 'react';
import BusinessService from '../BusinessService';
import axios from 'axios';
import Header from '../Header/Header';
import TableRowBusiness from '../TableRowBusiness';

var baseUrl = '/api';

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
      isLoading: true
    };
    this.addBusinessService = new BusinessService();
  }
  componentWillMount() {
    axios
      .get(baseUrl + '/businesses')
      .then(response => {
        this.setState({businesses: response.data});
      })
      .catch(function (error) {
        console.log(error);
      })
    
    this.setState({isLoading: false}); 
  }
  tabRow() {
    if (this.state.businesses instanceof Array) {
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
      if(this.state.isLoading) {

      }
      else {
        return (
          <div>
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