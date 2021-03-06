import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';
import Header from '../Header/Header';

class Settings extends Component {
	render() {
		if (localStorage.isLoggedIn === 'yes' && localStorage.userType === 'user'){
			return (
				<div className="App">
					<Header location={this.props.location} />
					<div className="hero is-light">
						<div className="hero-body">
							<div className="box">
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

export default Settings;
