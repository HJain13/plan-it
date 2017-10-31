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
		if (localStorage.isLoggedIn === 'yes' && localStorage.userType === 'admin'){
			return (
				<div className="App">
					<Header location={this.props.location} />
					<div className="hero is-light">
						<div className="hero-body">
							<div className="columns">
								<div className="column is-6 is-offset-3">
									<div className="box">
										<Link to="/user-index">View Users</Link>
									</div>
									<div className="box">
										<Link to="/business-index">Approve Business</Link>
									</div>																	
								</div>
							</div>
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
