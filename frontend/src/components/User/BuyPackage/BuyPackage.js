import React, { Component } from 'react';
import axios from 'axios';
import PackageService from '../../PackageService';
import OrderService from '../../OrderService';
import Header from '../../Header/Header';

function IsLoading() {
  return (
    <div className="is-material-progress">
      <div className="indeterminate"></div>
    </div>
  );
}

class BuyPackage extends Component {
  constructor(props) {
    super(props);
    this.addItemService = new PackageService();
    this.addOrderService = new OrderService();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      package: {
        email:'',
        combo_name: '',
        menu_image: '',
        specials: [],
        cost_for_two: '',
        ptype: '',
        brochure: '',
        location: '',
        activity: [],
        cost: '',
        pictures: [],
        food_specials: [],
        duration: '',
        phone_no:'',
        approved:''
      },
      pid: '',
      order: {
        uemail: '',
        bemail: '',
        pid: '',
        cost: ''
      },
      is_loading: false
    };
  }

  componentDidMount(){
    this.setState({is_loading: true});
    axios.get('/api/packages/edit/'+this.props.match.params.id)
    .then(response => {
      this.setState({ package: response.data.package });
      this.setState({ pid: response.data._id });      
      this.setState({is_loading: false});
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const order = this.state.order;
    order['uemail'] = localStorage.email;
    order['bemail'] = this.state.package.b_email;
    order['cost'] = this.state.package.cost;
    order['pid'] = this.state.pid;
    this.setState({
      order: order
    });
    this.addOrderService.sendData(this.state.order);
    this.props.history.push('/user');
  }

  render() {
    return (
      <div>
        { this.state.is_loading && <IsLoading /> }
        <Header location={'/user/buy'} />
        <div className="title is-1 has-text-weight-light">{this.state.package.p_name}</div>
        <div className="columns">
          <div className="column is-6 is-offset-3 has-text-left">
            <div className="content has-text-centered">
            { this.state.package.ptype === 'activity' ? 
              <div>
                <p> {this.state.package.p_name} </p>
                <p> {this.state.package.pictures} </p>
                <p> {this.state.package.location} </p>
                <p> {this.state.package.specials} </p>
                <p> {this.state.package.cost} </p>
              </div>
            : null }


            {this.state.package.ptype ==='dining'?


            <div class="columns is-mobile is-centered">
                 <div class="column is-half is-narrow">
                     <p class="bd-notification is-info">
                     <img src= {this.state.package.pictures} alt=""/>
                     <p class="title is-4">{this.state.package.p_name}</p>
                     <p class="subtitle is-6">  {this.state.package.pictures}</p>
                     <p> <strong>Food:</strong>{this.state.package.specials} </p>
                     <p> <strong>Cost:</strong>{this.state.package.cost} </p>
                      </p>
                  </div>
              </div>

            : null }
              <br/>

        { this.state.package.ptype === 'travel' ? 
              <div class="columns is-mobile is-centered">
                 <div class="column is-half is-narrow">
                     <p class="bd-notification is-info">
                     <img src= {this.state.package.pictures} alt=""/>
                     <p class="title is-4">{this.state.package.p_name}</p>
                     <p> <strong>Food:</strong>{this.state.package.specials} </p>
                     <p> <strong>Location:</strong>{this.state.package.location} </p>
                     <p> <strong>Duration:</strong>{this.state.package.duration} </p>
                     <p> <strong>Cost:</strong>{this.state.package.cost} </p>
                      </p>
                  </div>
              </div>
            : null }
              <br/>
              <button value="Buy" onClick={this.handleSubmit} className="button is-primary">Buy</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BuyPackage;