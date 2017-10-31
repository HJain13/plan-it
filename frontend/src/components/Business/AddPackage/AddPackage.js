import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';
import BusinessService from '../BusinessService';
import Header from '../Header/Header';

class AddPackage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			package: {
			email: '',
			pass: ''
			},
			field_empty: false,
			is_loading: false,
		};
		this.findUserService = new BusinessService();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const field = event.target.name;
		const user = this.state.user;
		user[field] = event.target.value;
		this.setState({
			user
		});
	}
		
	render() {
		if (localStorage.isLoggedIn === 'yes' && localStorage.userType === 'business'){
			return (
				<div className="App">
					<Header location={this.props.location} />
					<div className="hero is-light">
						<div className="hero-body">
							<div className="title is-1 has-text-weight-light">
								Add a Package
							</div>
							<br/>
							<div className="columns">
								<div className="column is-6 is-offset-3">
								<div className="field">
									<p className="control has-icons-left has-icons-right">
									<input onChange={this.handleChange} name="email" className="input" type="email" placeholder="Email"/>
									<span className="icon is-small is-left">
										<i className="fa fa-envelope"></i>
									</span>
									<span className="icon is-small is-right">
										<i className="fa fa-check"></i>
									</span>
									</p>
								</div>
								<div className="field">
									<p className="control has-icons-left">
									<input onChange={this.handleChange} name="pass" className="input" type="password" placeholder="Password"/>
									<span className="icon is-small is-left">
										<i className="fa fa-lock"></i>
									</span>
									</p>
									{ this.state.field_empty === true ? <FieldsEmpty /> : null}                        
								</div>
								<div className="field">
									<p className="control">
									<button onClick={this.handleSubmit} className="button is-success">
										Login
									</button>
									</p>
									{ this.state.wrong_credentials === true ? <WrongEPass /> : null}         
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

export default AddPackage;
