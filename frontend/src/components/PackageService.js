import axios from 'axios';
var baseUrl = '/api';
class PackageService {
  sendData(data1, data2) {
    axios
      .post(baseUrl + '/packages/add/post', {business: data1, package: data2})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  checkPackage(data) {
    axios
      .post(baseUrl + '/packages/findByEmail', {package: data})
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

  getPackages() {
    var results;
    axios
      .get(baseUrl + '/packages/')
      .then(function (response) {
        results = response;
      })
      .catch(function (error) {
        console.log(error);
      });
    return (results);
  }

  updateData(data, id){
    axios.post(baseUrl + '/packages/update/'+id, {
      package: data
    })
    .then(res => this.setState({ package: res.data }))
    .catch(err => console.log(err))
  }

}

export default PackageService;