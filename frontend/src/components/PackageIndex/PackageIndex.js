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
      },
      activityIsSelected: false,
      diningIsSelected: false,
      travelIsSelected: false
    };
    this.addPackageService = new PackageService();
    this.selectActivity = this.selectActivity.bind(this);
    this.selectDining = this.selectDining.bind(this);
    this.selectTravel = this.selectTravel.bind(this);
  }

  selectActivity(event) {
    event.preventDefault();
    this.setState({ activityIsSelected: true });
    this.setState({ diningIsSelected: false });
    this.setState({ travelIsSelected: false });
  }

  selectDining(event) {
    event.preventDefault();
    this.setState({ activityIsSelected: false });
    this.setState({ diningIsSelected: true });
    this.setState({ travelIsSelected: false });
  }
  
  selectTravel(event) {
    event.preventDefault();
    this.setState({ activityIsSelected: false });
    this.setState({ diningIsSelected: false });
    this.setState({ travelIsSelected: true });
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
              <div className="columns">
                <div className="column is-4">
                  <button className="dining-button" onClick={this.selectDining}>Dining</button>
                </div>
                <div className="column is-4">
                  <button className="travel-button" onClick={this.selectTravel}>Travel</button>
                </div>
                <div className="column is-4">
                  <button className="activity-button" onClick={this.selectActivity}>Activity</button>
                </div>
              </div>
              <br/>
              { this.state.diningIsSelected === true ?
              <div>
                <div className="title">Dining Package</div>
                <table className="table is-striped">
                  <thead>
                    <tr>
                      <td>Combo Name</td>
                      <td>Menu Image</td>
                      <td>Specials</td>
                      <td>Cost For Two</td>
                      <td>Package Type</td>
                      <td>Buy</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.tabRow()}
                  </tbody>
                </table>
                <br/>
              </div>
              : null }
              { this.state.travelIsSelected === true ?
                <div>
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
                        <td>Buy</td>
                      </tr>
                    </thead>
                    <tbody>
                      {this.tabRow1()}
                    </tbody>
                  </table>
                  <br/>
                </div>
              : null }
              { this.state.activityIsSelected === true ?
              <div>              
                <div className="title">Activity Package</div>    
                <div class="columns is-multiline is-mobile">
                {this.tabRow2()}
           </div>        
              </div> 
            :null }
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