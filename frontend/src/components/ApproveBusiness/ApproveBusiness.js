import React, { Component } from 'react';
import axios from 'axios';
import BusinessService from '../BusinessService';
import Header from '../Header/Header';

function IsLoading() {
  return (
    <div className="is-material-progress">
      <div className="indeterminate"></div>
    </div>
  );
}

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
      },
      is_loading: false
    };
  }

  componentDidMount(){
    this.setState({is_loading: true});
    axios.get('/api/businesses/edit/'+this.props.match.params.id)
    .then(response => {
      this.setState({ business: response.data.business });
      this.setState({is_loading: false});
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
      <div className="App">
        { this.state.is_loading && <IsLoading /> }
        <Header location={'/approve'} />
        <div className="title is-1 has-text-weight-light">{this.state.business.name}</div>
        <div className="columns">
          <div className="column is-6 is-offset-3 has-text-left">
            <div className="content">
              <p><strong>Manager Name:</strong>&nbsp;{this.state.business.m_name}</p>
              <p><strong>Email:</strong>&nbsp;{this.state.business.email}</p>
              <p><strong>Business Type:</strong>&nbsp;{this.state.business.btype}</p>
              <p><strong>Bank Account No:</strong>&nbsp;{this.state.business.b_ac_no}</p>
              <p><strong>Phone No:</strong>&nbsp;{this.state.business.phone_no}</p>
              <br/>
              <br/>
              <button value="Update" onClick={this.handleSubmit} className="button is-primary">Approve</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApproveBusiness;