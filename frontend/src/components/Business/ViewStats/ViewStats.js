import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../../../css/App.css';
import axios from 'axios';
import OrderService from '../../OrderService';
import Header from '../../Header/Header';
import {BarChart} from 'react-easy-chart';
var baseUrl = '/api';

class AddPackage extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.addUserService = new OrderService();
	}
					
  componentWillMount() {
    axios.get(baseUrl + '/orders').then(response => {
        this.setState({orders: response.data});
      })
		.catch(function (error) {
			console.log(error);
		})	
  }
  tabRow() {
		var total;
    if (this.state.orders instanceof Array) {
      this.state.orders.map(function (object, i) {
				if (object.order.bemail === localStorage.email) {
					localStorage.totalsales = parseInt(localStorage.totalsales,10) + parseInt(object.order.cost,10);
					console.log(parseInt(object.order.cost));
					console.log(localStorage.totalsales);
				}
			})
		}
		return total;
  }

	render() {
		if (localStorage.isLoggedIn === 'yes' && localStorage.userType === 'business'){
			this.tabRow();
			return (
				<div className="App">
					<Header location={this.props.location} />
					<div className="hero is-light">
						<div className="hero-body">
							<br/>
							<div className="columns">
								<div className="column is-6 is-offset-3">
								<div className="title is-2">Total Sales</div>
								<div className="subtitle is-4">{localStorage.totalsales}</div>
								<br/>
								<br/>
								</div>									  
							</div>
							<BarChart axes colorBars
								data={[
									{
										x: '2017-11-30',
										y: 1
									},
									{
										x: '2017-12-01',
										y: 0
									},
									{
										x: '2017-12-02',
										y: 1
									}
								]}
							/>								
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
