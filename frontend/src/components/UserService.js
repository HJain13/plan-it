import axios from 'axios';
var baseUrl = '/api';
class UserService {
  sendData(data) {
    axios
      .post(baseUrl + '/users/add/post', {user: data})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  login(data) {
    axios
      .post(baseUrl + '/users/auth', {user: data})
      .then(response => {
        var result;
        if (response.data !== null) {
          console.log(response.data.user.name);
          localStorage.setItem("name", response.data.user.name);
          localStorage.setItem("email", response.data.user.email);          
          localStorage.setItem("isLoggedIn", "yes");
          localStorage.setItem("userType", "user");
        }
        console.log(result);
        window.location = '/login'
        return(result);              
      });
  }

  checkUser(data) {
    axios
      .post(baseUrl + '/users/findByEmail', {user: data})
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
      .get(baseUrl + '/users/')
      .then(function (response) {
        results = response;
      })
      .catch(function (error) {
        console.log(error);
      });
    return (results);
  }

}

export default UserService;