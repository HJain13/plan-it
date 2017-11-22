import axios from 'axios';
var baseUrl = '/api';
class OrderService {
  sendData(data) {
    axios
      .post(baseUrl + '/orders/add/post', {order: data})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  checkOrder(data) {
    axios
      .post(baseUrl + '/orders/findByEmail', {order: data})
      .then(function (response) {
        console.log(response);
        if (response === "true") {
          return(true);
        }
        else return(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getOrders() {
    var results;
    axios
      .get(baseUrl + '/orders/')
      .then(function (response) {
        results = response;
      })
      .catch(function (error) {
        console.log(error);
      });
    return (results);
  }

  updateData(data, id){
    axios.post(baseUrl + '/orders/update/'+id, {
      order: data
    })
    .then(res => this.setState({ order: res.data }))
    .catch(err => console.log(err))
  }

}

export default OrderService;