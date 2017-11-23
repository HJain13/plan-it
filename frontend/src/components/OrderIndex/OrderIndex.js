import React, {Component} from 'react';
import OrderService from '../OrderService';
import axios from 'axios';
import Header from '../Header/Header';
import TableRowOrder from '../TableRowOrder';

var baseUrl = '/api';

class OrderIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      order: {
        uemail: '',
        bemail: '',
        pid: '',
        cost: ''
      },
      items: ''
    };
    this.addOrderService = new OrderService();
  }
  componentWillMount() {
    axios
      .get(baseUrl + '/orders')
      .then(response => {
        this.setState({orders: response.data});
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {
    if (this.state.orders instanceof Array) {
      return this
        .state
        .orders
        .map(function (object, i) {
          if (object.order.bemail === localStorage.email) {
            return <TableRowOrder obj={object} key={i}/>;
          }
          else return null;
        })
    }
  }

  render() {
    if (localStorage.isLoggedIn === 'yes' && localStorage.userType === 'business') {
      return (
        <div>
          <Header location={this.props.location} />
          <div className="hero is-light">
            <div className="hero-body">
              <div className="container has-text-centered">
                <table className="table is-striped">
                  <thead>
                    <tr>
                      <td>Package Id</td>
                      <td>User Email</td>
                      <td>Cost</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.tabRow()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      localStorage.isLoggedIn="false";
      localStorage.name="";
      localStorage.userType="";      
      window.location = "/login/business"
    }
  }
}

export default OrderIndex;