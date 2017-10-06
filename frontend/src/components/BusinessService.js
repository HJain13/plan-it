import axios from 'axios';
var baseUrl = 'https://plan-it.au-syd.mybluemix.net';
class BusinessService {
  sendData(data) {
    axios
      .post(baseUrl + '/businesses/add/post', {user: data})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  login(data) {
    axios
      .post(baseUrl + '/businesses/auth', {user: data})
      .then(response => {
        var result;
        if (response.data !== null) {
          console.log(response.data.user.name);
          localStorage.setItem("name", response.data.user.name);
          localStorage.setItem("isLoggedIn", "yes");
          if (response.data.user.u_type !== 'business' || response.data.user.u_type !== 'user') {
            localStorage.setItem("userType", "admin");
          } else if (response.data.user.u_type === 'business') {
            localStorage.setItem("userType", "business");
          }
          result = true;
        }
        console.log(result);
        window.location = '/login';
        return(result);              
      });
  }

  checkBusiness(data) {
    axios
      .post(baseUrl + '/businesses/findByEmail', {user: data})
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

  getUsers() {
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

}

export default BusinessService;