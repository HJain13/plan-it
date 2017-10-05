import axios from 'axios';
var baseUrl ='https://plan-it.au-syd.mybluemix.net';
class UserService {
  sendData(data) {
    axios
      .post(baseUrl+'/users/add/post', {user: data})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  login(data) {
    axios
      .post(baseUrl+'/users/auth', {user: data})
      .then(function (response) {
        console.log(response);
        if (response !== null) { 
          // console.log(response.data.user.name);
          localStorage.setItem("name", response.data.user.name);
          localStorage.setItem("isLoggedIn", "yes");
          if (response.data.user.u_type !== 'business' || response.data.user.u_type !== 'user') {
            localStorage.setItem("userType", "admin");          
          }
          else if (response.data.user.u_type === 'business' ) {
            localStorage.setItem("userType", "business");                      
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getUsers() {
    var results;
    axios
      .get(baseUrl+'/users/')
      .then(function (response) {
        results = response;
      })
      .catch(function (error) {
        console.log(error);
      });
    return(results);
  }
  

}

export default UserService;