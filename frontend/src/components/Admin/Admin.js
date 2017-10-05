import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';
import Header from '../Header/Header';

class Admin extends Component {
  render() {
		console.log(localStorage.isLoggedIn);
		if (localStorage.isLoggedIn === 'true'){
			return (
				<div className="App">
					<Header />
					<div className="hero is-light">
						<div className="hero-body">
							<p className="App-intro">
								<Link to="/view-package">View Packages</Link>
							</p>
						</div>
					</div>        
				</div>
			);	
		}
		else {
			this.props.history.push('/login');
			return(null);
		}
  }
}

export default Admin;
