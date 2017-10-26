import React, { Component } from 'react';
import axios from 'axios';
import BusinessService from '../BusinessService';

class ApproveBusiness extends Component {
  constructor(props) {
    super(props);
    this.addItemService = new BusinessService();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      business: {
        name: '',
        m_name: '',
        btype: '',
        email: '',
        pass: '',
        repass: '',
        b_ac_no: '',
        address: '',
        phone_no: '',
        u_type: 'business',
        approved: 'false'
      }
    };
  }

  componentDidMount(){
    axios.get('/api/businesses/edit/'+this.props.match.params.id)
    .then(response => {
      this.setState({ business: response.data.business });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const business = this.state.business;
    business['approved'] = 'true';
    this.setState({
      business
    });
    this.addItemService.updateData(this.state.business,this.props.match.params.id);
    this.props.history.push('/business-index');
  }

  render() {
    return (
          <div className="container">
            <div className="title">{this.state.business.name}</div>
            <p><strong>Manager Name:</strong>&nbsp;{this.state.business.m_name}</p>
            <p><strong>Email:</strong>&nbsp;{this.state.business.email}</p>
            <p><strong>Address:</strong>&nbsp;{this.state.business.address}</p>
            <button type="button" value="Update" onClick={this.handleSubmit} className="button is-primary">Approve</button>
        </div>
    );
  }
}

export default ApproveBusiness;