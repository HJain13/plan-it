import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';
import Header from '../Header/Header';

class Business extends Component {
  render() {
		if (localStorage.isLoggedIn === 'yes' && localStorage.userType === 'business'){
			return (
				<div className="App">
					<Header location={this.props.location} />
					<div className="hero is-light">
						<div className="hero-body">
							<div className="box">
								<Link to="/business/orders-index">View Orders</Link>
							</div>
							<div className="box">
								<Link to="/business/plans">Add Plans for Sale</Link>
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
