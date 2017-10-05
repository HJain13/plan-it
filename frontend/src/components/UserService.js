import axios from 'axios';
class UserService {
  sendData(data) {
    axios.post('http://localhost:4200/users/add/post', {
    user: data
  })
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}

export default UserService;