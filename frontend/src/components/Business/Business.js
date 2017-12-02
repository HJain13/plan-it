import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';
import Header from '../Header/Header';

class Business extends Component {
	render() {
		localStorage.totalsales = 0;
		if (localStorage.isLoggedIn === 'yes' && localStorage.userType === 'business'){
			return (
				<div className="App">
					<Header location={this.props.location} />
					<div className="hero is-light">
						<div className="hero-body">
							<div className="columns">							
								<div className="column is-8 is-offset-2">
									<div className="box">
										<Link to="/business/orders-index">View Orders</Link>
									</div>
									<div className="box">
										<Link to="/add-package">Add Package</Link>
									</div>
									<div className="box">
										<Link to="/business/stats">View Stats</Link>
									</div>	
								</div>
							</div>													
						</div>
					</div>        
				</div>
			);	
		}
		else {
			window.location = '/login/business';
			return(null);
		}
	}
}

export default Business;
