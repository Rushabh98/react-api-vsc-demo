// const axios = require('axios')
// //mocking entire axios module
// jest.mock('axios');

// describe("mock api calls", () => {
//    test("mocking external endpoint in axios", () => {
//        
//        // arrange
//        const mockedResponse = {data: {username:'test-user', address:'India'}}
//        axios.get.mockResolvedValue(mockedResponse)
//        
//        const getUserData = require('../jest-mock.js')
//   
//        // act
//        getUserData()
//   
//        // asserts
//        expect(axios.get).toHaveBeenCalled()
//        expect(axios.get).toHaveBeenCalledWith('https://reqres.in/api/users/2')
//   
//    })
// })

// const getFirstAlbumTitle = require('../jest-mock.js');
// it('returns the title of the first album', async () => {
//  // Run the function
//   const title = await getFirstAlbumTitle();  
//   // Make an assertion on the result
//   expect(title).toEqual('quidem molestiae enim');  
// });

const getFirstAlbumTitle = require('../jest-mock.js');
const axios = require('axios');
jest.mock('axios');
it('returns the title of the first album', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: 'My First Album'
      },
      {
        userId: 1,
        id: 2,
        title: 'Album: The Sequel'
      }
    ]
  });
  const title = await getFirstAlbumTitle();
  expect(title).toEqual('My First Album');
});
