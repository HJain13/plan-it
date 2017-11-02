import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../../../css/App.css';
import PackageService from '../../PackageService';
import Header from '../../Header/Header';

class AddPackage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type_no: '1',
			business: {
				business_email: '',
				ptype: 'dining'
			},
			Dining_package:{
				combo_name: '',
				menu_image: '',
				specials: [],
				pictures: [],
				cost_for_two: '',
				ptype: 'dining'
			},
			Activity_package:{
				name: '',
				brochure: '',
				location: '',
				activity: {},
				cost: '',
				ptype: 'activity'
			},
			Travel_package:{
				brochure: '',
				location: '',
				activity: {},
				food_specials: {},
				duration: '',
				cost: '',
				pictures: {},
				ptype: 'travel'
			}
		};
		this.addUserService = new PackageService();
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeDining = this.handleChangeDining.bind(this);
		this.handleChangeActivity = this.handleChangeActivity.bind(this);		
		this.handleChangeTravel = this.handleChangeTravel.bind(this);		
		this.handleSubmitDining = this.handleSubmitDining.bind(this);
	}
	
	handleSubmitDining(event) {
    event.preventDefault();
		this.addUserService.sendData(this.state.Dining_package);
		this.props.history.push('/business');
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
		var special = Dining_p['specials'].slice(0);
		var picture = Dining_p['pictures'].slice(0);
		if(field.substring(0,4) === 'list'){
			var str = event.target.value;
			special = str.split(",");
			picture = str.split(",");
			if (field.substring(4,5) === '0')	Dining_p.specials=special;
			if (field.substring(4,5) === '1')	Dining_p.pictures=picture;
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
		var special = Activity_p['specials'].slice(0);		
		if(field.substring(0,4) === 'list'){
			var str = event.target.value;
			special = str.split(",");
			Activity_p.specials=special;
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
									<select value={this.state.business.ptype} name="ptype" onChange={this.handleChange}>
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
							{this.state.business.ptype==='dining'?
								<div className="columns">
									<div className="column is-6 is-offset-3">
										<div className="field">
											<p className="control has-icons-left has-icons-right">
												<input onChange={this.handleChangeDining} name="combo_name" className="input" type="input" placeholder="Combo Name"/>
												<span class="icon is-small is-left">
													<i class="fa fa-tag"></i>
												</span>
											</p>
									  </div>
		 							 	<div className="field">
											<p className="control has-icons-left has-icons-right">
												<input onChange={this.handleChangeDining} name="menu_image" className="input" type="input" placeholder="Menu Image"/>
												<span class="icon is-small is-left">
													<i class="fa fa-camera"></i>
												</span>
											</p>
									  </div>
										<div className="field">
											<p className="control has-icons-left">
												<input onChange={this.handleChangeDining} name="list0" className="input" type="input" placeholder="Specials"/>
												<span class="icon is-small is-left">
													<i class="fa fa-certificate"></i>
												</span>
											</p>                  
										</div>
										<div className="field">
											<p className="control has-icons-left">
												<input onChange={this.handleChangeDining} name="list1" className="input" type="input" placeholder="Food Images"/>
												<span class="icon is-small is-left">
														<i class="fa fa-camera"></i>
													</span>
											</p>                    
										</div>
                    <div className="field is-horizontal">
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <button className="button is-primary" onClick={this.handleSubmitDining}>Register</button>
                          </div>
                        </div>
                      </div>
                    </div>										
									</div>
	 					 		</div>
						  :null}
						  {this.state.business.ptype==='activity_center'?
							<div className="columns">
								<div className="column is-6 is-offset-3">
									<div className="field">
										<p className="control has-icons-left has-icons-right">
											<input onChange={this.handleChangeActivity} name="name" className="input" type="input" placeholder="Name"/>
										</p>
									</div>
									<div className="field">
										<p className="control has-icons-left">
											<input onChange={this.handleChangeActivity} name="brochure" className="input" type="input" placeholder="Brocher"/>
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
							</div>
							:null}		


						  {this.state.business.ptype==='travel'?
							<div className="columns">
							<div className="column is-6 is-offset-3">
								<div className="field">
								<p className="control has-icons-left has-icons-right">
									<input onChange={this.handleChangeTravel} name="location" className="input" type="input" placeholder="Location"/>
								</p>
								</div>
								<div className="field">
								<p className="control has-icons-left">
									<input onChange={this.handleChangeTravel} name="brochure" className="input" type="input" placeholder="Brocher"/>
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
							</div>
							:null}											  
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
