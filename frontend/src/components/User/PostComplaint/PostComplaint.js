import React, { Component } from 'react';
import '../../../css/App.css';
import ComplaintService from '../../ComplaintService';
import Header from '../../Header/Header';

class PostComplaint extends Component {
	constructor(props) {
		super(props);
		this.state = {
			complaint:{
				uemail: localStorage.email,
				query: '',
				response: '',
				solved: false,
				has_response: false
			}
		};
		this.addUserService = new ComplaintService();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}
	
	handleSubmit(event) {
		event.preventDefault();
		this.addUserService.sendData(this.state.complaint);
		this.props.history.push('/user');
  }

  handleChange(event) {
		const field = event.target.name;
		const complaint = this.state.complaint;
		complaint[field] = event.target.value;
		this.setState({
			complaint
		});
	}
				
	render() {
		if (localStorage.isLoggedIn === 'yes' && (localStorage.userType === 'user' || localStorage.userType === 'business')){
			return (
				<div className="App">
					<Header location={this.props.location} />
					<div className="hero is-light">
						<div className="hero-body">
							<div className="title is-1 has-text-weight-light">
								Post a Complaint
							</div>
							<br/>
							<div className="columns">
								<div className="column is-6 is-offset-3">
									<textarea onChange={this.handleChange} value={this.state.complaint.query} name="query" className="textarea" placeholder="Query"></textarea>
									<br/>
									<div className="field is-horizontal">
										<div className="field-body">
											<div className="field">
												<div className="control">
													<button className="button is-primary" onClick={this.handleSubmit}>Post</button>
												</div>
											</div>
										</div>
									</div>										
								</div>
							</div>
						</div>
					</div>        
				</div>
			);	
		}
		else {
			window.location = '/login/user';
			return(null);
		}
	}
}

export default PostComplaint;
