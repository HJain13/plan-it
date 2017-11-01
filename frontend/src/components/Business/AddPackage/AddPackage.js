import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../css/App.css';
import PackageService from '../../BusinessService';
import Header from '../../Header/Header';

  function Activity() {
	return (
		<div className="columns">
		<div className="column is-6 is-offset-3">
		  <div className="field">
			<p className="control has-icons-left has-icons-right">
			  <input name="name" className="input" type="input" placeholder="Name"/>
			</p>
		  </div>
		  <div className="field">
			<p className="control has-icons-left">
			  <input name="broucher" className="input" type="input" placeholder="Brocher"/>
			</p>                    
		  </div>
		  <div className="field">
			<p className="control has-icons-left">
			  <input name="location" className="input" type="input" placeholder="Location"/>
			</p>                    
		  </div>
		</div>
	  </div>
	);
  }
  function Travel() {
	return (
		<div className="columns">
		<div className="column is-6 is-offset-3">

		  <div className="field">
			<p className="control has-icons-left">
			  <input name="broucher" className="input" type="input" placeholder="Brocher"/>
			</p>                    
		  </div>
		  <div className="field">
			<p className="control has-icons-left">
			  <input name="location" className="input" type="input" placeholder="Location"/>
			</p>                    
		  </div>
		  <div className="field">
			<p className="control has-icons-left has-icons-right">
			  <input name="activity" className="input" type="input" placeholder="Activity"/>
			</p>
		  </div>		  
		</div>
	  </div>
	);
  }
class AddPackage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type_no: '',
			business: {
				business_email: '',
				btype: ''
			},
			Dining_package:{
				menu_image: '',
				specials: {list: ''},
				pictures: {link: ''},
				cost_for_two: '',
				venue: ''
			},
			Activity_package:{
				name: '',
				broucher: '',
				location: '',
				activity: {},
				cost: ''
			},
			Travel_package:{
				broucher: '',
				location: '',
				activity: {},
				food_specials: {},
				duration: '',
				cost: '',
				pictures: {}
			}
		};
		/* this.addUserService = new PackageService(); */
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeDining = this.handleChangeDining.bind(this);
		this.handleChangeActivity = this.handleChangeActivity.bind(this);		
		this.handleChangeTravel = this.handleChangeTravel.bind(this);		
		/* this.handleSubmit = this.handleSubmit.bind(this); */
	}

	handleChange(event) {
		const field = event.target.name;
		const business = this.state.business;
		var type_no=this.state.type_no;
		business[field] = event.target.value;
		if(business[field]==='dining'){
			type_no='1';
		}
		else if(business[field]==='activity_center'){
			type_no='2';
		}
		else{
			type_no='3';
		}
		this.setState({
			business,
			type_no
		});
		console.log(business);
	}
	handleChangeDining(event) {
		const field = event.target.name;
		const Dining_p= this.state.Dining_package;
		if(field === 'list'){
			Dining_p[this.state.Dining_package.specials[field]]=event.target.value;
		}
		else
			Dining_p[field] = event.target.value;

		this.setState({
			Dining_package:Dining_p
		});
		console.log(Dining_p);
	}
	handleChangeActivity(event) {
		const field = event.target.name;
		const Activity_p= this.state.Activity_package;
		if(field === 'list'){
			Activity_p[this.state.Activity_package.specials[field]]=event.target.value;
		}
		else
			Activity_p[field] = event.target.value;

		this.setState({
			Activity_package:Activity_p
		});
		console.log(Activity_p);
	}	
	handleChangeTravel(event) {
		const field = event.target.name;
		const Travel_p= this.state.Travel_package;
		if(field === 'list'){
			Travel_p[this.state.Travel_package.specials[field]]=event.target.value;
		}
		else
			Travel_p[field] = event.target.value;

		this.setState({
			Travel_package:Travel_p
		});
		console.log(Travel_p);
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
								<div className="control">
								  <div className="select is-fullwidth">
									<select value={this.state.business.btype} name="btype" onChange={this.handleChange}>
									  <option value="dining">Dining Business</option>
									  <option value="activity_center">Activity Center</option>
									  <option value="travel">Travel Business</option>
									</select>
								  </div>
								 { console.log(this.state.type_no)}
								</div>
							  </div>
								</div>
							</div>	
							{this.state.business.btype==='dining'?
								<div className="columns">
									<div className="column is-6 is-offset-3">
		 							 	<div className="field">
											<p className="control has-icons-left has-icons-right">
			 								 <input onChange={this.handleChangeDining} name="menu_image" className="input" type="input" placeholder="Menu Image"/>
											</p>
									  </div>
		 						 <div className="field">
										<p className="control has-icons-left">
			  							<input onChange={this.handleChangeDining} name="list" className="input" type="input" placeholder="Specials"/>
										</p>                    
		 						 </div>
		 						 <div className="field">
										<p className="control has-icons-left">
			  							<input onChange={this.handleChangeDining} name="list" className="input" type="input" placeholder="Specials"/>
										</p>                    
		 						 </div>
								</div>
	 					 </div>
						  :null}
						  {this.state.business.btype==='activity_center'?
							<div className="columns">
							<div className="column is-6 is-offset-3">
								<div className="field">
								<p className="control has-icons-left has-icons-right">
									<input onChange={this.handleChangeActivity} name="name" className="input" type="input" placeholder="Name"/>
								</p>
								</div>
								<div className="field">
								<p className="control has-icons-left">
									<input onChange={this.handleChangeActivity} name="broucher" className="input" type="input" placeholder="Brocher"/>
								</p>                    
								</div>
								<div className="field">
								<p className="control has-icons-left">
									<input onChange={this.handleChangeActivity} name="location" className="input" type="input" placeholder="Location"/>
								</p>                    
								</div>
								<div className="field">
								<p className="control has-icons-left">
									<input onChange={this.handleChangeActivity} name="cost" className="input" type="input" placeholder="Cost"/>
								</p>                    
								</div>								
							</div>
							</div>						  :null}		


						  {this.state.business.btype==='travel'?
							<div className="columns">
							<div className="column is-6 is-offset-3">
								<div className="field">
								<p className="control has-icons-left has-icons-right">
									<input onChange={this.handleChangeTravel} name="location" className="input" type="input" placeholder="Location"/>
								</p>
								</div>
								<div className="field">
								<p className="control has-icons-left">
									<input onChange={this.handleChangeTravel} name="broucher" className="input" type="input" placeholder="Brocher"/>
								</p>                    
								</div>
								<div className="field">
								<p className="control has-icons-left">
									<input onChange={this.handleChangeTravel} name="duration" className="input" type="input" placeholder="Duration"/>
								</p>                    
								</div>
								<div className="field">
								<p className="control has-icons-left">
									<input onChange={this.handleChangeTravel} name="cost" className="input" type="input" placeholder="Cost"/>
								</p>                    
								</div>								
							</div>
							</div>						  :null}											  
						  {/* 
							{this.state.business.btype==='dining'?<Dining />:null}		
							{this.state.business.btype==='travel'?<Travel />:null}												 */}
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
