import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';
import Header from '../Header/Header';

class User extends Component {
	render() {
		if (localStorage.isLoggedIn === 'yes' && localStorage.userType === 'user'){
			return (
				<div className="App">
					<Header location={this.props.location} />
					<div className="hero is-light is-fullheight">
						<div className="hero-body">
							<div className="container has-text-centered">
								<div className="columns">
									<div className="column is-4 has-text-centered">
										<img src="https://i.imgur.com/S7S3w94.png" alt="All Packages"/>
										<Link to="/package-index" className="navbar-item button is-primary">
											&nbsp;<strong>View All Packages</strong>
										</Link>
									</div>
									<div className="column is-4 has-text-centered">
										<img src="https://i.imgur.com/SKcep1e.png" alt="Get Recommendation"/>
										<Link to="/user/swipe-buy" className="navbar-item button is-primary">
											&nbsp;<strong>Get Recommendations</strong>
										</Link>
									</div>
									<div className="column is-4 has-text-centered">
										<img src="https://i.imgur.com/CjBGAKf.png" alt="Contact Support"/>
										<Link to="/user/post-complaint" className="navbar-item button is-primary">
											&nbsp;<strong>Need Support?</strong>
										</Link>
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

export default User;
