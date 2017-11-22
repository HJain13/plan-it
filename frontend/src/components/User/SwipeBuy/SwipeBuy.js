import React, {Component} from 'react';
import PackageService from '../PackageService';
import axios from 'axios';
import Header from '../Header/Header';
var baseUrl = '/api';

class SwipeBuy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ptype : '',
      swipe_count: 0,
      a_choice1: false,
      a_choice2: false,
      a_choice3: false,
      a_choice4: false,
      a_choice5: false,      
      d_choice1: false,
      d_choice2: false,
      d_choice3: false,
      d_choice4: false,
      d_choice5: false,
      t_choice1: false,
      t_choice2: false,
      t_choice3: false,
      t_choice4: false,
      t_choice5: false,
      is_loading: false
    };
    this.addPackageService = new PackageService();
    this.selectActivity = this.selectActivity.bind(this);
    this.selectDining = this.selectDining.bind(this);
    this.selectTravel = this.selectTravel.bind(this);
    this.selectYes = this.selectYes.bind(this);
    this.selectNo = this.selectNo.bind(this);
  }

  selectActivity(event) {
    event.preventDefault();
    this.setState({ ptype: 'activity' });
  }

  selectDining(event) {
    event.preventDefault();
    this.setState({ ptype: 'dining' });
  }
  
  selectTravel(event) {
    event.preventDefault();
    this.setState({ ptype: 'travel' });
  }

  selectYes(event) {
    event.preventDefault();
    var stateObject = function() {
      returnObj = {};
      returnObj[this.target.name] = true;
      returnObj['swipe_count'] = returnObj['swipe_count'] + 1;
         return returnObj;
    }.bind(event)();    
    this.setState( stateObject );   
  }

  selectNo(event) {
    event.preventDefault();
    var stateObject = function() {
      returnObj = {};
      returnObj[this.target.name] = false;
      returnObj['swipe_count'] = returnObj['swipe_count'] + 1;      
         return returnObj;
    }.bind(event)();    
    this.setState( stateObject );   
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

  render() {
    if (localStorage.isLoggedIn === 'yes' && localStorage.userType === 'user') {
      return (
        <div>
          <Header location={this.props.location} />
          <div className="hero is-light">
            <div className="hero-body">
              <div className="container has-text-centered">
              { this.state.ptype === '' ?
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
              : null }
              <br/>
              { this.state.diningIsSelected === true && this.state.swipe_count === 0 ?
                <div class="column is-4 is-offset-4">
                  <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://i.imgur.com/1MiLHA9.jpg"  alt="" />
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <a className="card-footer-item has-text-info" name="d_choice1" onClick={this.selectYes}>Yes</a>
                    <a className="card-footer-item has-text-info" name="d_choice1" onClick={this.selectNo}>No</a>
                  </footer>
                </div>
              </div>              
              : null }
              { this.state.diningIsSelected === true && this.state.swipe_count === 1 ?
                <div class="column is-4 is-offset-4">
                  <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://i.imgur.com/uVIS1rK.jpg"  alt="" />
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <a className="card-footer-item has-text-info" name="d_choice2" onClick={this.selectYes}>Yes</a>
                    <a className="card-footer-item has-text-info" name="d_choice2" onClick={this.selectNo}>No</a>
                  </footer>
                </div>
              </div>              
              : null }
              { this.state.diningIsSelected === true && this.state.swipe_count === 2 ?
                <div class="column is-4 is-offset-4">
                  <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://i.imgur.com/4ao82Xq.jpg"  alt="" />
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <a className="card-footer-item has-text-info" name="d_choice3" onClick={this.selectYes}>Yes</a>
                    <a className="card-footer-item has-text-info" name="d_choice3" onClick={this.selectNo}>No</a>
                  </footer>
                </div>
              </div>              
              : null }
              { this.state.diningIsSelected === true && this.state.swipe_count === 3 ?
                <div class="column is-4 is-offset-4">
                  <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://i.imgur.com/WtSNgo8.jpg"  alt="" />
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <a className="card-footer-item has-text-info" name="d_choice4" onClick={this.selectYes}>Yes</a>
                    <a className="card-footer-item has-text-info" name="d_choice4" onClick={this.selectNo}>No</a>
                  </footer>
                </div>
              </div>              
              : null }
              { this.state.diningIsSelected === true && this.state.swipe_count === 4 ?
                <div class="column is-4 is-offset-4">
                  <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://i.imgur.com/tsxOjMK.jpg"  alt="" />
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <a className="card-footer-item has-text-info" name="d_choice5" onClick={this.selectYes}>Yes</a>
                    <a className="card-footer-item has-text-info" name="d_choice5" onClick={this.selectNo}>No</a>
                  </footer>
                </div>
              </div>              
              : null }
              { this.state.travelIsSelected === true && this.state.swipe_count === 0 ?
                <div class="column is-4 is-offset-4">
                  <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://i.imgur.com/1MiLHA9.jpg"  alt="" />
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <a className="card-footer-item has-text-info" name="t_choice1" onClick={this.selectYes}>Yes</a>
                    <a className="card-footer-item has-text-info" name="t_choice1" onClick={this.selectNo}>No</a>
                  </footer>
                </div>
              </div>              
              : null }
              { this.state.travelIsSelected === true && this.state.swipe_count === 1 ?
                <div class="column is-4 is-offset-4">
                  <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://i.imgur.com/1MiLHA9.jpg"  alt="" />
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <a className="card-footer-item has-text-info" name="t_choice2" onClick={this.selectYes}>Yes</a>
                    <a className="card-footer-item has-text-info" name="t_choice2" onClick={this.selectNo}>No</a>
                  </footer>
                </div>
              </div>              
              : null }
              { this.state.travelIsSelected === true && this.state.swipe_count === 2 ?
                <div class="column is-4 is-offset-4">
                  <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://i.imgur.com/1MiLHA9.jpg"  alt="" />
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <a className="card-footer-item has-text-info" name="t_choice3" onClick={this.selectYes}>Yes</a>
                    <a className="card-footer-item has-text-info" name="t_choice3" onClick={this.selectNo}>No</a>
                  </footer>
                </div>
              </div>              
              : null }
              { this.state.travelIsSelected === true && this.state.swipe_count === 3 ?
                <div class="column is-4 is-offset-4">
                  <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://i.imgur.com/1MiLHA9.jpg"  alt="" />
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <a className="card-footer-item has-text-info" name="t_choice4" onClick={this.selectYes}>Yes</a>
                    <a className="card-footer-item has-text-info" name="t_choice4" onClick={this.selectNo}>No</a>
                  </footer>
                </div>
              </div>              
              : null }
              { this.state.travelIsSelected === true && this.state.swipe_count === 4 ?
                <div class="column is-4 is-offset-4">
                  <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://i.imgur.com/1MiLHA9.jpg"  alt="" />
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <a className="card-footer-item has-text-info" name="t_choice5" onClick={this.selectYes}>Yes</a>
                    <a className="card-footer-item has-text-info" name="t_choice5" onClick={this.selectNo}>No</a>
                  </footer>
                </div>
              </div>              
              : null }              
              { this.state.activityIsSelected === true && this.state.swipe_count === 0 ?
                <div class="column is-4 is-offset-4">
                  <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://i.imgur.com/1MiLHA9.jpg"  alt="" />
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <a className="card-footer-item has-text-info" name="a_choice1" onClick={this.selectYes}>Yes</a>
                    <a className="card-footer-item has-text-info" name="a_choice1" onClick={this.selectNo}>No</a>
                  </footer>
                </div>
              </div>              
              : null }              
              { this.state.activityIsSelected === true && this.state.swipe_count === 1 ?
                <div class="column is-4 is-offset-4">
                  <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://i.imgur.com/1MiLHA9.jpg"  alt="" />
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <a className="card-footer-item has-text-info" name="a_choice2" onClick={this.selectYes}>Yes</a>
                    <a className="card-footer-item has-text-info" name="a_choice2" onClick={this.selectNo}>No</a>
                  </footer>
                </div>
              </div>              
              : null }              
              { this.state.activityIsSelected === true && this.state.swipe_count === 2 ?
                <div class="column is-4 is-offset-4">
                  <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://i.imgur.com/1MiLHA9.jpg"  alt="" />
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <a className="card-footer-item has-text-info" name="a_choice3" onClick={this.selectYes}>Yes</a>
                    <a className="card-footer-item has-text-info" name="a_choice3" onClick={this.selectNo}>No</a>
                  </footer>
                </div>
              </div>              
              : null }              
              { this.state.activityIsSelected === true && this.state.swipe_count === 3 ?
                <div class="column is-4 is-offset-4">
                  <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://i.imgur.com/1MiLHA9.jpg"  alt="" />
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <a className="card-footer-item has-text-info" name="a_choice4" onClick={this.selectYes}>Yes</a>
                    <a className="card-footer-item has-text-info" name="a_choice4" onClick={this.selectNo}>No</a>
                  </footer>
                </div>
              </div>              
              : null }              
              { this.state.activityIsSelected === true && this.state.swipe_count === 4 ?
                <div class="column is-4 is-offset-4">
                  <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://i.imgur.com/1MiLHA9.jpg"  alt="" />
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <a className="card-footer-item has-text-info" name="a_choice5" onClick={this.selectYes}>Yes</a>
                    <a className="card-footer-item has-text-info" name="a_choice5" onClick={this.selectNo}>No</a>
                  </footer>
                </div>
              </div>              
              : null }              
              { this.state.swipe_count === 5 ?
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
      window.location = "/login/user"
    }
  }
}

export default SwipeBuy;