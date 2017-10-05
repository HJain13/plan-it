import axios from 'axios';
class UserService {
  sendData(data) {
    axios
      .post('http://localhost:4200/users/add/post', {user: data})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  login(data) {
    axios
      .post('http://localhost:4200/users/auth', {user: data})
      .then(function (response) {
        console.log(response);
        if (response !== null) { 
          // console.log(response.data.user.name);
          localStorage.setItem("name", response.data.user.name);
          localStorage.setItem("isLoggedIn", "yes");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}

export default UserService;