import React, {Component} from 'react';
import PackageService from '../PackageService';
import axios from 'axios';
import Header from '../Header/Header';
import TableRowPackage from '../TableRowPackage';
import TableRowPackage1 from '../TableRowPackage1';
import TableRowPackage2 from '../TableRowPackage2';
var baseUrl = '/api';

class PackageIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
        package:{
            combo_name: '',
            menu_image: '',
            specials: [],
            cost_for_two: '',
            ptype: '',
            brochure: '',
            location: '',
            activity: [],
            cost: '',
            pictures: [],
            food_specials: [],
            duration: '',
        }
    };
    this.addPackageService = new PackageService();
  }
  componentWillMount() {
    axios
      .get(baseUrl + '/packages')
      .then(response => {
        this.setState({packages: response.data});
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {
    if (this.state.packages instanceof Array) {
      return this
        .state
        .packages
        .map(function (object, i) {
          return <TableRowPackage obj={object} key={i}/>;
        })
    }
  }
  tabRow1() {
    if (this.state.packages instanceof Array) {
      return this
        .state
        .packages
        .map(function (object, i) {
          return <TableRowPackage1 obj={object} key={i}/>;
        })
    }
  }
  tabRow2() {
    if (this.state.packages instanceof Array) {
      return this
        .state
        .packages
        .map(function (object, i) {
          return <TableRowPackage2 obj={object} key={i}/>;
        })
    }
  }

  render() {
    if (localStorage.isLoggedIn === 'yes') {
      return (
        <div>

          <Header location={this.props.location} />
          <div className="hero is-light">
            <div className="hero-body">
              <div className="container has-text-centered">
              <div className="title">Dining Package</div>
                <table className="table is-striped">
                  <thead>
                    <tr>
                      <td>Combo Name</td>
                      <td>Menu Image</td>
                      <td>Specials</td>
                      <td>Cost For Two</td>
                      <td>Package Type</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.tabRow()}
                  </tbody>
                </table>
                <div className="title">Travel Package</div>
                <table className="table is-striped">
                  <thead>
                    <tr>
                      <td>Brochure</td>
                      <td>Location</td>
                      <td>Activity</td>
                      <td>Food</td>
                      <td>Duration</td>
                      <td>Cost</td>
                      <td>Pictures</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.tabRow1()}
                  </tbody>
                </table>
                <div className="title">Activity Package</div>
                <table className="table is-striped">
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Brochure</td>
                      <td>Location</td>
                      <td>Activity</td>
                      <td>Cost</td>
                      <td>Package Type</td>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {this.tabRow2()}
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

export default PackageIndex;