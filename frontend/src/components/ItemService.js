import axios from 'axios';
class ItemService {

  sendData(data) {
    axios.post('https://plan-it.au-syd.mybluemix.net/items/add/post', {
    item: data
  })
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}

export default ItemService;