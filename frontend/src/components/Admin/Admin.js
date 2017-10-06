import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';
import Header from '../Header/Header';
import UserService from '../UserService';

class Admin extends Component {
	constructor(props) {
    super(props);
    this.adminUserService = new UserService();
  }
  render() {
		console.log(localStorage.isLoggedIn);
		if (localStorage.isLoggedIn === 'yes'){
			return (
				<div className="App">
					<Header />
					<div className="hero is-light">
						<div className="hero-body">
							<p className="App-intro">
								<div className="box">
									<Link to="/user-index">View Users</Link>
								</div>
								<div className="box">
									<Link to="/business-approval">Approve Business</Link>
								</div>								
							</p>
						</div>
					</div>        
				</div>
			);	
		}
		else {
			window.location = '/login';
			return(null);
		}
  }
}

export default Admin;
