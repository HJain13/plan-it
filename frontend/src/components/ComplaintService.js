import axios from 'axios';
var baseUrl = '/api';
class ComplaintService {
  sendData(data) {
    axios
      .post(baseUrl + '/complaint/add/post', {order: data})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  checkComplaint(data) {
    axios
      .post(baseUrl + '/complaint/findByEmail', {order: data})
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

  getComplaints() {
    var results;
    axios
      .get(baseUrl + '/complaint/')
      .then(function (response) {
        results = response;
      })
      .catch(function (error) {
        console.log(error);
      });
    return (results);
  }

  updateData(data, id){
    axios.post(baseUrl + '/complaint/update/'+id, {
      order: data
    })
    .then(res => this.setState({ order: res.data }))
    .catch(err => console.log(err))
  }

}

export default ComplaintService;