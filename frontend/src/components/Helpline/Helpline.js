import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';
import Header from '../Header/Header';
import HelplineService from '../HelplineService';

class Admin extends Component {
	constructor(props) {
    super(props);
    this.adminHelplineService = new HelplineService();
  }
  render() {
		if (localStorage.isLoggedIn === 'yes' && localStorage.userType === 'helpline'){
			return (
				<div className="App">
					<Header location={this.props.location} />
					<div className="hero is-light">
						<div className="hero-body">
							<div className="columns">
								<div className="column is-6 is-offset-3">
									<div className="box">
										<Link to="/complaint-index">View Complaints</Link>
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
