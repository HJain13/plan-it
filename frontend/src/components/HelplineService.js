import axios from 'axios';
var baseUrl = '/api';
class HelplineService {
/*   sendData(data) {
    axios
      .post(baseUrl + '/businesses/add/post', {business: data})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  } */

  login(data) {
    axios
      .post(baseUrl + '/helplines/auth', {helpline: data})
      .then(response => {
        console.log(data);
        var result;
        if (response.data !== null) {
          console.log(response.data.helpline.name);
          localStorage.setItem("name", response.data.helpline.name);
          localStorage.setItem("email", response.data.helpline.email);          
          localStorage.setItem("isLoggedIn", "yes");
          localStorage.setItem("userType", "helpline");
          result = true;
        }
        console.log(result);
        window.location = '/login';
        return(result);              
      });
  }

  /* checkBusiness(data) {
    axios
      .post(baseUrl + '/businesses/findByEmail', {business: data})
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

  getBusinesses() {
    var results;
    axios
      .get(baseUrl + '/businesses/')
      .then(function (response) {
        results = response;
      })
      .catch(function (error) {
        console.log(error);
      });
    return (results);
  }

  updateData(data, id){
    axios.post(baseUrl + '/businesses/update/'+id, {
      business: data
    })
    .then(res => this.setState({ business: res.data }))
    .catch(err => console.log(err))
  }
 */
}

export default HelplineService;