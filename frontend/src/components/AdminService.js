import axios from 'axios';
var baseUrl = '/api';

class AdminService {

  //Sending Request for Adding Admin
  sendData(data) {
    axios
      .post(baseUrl + '/admins/add/post', {admin: data})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //Checking Credential using API and Redirecting accordingly (Used in Login)
  login(data) {
    axios
      .post(baseUrl + '/admins/auth', {admin: data})
      .then(response => {
        var result;
        if (response.data !== null) {
          console.log(response.data.admin.name);
          localStorage.setItem("name", response.data.admin.name);
          localStorage.setItem("isLoggedIn", "yes");
          localStorage.setItem("userType", "admin");
        }
        console.log(result);
        window.location = '/login'
        return(result);              
      });
  }

  //Checking if a User with a particular Email exists (Used in Registeration for avoiding 2 accounts with same email)
  checkUser(data) {
    axios
      .post(baseUrl + '/admins/findByEmail', {admin: data})
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

  //Getting list of all admins in DB (To be Used in AdminIndex page)
  getUsers() {
    var results;
    axios
      .get(baseUrl + '/admins/')
      .then(function (response) {
        results = response;
      })
      .catch(function (error) {
        console.log(error);
      });
    return (results);
  }

}

export default AdminService;