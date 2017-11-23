import React, {Component} from 'react';
import PackageService from '../../PackageService';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
var baseUrl = '/api';

class SwipeBuy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ptype : '',
      swipe_count: 0,
      a_choice1: '',
      a_choice2: '',
      a_choice3: '',
      a_choice4: '',
      a_choice5: '',      
      d_choice1: '',
      d_choice2: '',
      d_choice3: '',
      d_choice4: '',
      d_choice5: '',
      t_choice1: '',
      t_choice2: '',
      t_choice3: '',
      t_choice4: '',
      t_choice5: '',
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
    console.log(this.state);    
  }

  selectDining(event) {
    event.preventDefault();
    this.setState({ ptype: 'dining' });
    console.log(this.state);
  }
  
  selectTravel(event) {
    event.preventDefault();
    this.setState({ ptype: 'travel' });
    console.log(this.state);
  }

  selectYes(event) {
    event.preventDefault();
    var stateObject = function() {
      var returnObj = {};
      returnObj[this.target.name] = true;
      returnObj['swipe_count'] = returnObj['swipe_count'] + 1;
      console.log(returnObj);
         return returnObj;
    }.bind(event)();    
    this.setState( stateObject );   
    console.log(this.state);
  }

  selectNo(event) {
    event.preventDefault();
    var stateObject = function() {
      var returnObj = {};
      returnObj[this.target.name] = false;
      returnObj['swipe_count'] = returnObj['swipe_count'] + 1;      
         return returnObj;
    }.bind(event)();    
    this.setState( stateObject );   
    console.log(this.state);
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

  componentDidUpdate() {
    localStorage.d_choice1 = this.state.d_choice1;
    localStorage.d_choice2 = this.state.d_choice2;
    localStorage.d_choice3 = this.state.d_choice3;
    localStorage.d_choice4 = this.state.d_choice4;
    localStorage.d_choice5 = this.state.d_choice5;
    localStorage.a_choice1 = this.state.a_choice1;
    localStorage.a_choice2 = this.state.a_choice2;
    localStorage.a_choice3 = this.state.a_choice3;    
    localStorage.a_choice4 = this.state.a_choice4;    
    localStorage.a_choice5 = this.state.a_choice5;    
    localStorage.t_choice1 = this.state.t_choice1;
    localStorage.t_choice2 = this.state.t_choice2;
    localStorage.t_choice3 = this.state.t_choice3;    
    localStorage.t_choice4 = this.state.t_choice4;    
    localStorage.t_choice5 = this.state.t_choice5; 
    localStorage.choice = this.state.ptype;    
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
              { this.state.ptype === 'dining' && this.state.d_choice1 === ''  ?
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
              { this.state.ptype === 'dining' && this.state.d_choice1 !== '' && this.state.d_choice2 === '' ?
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
              { this.state.ptype === 'dining' && this.state.d_choice2 !== '' && this.state.d_choice3 === '' ?
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
              { this.state.ptype === 'dining' && this.state.d_choice3 !== '' && this.state.d_choice4 === '' ?
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
              { this.state.ptype === 'dining' && this.state.d_choice4 !== '' && this.state.d_choice5 === '' ?
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
              { this.state.ptype === 'travel' && this.state.t_choice1 === '' ?
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
              { this.state.ptype === 'travel' && this.state.t_choice1 !== '' && this.state.t_choice2 === '' ?
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
              { this.state.ptype === 'travel' && this.state.t_choice2 !== '' && this.state.t_choice3 === '' ?
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
              { this.state.ptype === 'travel' && this.state.t_choice3 !== '' && this.state.t_choice4 === '' ?
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
              { this.state.ptype === 'travel' && this.state.t_choice4 !== '' && this.state.t_choice5 === '' ?
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
              { this.state.ptype === 'activity' && this.state.a_choice1 === '' ?
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
              { this.state.ptype === 'activity' && this.state.a_choice1 !== '' && this.state.a_choice2 === '' ?
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
              { this.state.ptype === 'activity' && this.state.a_choice2 !== '' && this.state.a_choice3 === '' ?
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
              { this.state.ptype === 'activity' && this.state.a_choice3 !== '' && this.state.a_choice4 === '' ?
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
              { this.state.ptype === 'activity' && this.state.a_choice4 !== '' && this.state.a_choice5 === '' ?
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
              { this.state.d_choice5 !== '' || this.state.t_choice5 !== '' || this.state.a_choice5 !== '' ?
                <span className="title is-3 has-text-weight-light">
                  <Link to="/user/recommendations" className="button is-success">View My Recommendations</Link>
                </span>      
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