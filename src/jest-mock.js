// const axios = require('axios')
// function getUserData() {
//     axios.get('https://reqres.in/api/users/2')
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error));
//  }
//  //getUserData(); 
// module.exports = (getUserData)

const axios = require('axios');
async function getFirstAlbumTitle() {
  const response = 
       await axios.get('https://jsonplaceholder.typicode.com/albums');
  return response.data[0].title;
}
module.exports = getFirstAlbumTitle;
